//include the express library
const express = require("express");
//include the morgan middleware
const morgan = require("morgan");
//include the cors middleware
const cors = require("cors");

//create a new express application 
const app = express()

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

module.exports = app