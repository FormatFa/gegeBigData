import requests
import os



data = open('other/config.json','r').read()
print(data)
url=""
# 提交一个batch
abpath = os.path.abspath('./gegeCore.jar')
# 路径需要/的，不能\\
res = requests.post("http://192.168.4.101:8998/batches",json={

'file':'/root/gegeCore-0.0.1-SNAPSHOT-jar-with-dependencies.jar',
'className':'formatfa.bigdata.gegeCore.GeSpark',
'args':[data]


})
print(res.text)