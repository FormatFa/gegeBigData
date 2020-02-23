from django.shortcuts import render
from django.http import HttpRequest,JsonResponse
# Create your views here.
# sql查询相关

# windows下暂时不可用,直接返回测试数据测试
def hivesql(request:HttpRequest):
    res = {
        'columns':['name','age'],
        'data':[
            ['formatfa',11],
            ['bin',12]
        ]
    }

    return JsonResponse(res)