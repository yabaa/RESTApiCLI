# How to build a RESTful API from CLI

This tuto will show you how to build a RESTful API from CLI in 5 minutes. The database used in the back-end will be MongoDB. (You can also use another database)

### Pre-requisite:

* MongoDB server running locally
* Node.js installed

### Step 1: Install Loopback
What's [Loopback](https://loopback.io/doc/index.html) ?
> npm install -g loopback-cli

### Step 2: Create application
Make a directory where you wish to store your project. Open the folder you have created and run the following commands :

* Create application
> lb
* Run application
> node .

The application can be accessed from http://localhost:3000.
 By default, you have a SwaggerAPI at http://localhost:3000/explorer

### Step 3: Connecting MongoDB
* Install MongoDB Connector
> npm install --save loopback-connector-mongodb
* Connect MongoDB Connector
> lb datasource mongoDS --connector mongoDB

### Step 4: Creating Data models
Run following command to create data models:
> lb model

Note that if you need to have relations between each models, you can use :
> lb relation

### Step 5: Authentication
Coming soon...
