from flask import Flask, render_template # type: ignore

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/about-me')
def about_me():
    return render_template('about_me.html')

@app.route('/gallery')
def gallery():
    return render_template('gallery.html')

@app.route('/skills')
def skills():
    return render_template('skills.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

if __name__ == '__main__':
    app.run(debug=True)
