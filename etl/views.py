from django.shortcuts import render
from django.http import HttpRequest,HttpResponse,JsonResponse

from django.views.decorators.csrf import csrf_exempt
# Create your views here.
from .models import Project

# 用于spark restful api 查询
import requests
import json
import logging
logger = logging.getLogger(__name__)

livy = 'http://192.168.4.101:8998'

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
        logger.warning(param)
        print(param)
        logger.info("任务id:")
        # 创建batch,会顺便更新batchid
        project = Project.objects.get(id=id)
        print(project)
        print(project.data)
        # 提交任务都livy
        res = requests.post(livy+'/batches',json={
            # 在服务器端的jar文件
            'file':'/root/gegeCore-0.0.1-SNAPSHOT-jar-with-dependencies.jar',
            'className':'formatfa.bigdata.gegeCore.GeSpark',
            'args':[project.data]
        })
        result = res.text
        resdata = json.loads(result)
        print(result)
        print('resdata:',resdata)
        # 提取出batch id,方便后面查询
        batch_id = resdata['id']

        project.batch_id = batch_id
        project.save()
        # 返回结果
        return JsonResponse(resdata)
@csrf_exempt
#查询任务状态
def queryTask(request:HttpRequest):

    if request.method=='POST':
        param = request.POST
        
        # 任务的id
        id = int(param.get("id"))
        project = Project.objects.get(id=id)

        batch_id = project.batch_id

        res = requests.get(livy+'/batches/{}/state'.format(batch_id))
        state = json.loads(res.text)

        
        # 查询日志
        res = requests.get(livy+'/batches/{}/log'.format(batch_id))
        log = json.loads(res.text)
        

        result = {
            'state':state,
            'log':log
        }

        return JsonResponse(result)

