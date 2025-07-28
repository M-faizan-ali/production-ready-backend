"type":"module" in package.json to use import syntax instead of require

to restart server after save the file
install nodemon and use in package.json 

prettier extension for formatting 
npm i prettier

whenever we connect with db should use try and catch and async await because our database is on other subcontinent 

// require('dotenv').config()
import dotenv from "dotenv"
dotenv.config({
    path: './env'
}) use this with experimental feature

package.json/
 "scripts": {
    "dev": "nodemon -r dotenv/config --experimental-json-module src/index.js"
  },