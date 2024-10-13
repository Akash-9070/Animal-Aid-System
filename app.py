from flask import Flask, render_template

app = Flask(__name__)

app.config['APPLICATION_TITLE'] = 'Animal Aid System'


@app.route('/')
def home():
    return render_template('home.html', show_camera=True)

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

@app.route('/models')
def models():
    return render_template('models.html')

if __name__ == '__main__':
    app.run(debug=True)