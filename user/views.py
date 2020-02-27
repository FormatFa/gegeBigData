from django.shortcuts import render
import os
from django.http import HttpRequest,HttpResponse,JsonResponse
import json
from django.views.decorators.csrf import csrf_exempt
# Create your views here.
# 用户相关的
from .configtool import writesetting,readsetting

# 修改设置
@csrf_exempt
def setSetting(request:HttpRequest):
    if request.method=='POST':
        data = request.POST.get('settings')
        writesetting(data)
        return JsonResponse({
            'code':1
        })


# http://localhost:8000/api/query/hivesql
# 获取设置,http://localhost:8000/api/user/getSetting

def getSetting(request:HttpRequest):
    if request.method=='GET':
        data = readsetting()
        return JsonResponse(data)
