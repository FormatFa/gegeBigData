from django.http import HttpResponse,JsonResponse

def errorResponse(errmsg):
    return {
        'code':-1,
        'msg':errmsg
    }
def response(code,msg='',data=''):
    return JsonResponse(
        {
        'code':code,
        'msg':msg,
        'data':data
        }
    )
