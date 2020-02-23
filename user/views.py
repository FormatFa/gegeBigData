from django.shortcuts import render
import os
from django.http import HttpRequest,HttpResponse,JsonResponse
import json
from django.views.decorators.csrf import csrf_exempt
# Create your views here.
# 用户相关的
# 用户的设置
setting_file='setting.json'

# 修改设置
@csrf_exempt
def setSetting(request:HttpRequest):
    if request.method=='POST':
        data = request.POST.get('settings')
        with open(setting_file,'w') as file:
            file.write(data)
        return JsonResponse({
            'code':1
        })

# 默认设置
default_setting={
    'livyUrl':'http://192.168.4.101:8998',
    # pyhdfs的url,逗号分割host,port
    'hdfsUrl':'192.168.4.101',
    # hiveserver2的url
    'hiveServer2Url':'xxx'
}
# http://localhost:8000/api/query/hivesql
# 获取设置,http://localhost:8000/api/user/getSetting
def getSetting(request:HttpRequest):
    if request.method=='GET':
        if os.path.exists(setting_file):
            with open(setting_file,'r') as file:
                data = file.read()
                try:
                    res = json.loads(data)
                except:
                    res = default_setting
                
                return JsonResponse(res)
        else:
            return JsonResponse(default_setting)
