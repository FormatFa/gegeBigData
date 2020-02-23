from django.db import models
# Create your models here.
# 默认django会给每个model一个自增的字段 (Automatic primary key ﬁelds ,id)
class Project(models.Model):
    # id = models.IntegerField(primary_key=True,)
    # 工程名字
    name = models.CharField(max_length=255,default='新工程')
    # 描述
    desc = models.CharField(max_length=255,default="no description")
    #工程json数据
    data = models.TextField(default='')
    # 工程的状态
    state = models.CharField(max_length=255,default="未知")
    # 会是jar的提交方式，
    batch_id = models.IntegerField(default=-1)

    # 


# 任务执行表,提交的任务运行情况
class Task(models.Model):
    # 工程id，这个task是运行的哪个project的
    project_id = models.ForeignKey(Project,on_delete=models.CASCADE)
    # 任务运行状态
    state = models.IntegerField()
    # 任务执行结果，json
    result = models.TextField()
