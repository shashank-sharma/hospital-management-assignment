# Hospital Management

Simple web portal to update the patient records and have authentication system

### Technical Stack

1. Angular 5 (Because Angular 6 support was not there with this project structure)
2. Django Rest Framework (To create REST API)
3. MaterializeCSS

### Introduction

I have set up API server live at heroku server and it is my final Angular project live at:

URL: http://hospi.herokuapp.com

In local testing it will make request to that production level API. Features included:

1. User can register
2. User can login
3. User can see dashboard
4. User can add patient name
5. User can update patient name
6. User can scroll down to see more patient list
7. Delete feature is not there and search feature is also not there

### Installation

1. Create virtual environment:

`python -m venv myvenv`

You can try your preferred method

2. Once activating the virtual environment, Install dependencies

`pip install -r requirements.txt`

And also you need to install Angular dependencies so move to frontend directory and then:

`npm install`

3. Now for local testing go to frontend directory and open webpack.config.js

Now in line 543 and 154 you need to comment that and remove comments from 544 and 155.

4. Once that is done go to root folder and do:

`sh rebuild.sh`

5. Now type:

`python manage.py makemigrations`

`python manage.py migrate`

`python manage.py runserver`

Now if you will go to `127.0.0.1:8000` you should be able to see your project.



For Angular testing you need to comment our 543/544 and 154/155 lines in webpack.config.js and once that is done
you need to type:

`npm run start`

For production level you need 543 and 154 line available.