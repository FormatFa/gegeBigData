import json
import os
# 默认设置
default_setting={
    'livyUrl':'http://192.168.4.101:8998',
    # pyhdfs的url,逗号分割host,port
    'hdfsUrl':'192.168.4.101',
    # hiveserver2的url
    'hiveServer2Url':'xxx'
}
# 用户的设置
setting_file='setting.json'

# 使用全局对象，不考虑并发问题
nowsetting=None

def writesetting(data):
    global nowsetting
    nowsetting=json.loads(data)
    with open(setting_file,'w') as file:
            file.write(data)


def readsetting():
    global nowsetting
    if nowsetting==None:
        print("初始化加载设置..")
        if os.path.exists(setting_file):
                with open(setting_file,'r') as file:
                    data = file.read()
                    try:
                        nowsetting = json.loads(data)
                    except:
                        nowsetting = default_setting
                    
                    return nowsetting
        else:
            return default_setting
    else:
        return nowsetting