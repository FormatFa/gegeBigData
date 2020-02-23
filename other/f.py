from flask import Flask,jsonify
import json
json.dumps
# json.dumps(ensure_ascii=)
app = Flask(__name__)
@app.route('/')
def test():
    return jsonify(obj={
        'name':'测试'
    },ensure_ascii=False)
app.run()