from django.contrib import admin
from django.urls import path,include
from django.conf.urls import url
from .models import Project
from rest_framework import routers,serializers,viewsets

# 序列化
class ProjectSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Project
        fields = ['id','desc','name','data']
# 
class UserViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

router = routers.DefaultRouter()
router.register(r'projects',UserViewSet)
print(router.urls)

# 
urlpatterns = [
    url(r'^',include(router.urls))

]