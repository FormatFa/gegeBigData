from django.shortcuts import render
from django.http import HttpRequest,JsonResponse,HttpResponse
# Create your views here.
# sql查询相关
import logging
from django.views.decorators.csrf import csrf_exempt
import csv
logger = logging.getLogger(__name__)
# windows下暂时不可用,直接返回测试数据测试
'''
根据请求参数不同，返回不同的数据，
'''
@csrf_exempt
def hivesql(request:HttpRequest):

    if request.method=='POST':
        sql = request.POST['sql']
        forma = request.POST['format']
        logger.debug("execute sql:"+sql+' format:'+forma)

        res = {
            'columns':['name','age'],
            'data':[
                ['formatfa',11],
                ['bin',12]
            ]
        }
        if forma=='json':
            return JsonResponse(res)
        elif forma=='csv':
        # 返回csv格式的数据
            response = HttpResponse(content_type='text/csv')
            response['Content-Disposition']= 'attachment; filename="result.csv"'
            writer = csv.writer(response)
            writer.writerow(res['columns'])
            
            writer.writerows(res['data'])
            return response



