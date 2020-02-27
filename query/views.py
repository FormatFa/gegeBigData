from django.shortcuts import render
from django.http import HttpRequest,JsonResponse,HttpResponse

# Create your views here.
# sql查询相关
import logging
from django.views.decorators.csrf import csrf_exempt
import csv
logger = logging.getLogger(__name__)
from user.configtool import readsetting
from pyhive import hive

'''
简陋，粗暴的实现 
'''
def gethive():
    pass
    setting = readsetting()
    return setting['hiveServer2Url']
# windows下暂时不可用,直接返回测试数据测试

def query(database,sql):
    conn = hive.connect(host=gethive,port=10000,username='root',database=database)
    cursor = conn.cursor(arraysize=100)

    cursor.execute(sql)
    meta = cursor.description
    result = cursor.fetchall()
    columns = [ col.name for col in meta]
    data = []
    for item in result:
        data.append(item)
    res = {
            'columns':columns,
            'data':data
        }
    return res

'''
根据请求参数不同，返回不同的数据，
http://localhost:8000/api/query/hivesql?sql=xx&format=json
'''
@csrf_exempt
def hivesql(request:HttpRequest):

    if request.method=='POST':
        sql = request.POST['sql']
        database = request.POST['database']
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
            # query(database,sql)
            return JsonResponse(res)
        elif forma=='csv':
        # 返回csv格式的数据
            response = HttpResponse(content_type='text/csv')
            response['Content-Disposition']= 'attachment; filename="result.csv"'
            writer = csv.writer(response)
            writer.writerow(res['columns'])
            writer.writerows(res['data'])
            return response
