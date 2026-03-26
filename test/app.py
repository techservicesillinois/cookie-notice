from pathlib import Path

from flask import Flask, render_template

WEB_PATH = Path(__file__).resolve().parent.parent / "src" / "web"
TEMPLATE_FOLDER = WEB_PATH
app = Flask(__name__, template_folder=str(TEMPLATE_FOLDER), static_url_path="/", static_folder=str(WEB_PATH))


@app.route("/")
def stupid_hack():
    return render_template("index.html")
