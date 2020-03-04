from django.contrib import admin
from django.urls import path,include
from django.conf.urls import url

from .views import hivesql

# url映射
urlpatterns = [
    path("hivesql",hivesql)
]