import flask
import flask_cors
import json

app = flask.Flask(__name__)
CORS = flask_cors.CORS(app)

@app.route("/")
def index():
    return flask.send_file("site/index.html")

@app.route("/app.js")
def js():
    return flask.send_file("site/app.js")

@app.route("/styles.css")
def styles():
    return flask.send_file("site/styles.css")

@app.route("/words_dictionary.json")
def dictWords():
    return flask.send_file("site/words_dictionary.json")

if __name__ == "__main__":
    app.run(port=8080)