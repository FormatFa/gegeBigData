from django.shortcuts import render
import os
from django.http import HttpRequest,HttpResponse,JsonResponse
import json
from django.views.decorators.csrf import csrf_exempt
# Create your views here.
# 用户相关的
from .configtool import writesetting,readsetting
from  .configtool import DEMO
from gegebigdata.utils import response

# 修改设置
@csrf_exempt
def setSetting(request:HttpRequest):
    if request.method=='POST':
        data = request.POST.get('settings')
        writesetting(data)
        if DEMO:
            return response(-1,msg="demo模式，不能修改设置")
        return JsonResponse({
            'code':1
        })


# http://localhost:8000/api/query/hivesql
# 获取设置,http://localhost:8000/api/user/getSetting

def getSetting(request:HttpRequest):
    if request.method=='GET':
        data = readsetting()
        return JsonResponse(data)
