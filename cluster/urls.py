from django.urls import path
from . import views

urlpatterns = [
    path('',views.index,name='index'),
    path('list_status',views.list_status,name='list_status'),
    path('newdir',views.newdir,name='newdir'),
    path('deletedir',views.deletedir,name='deletedir')
]