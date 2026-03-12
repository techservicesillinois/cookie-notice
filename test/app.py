from pathlib import Path

from flask import Flask

WEB_PATH=Path(__file__).resolve().parent.parent / "src" / "web"
app = Flask(__name__, static_url_path="/", static_folder=str(WEB_PATH))

@app.route("/")
def stupid_hack():
    return '<meta http-equiv="refresh" content="0; url=/index.html" />'
