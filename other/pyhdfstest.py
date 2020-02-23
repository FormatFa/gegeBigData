import pyhdfs
host='192.168.4.101'


client = pyhdfs.HdfsClient(hosts=host)
print(client.get_content_summary('/'))

print(client.get_active_namenode())

print(client)
print(client.listdir('/'))

# client.list_status