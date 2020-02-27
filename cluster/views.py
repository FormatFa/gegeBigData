from django.shortcuts import render
from django.http import HttpResponse,JsonResponse,HttpRequest
import pyhdfs
from gegebigdata import utils
from user.configtool import readsetting

# 获取hdfs client
def get_client():
    setting = readsetting()
    host = setting['hdfsUrl']
    client = pyhdfs.HdfsClient(hosts=host)
    return client
def deletedir(request:HttpRequest):
    if request.method=='GET':
        path = request.GET['path']
        try:
            result = get_client().delete(path,recursive=True)
        except Exception as e:
            return utils.response(-1,'删除文件失败:'+str(e))
        if result:
            return utils.response(1,'','删除文件成功')
        else:
            return utils.response(-1,'删除文件失败')
# 新建文件夹
def newdir(request:HttpRequest):
    if request.method=='GET':
        path = request.GET['path']
        try:
            result = get_client().mkdirs(path)
        except Exception as e:
            return utils.response(-1,'创建文件夹失败:'+str(e))
        if result:
            return utils.response(1,'','创建文件夹成功')
        else:
            return utils.response(-1,'创建文件夹失败')
# 列出文件
def list_status(request:HttpRequest):
    if request.method=='GET':
        path = request.GET.get('path')
        
        print('列出目录:',path)
        if path==None:
            path='/'
        try:
            
            status = get_client().list_status(path)
        except Exception as e:
            return utils.response(-1,'获取文件列表失败:'+str(e))
        results = []

        for statu in status:
            print(dict(statu))
            results.append(dict(statu))
        res = {
            'status':status
        }
        # 只能是字典类型的
        return utils.response(1,'',res)



# Create your views here.
def index(request):
    return HttpResponse("hello world")
    
