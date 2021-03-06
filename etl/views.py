from django.shortcuts import render
from django.http import HttpRequest,HttpResponse,JsonResponse

from django.views.decorators.csrf import csrf_exempt

from .models import Project

# 用于spark restful api 查询
import requests
import json
import logging
from gegebigdata import utils
from user.configtool import readsetting

'''
logger 用了，但是没有配置，打印了不知道打到哪
'''
logger = logging.getLogger(__name__)


livy = 'http://192.168.4.101:8998'

# 获取livy的地址
def getLivy():
    setting = readsetting()
    return setting['livyUrl']

# 封装get
def get(url):
    res = requests.get(url)
    return json.loads(res.text)

#  运行一个任务,提交到livy
@csrf_exempt
def submitTask(request:HttpRequest):
    logger.debug("请求提交任务:")
    if request.method=='POST':
        param = request.POST
        # 任务的id
        id = int(param.get("id"))

        # 创建batch,会顺便更新batchid
        project = Project.objects.get(id=id)
   
        # 提交任务都livy
        try:
            setting = readsetting()
            coreJar = setting['coreJar']
            res = requests.post(getLivy()+'/batches',json={
                # 在服务器端的jar文件
                'file':coreJar,
                'className':'formatfa.bigdata.gegeCore.GeSpark',
                'args':[project.data]
            })
            result = res.text
            resdata = json.loads(result)
            
            # 提取出batch id,方便后面查询
            batch_id = resdata['id']

            project.batch_id = batch_id
            project.save()
        except Exception as e:
            return utils.response(-1,'请求livy失败:'+str(e))

        return utils.response(resdata)

        
@csrf_exempt
#查询任务状态
def queryTask(request:HttpRequest):

    if request.method=='POST':
        param = request.POST
        
        # 任务的id
        id = int(param.get("id"))
        project = Project.objects.get(id=id)

        batch_id = project.batch_id
        result={}
        try:
            res = requests.get(getLivy()+'/batches/{}/state'.format(batch_id))
            state = json.loads(res.text)
            
            # 查询日志
            res = requests.get(getLivy()+'/batches/{}/log'.format(batch_id))
            log = json.loads(res.text)
            result = {
            'state':state,
            'log':log
        }
        except Exception as e:
            return utils.response(-1,'请求livy失败:'+str(e))
        

        return utils.response(1,data=result)

