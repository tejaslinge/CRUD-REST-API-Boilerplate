# CRUD-REST-API-Boilerplate

Boilerplate code for implementing CRUD (Create, Read, Update, Delete) REST API in JavaScript using Node.js, Express.js and MongoDB module Mongoose. We're building a CRUD REST API for an application where the User can login, signup and upload or buy a product. Run the command "npm init" in the root folder before starting this exercise. 
Modules required are (Node.js is a pre-requisite): 
  - Express.js (for setting up webpages)
  - Mongoose (for input schemas)
  - body-parser (extracts the entire body portion of an incoming request stream and exposes it on req)
  - nodemon (it will look for any changes in our code and automatically restarts the servers)
  
Run "npm i express body-parser mongoose nodemon" to install all required dependencies.
The project will run on http://localhost:9000/. 

To check how the API works, we'll be using Postman which is a collaboration platform for API development. This is how the code is implemented and its working basically:

1. We create models for taking input from the user. The library used for creating models is Mongoose. Models are like a dictionary, which stores certain { key: value } pairs, key being name of the parameter and value is the value required. Mongoose provides a straight-forward, schema-based solution to model your application data. It includes built-in type casting, validation, query building and more. For every model, we set the parameters necessary to be taken as input from the user. For e.g, in "user" module, we take "name", "email" and "number" as input parameters. Setting "timestamps" to true will store the time in the database at the which a user was created. We've created models for "category" and "product" because they will be stored in the database too. 

2. After creating models for all required input fields, it is now time to control how the model and our API works using controller.js file. In the controller.js, there are several functions such as create, findall, findProducts, etc. What controller.js does basically is, it has several functions which will be called by route.js file to create, update, read and delete users/products/categories. We have heavily used async-await and promises functions here.

3. Route.js file defines certain routes and calls functions from controller.js depending on the action the user chooses to perform. For example, if we send a POST (Create) request to http://localhost:9000/user with all the necessary required fields (as given in user model), create function will be called from the controller and a user will be created and stored in the database. Similarly, other functions are called in controller.js depending on the request (POST, PUT, GET, DELETE) sent by user.
