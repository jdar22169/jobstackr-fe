# DashJobs

A dashboard for job seekers. Written in JavaScript, DashJobs has an Angular.JS front end and a Node.JS backend. Users are able to organize their job search based on where a job is in their pipeline as well as measure important job search KPI’s
___

## How does it work
DashJob helps job seekers know where a job is in their pipleine with a four list.
* Backlog - jobs to apply to
* Today - jobs to apply to now
* Applied - jobs where application have been submited
* In process - jobs that have activity recored such as an email or phone call.

### Workflow
* Paste a link or press `+` to add a job to your backlog
* Move jobs from your Backlog to your Today list.
* Work from your Today list and apply for jobs
* As you apply use the dropdown to note you applied
* Once you have applied jobs will be on the Applied list
* Work from the Applied list to record and events (email, phone calls) that apply to that job
* Jobs with events will be placed on your In Process list.

## Running Locally
First, follow the instructions [here](https://github.com/dmcfly85/dash-job-api) for setting up the back end then clone the repo
```
git clone https://github.com/dmcfly85/dash-job-FE
```
Be sure to install the dependencies:
```
npm install
```
Build the front with:
```
gulp
```

To start the app
```
node server.js
```

You can open the app through the browser by going to [http://localhost:3003](http://localhost:3003/)

## Deploying
First, follow the instructions [here](https://github.com/dmcfly85/dash-job-api) for setting up the back end. Then edit api url in `gulpfile.js`

Create a new heroku app
```
heroku create
```
Push to heroku
```
git push heroku master
```

## License

This project is licensed under the terms of the MIT license.
