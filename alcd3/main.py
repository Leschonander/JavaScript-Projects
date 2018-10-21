from flask import Flask, render_template
import json
import csv


jsonData = open('./static/drink.json').read()
data = json.loads(jsonData)




#Insert data here
title = '538 Alcohol Data Viz'


# configuration
DEBUG = True
#Begin App
app = Flask(__name__)
app.config.from_object(__name__)
app.static_folder = 'static'
#Routes
@app.route('/')
def main():
    return render_template('home.html', title = title, data = data)

if __name__ == '__main__':
    app.run()