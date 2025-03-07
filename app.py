from flask import Flask
from flask_cors import cross_origin
from py3dbp import Packer, Bin, Item
import flask, json, random

app = Flask(__name__)



# a simple page that says hello
@app.route('/')
@cross_origin()
def hello():

    hello_world = '''
    welcome to 3D packing prob API_1.1 <br>
    <br>
    <br>
    update 1.1  : <br>

    Added stability rule : <br>
    1. Define a support ratio, if the ratio below the support surface does not exceed this ratio, compare the second rule.<br>
    2. If there is no support under any vertices of the bottom of the item, then fit = False.<br>


    '''
    return hello_world

@app.route("/calPacking", methods=["POST"])
@cross_origin()
def mkResultAPI():
    res = {"Success": False}
    if flask.request.method == "POST":
        q = eval(flask.request.data.decode('utf-8')) #json text based data like JSON #CONVERT STRING AS PYTHON DICT
        #{"box": {"length": 100, "width": 50, "height": 50}, "item": [{"length": 10, "width": 10, "height": 10}, {"length": 20, "width": 20, "height": 20}], "binding": "some_binding"}
        if 'box' in q.keys() and 'item' in q.keys() and 'binding' in q.keys():
            try:
                packer,box,binding = getBoxAndItem(q)


def getBoxAndItem(data):
    packer = Packer()
    