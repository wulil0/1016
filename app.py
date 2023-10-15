# app.py

from flask import Flask, render_template, jsonify, request
from flask_cors import CORS
import utils
import json

app = Flask(__name__)
CORS(app)


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/getS", methods=["POST"])
def getnum():
    mdata = json.loads(request.get_data())
    gnmk, gnx, mknum, xnum = utils.getTop(int(mdata))
    data1 = json.dumps(dict(zip(gnmk, mknum)))
    data2 = json.dumps(dict(zip(gnx, xnum)))
    data = jsonify(data1, data2)
    data.headers.add('Access-Control-Allow-Origin', '*')
    return data


if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True, port=2333)
