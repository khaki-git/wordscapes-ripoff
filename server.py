import flask
import flask_cors
import json

def send_file(directory):
    with open(directory, "r") as file:
        return file.read()

app = flask.Flask(__name__)
#CORS = flask_cors.CORS(app)

@app.route("/")
def index():
    return send_file("site/index.html")

@app.route("/app.js")
def js():
    return send_file("site/app.js")

@app.route("/styles.css")
def styles():
    return flask.send_file("site/styles.css", mimetype="text/css")

@app.route("/words_dictionary.json")
def dictWords():
    return send_file("site/words_dictionary.json")

if __name__ == "__main__":
    app.run(port=4996, host="0.0.0.0")