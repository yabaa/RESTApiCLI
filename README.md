# How to build a RESTful API from CLI

This tuto will show you how to build a RESTful API from CLI in 5 minutes.
The database used in the back-end will be MongoDB. (You can also use another database)

### Pre-requisite:

* [MongoDB server](https://docs.mongodb.com/manual/administration/install-community/) running locally
* [Node.js](https://nodejs.org/en/download/) installed

### Step 1: Install Loopback 4.x
What's [Loopback](https://loopback.io/doc/en/lb4/Getting-started.html) ?
> npm i -g @loopback/cli

### Step 2: Create application
Make a directory where you wish to store your project. Open the folder you have created and run the following commands :

* Create application
Make sure you are in the right folder and type :
> lb4 app
* Run application
> node .

The application can be accessed from http://localhost:3000.
 By default, you have a SwaggerAPI at http://localhost:3000/explorer

### Step 3: Connecting MongoDB
* Install MongoDB Connector
> npm install --save loopback-connector-mongodb
* Connect MongoDB Connector
> lb4 datasource mongoDS --connector mongoDB

### Step 4: Creating Data models
Run following command to create data models:
> lb4 model

Note that if you need to have relations between each models, you can use :
> lb4 relation >>>not working

### Step 5: Creating Data repositories
Run following command to create data repositories:
> lb4 repository

### Step 6: Creating Data controllers
Run following command to create data controllers:
> lb4 controller

### Step 7: Authentication
You need to create a user and call login api which return you an access_token.

> lb acl>>>not working
