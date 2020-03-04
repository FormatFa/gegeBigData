from django.http import HttpResponse,JsonResponse

# 接口统一使用这个
def response(code,msg='',data=''):
    return JsonResponse(
        {
        'code':code,
        'msg':msg,
        'data':data
        }
    )
