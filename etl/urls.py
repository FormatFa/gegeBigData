from django.contrib import admin
from django.urls import path,include
from django.conf.urls import url
from .models import Project
from rest_framework import routers,serializers,viewsets

from .views import submitTask,queryTask
from rest_framework.authentication import SessionAuthentication, BasicAuthentication 

class CsrfExemptSessionAuthentication(SessionAuthentication):

    def enforce_csrf(self, request):
        return  # To not perform the csrf check previously happening
 
# 序列化
class ProjectSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Project
        fields = ['id','desc','name','data']
# 
class UserViewSet(viewsets.ModelViewSet):
    # 去除crsf验证
    authentication_classes = (CsrfExemptSessionAuthentication, BasicAuthentication)  
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

router = routers.DefaultRouter()
router.register(r'projects',UserViewSet)
print(router.urls)

# 
urlpatterns = [
    url(r'^',include(router.urls)),
    path("submitTask",submitTask),
    path("queryTask",queryTask)

]