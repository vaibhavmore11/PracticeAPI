const express = require('express');
const app = express();
const cors = require('cors');
const mongoose =  require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

//import Routes
const postRoute = require('./routes/posts');

//midlewares
app.use(cors());
app.use(bodyParser.json());

//routes
app.use('/posts', postRoute);

// connect to db
mongoose.connect(process.env.DB_CONNECTION, 
    { useNewUrlParser: true },
    () =>
 console.log("Connected to Db!!")
); 

// to listen on the server
app.listen(3000);