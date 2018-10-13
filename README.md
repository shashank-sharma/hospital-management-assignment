# Hospital Management

Simple web portal to update the patient records and have authentication system

Demo: https://youtu.be/N2kwFsGCYRA

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


### Use case

User will go to the home page of the site and will be shown one Sign up page

This page is interactive and have login and sign up section included. Transition is used to show animation
like feature when we switch from signup to login. In signup we have client form validation so submit aciton
only takes place once everything is properly entered. Password strength feature is used to show user
how strong his password is with unique representation, once you will enter you will see the magic.

Authentication page is mobile compatible and took a bit of time to do it. Yes it was not necessary but I really wanted to
challenge myself on this.


Once registered you will need to login with same credentials and after that you should see the dashboard.
In dashboard you will see patient list in left and on right side is our main content section. On left side if you scroll down you
will dynamically load more patient data, so it is just like pagination feature. Clicking on any patient card will show
options to edit it in right side of our main card. Once edit you can update and it will be saved.

API's:

http://hospi.herokuapp.com/api/v1/users/    - Show all authenticated users
http://hospi.herokuapp.com/api/v1/patient/  - All patient list data with limit feature (pagination)
http://hospi.herokuapp.com/api/patient-details-update  - To update patient data
http://hospi.herokuapp.com/api/login - To login and get id with token


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