from django.shortcuts import render
from django.http import HttpResponse,JsonResponse,HttpRequest
import pyhdfs


# 获取hdfs client
def get_client():
    client = pyhdfs.HdfsClient(hosts='192.168.4.101,9000')
    return client

# 列出文件
def list_status(request:HttpRequest):
    if request.method=='GET':
        path = request.GET.get('path')
        
        print('列出目录:',path)
        if path==None:
            path='/'
        status = get_client().list_status(path)
        results = []

        for statu in status:
            print(dict(statu))
            results.append(dict(statu))
        res = {
            'status':status
        }
        # 只能是字典类型的
        return JsonResponse(res)




# Create your views here.
def index(request):
    return HttpResponse("hello world")
    
