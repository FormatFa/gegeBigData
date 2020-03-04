"""gegebigdata URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,include
from django.conf.urls import url
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
urlpatterns = [
    # drf的 api地址
    url(r'^api-auth/', include('rest_framework.urls')),
    path('admin/', admin.site.urls),
    path('api/cluster/',include('cluster.urls')),
    path('api/etl/',include('etl.urls')),
    path('api/user/',include('user.urls')),
    path('api/query/',include('query.urls'))
]
# 添加静态文件访问，使用gunicorn部署时，会找不到static下的文件

urlpatterns += staticfiles_urlpatterns()