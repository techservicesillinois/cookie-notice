from pathlib import Path

from flask import Flask, render_template

WEB_PATH = Path(__file__).resolve().parent.parent / "src" / "web"
TEMPLATE_FOLDER = WEB_PATH
app = Flask(
    __name__,
    template_folder=str(TEMPLATE_FOLDER),
    static_url_path="/",
    static_folder=str(WEB_PATH),
)


@app.route("/")
def stupid_hack():
    return render_template("index.html")


@app.route("/uic")
def stupid_hack_uic():
    return render_template("uic.html")


@app.route("/uis")
def stupid_hack_uis():
    return render_template("uis.html")


@app.route("/csp")
def stupid_hack_csp():
    return render_template("csp.html")


@app.route("/gtag")
def stupid_hack_gtag():
    return render_template("gtag.html")
