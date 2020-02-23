from django.contrib import admin
from django.urls import path,include
from django.conf.urls import url

from .views import getSetting,setSetting

# 
urlpatterns = [
    path("getSetting",getSetting),
    path("setSetting",setSetting)

]