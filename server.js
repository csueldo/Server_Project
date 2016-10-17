const express = require('express');
const {json} = require('body-parser');
const mongoose = = require('mongoose');
const session = require('express-session');
// const sessionConfig

const app = express();
const port = 5000;

// app.use( session( sessionConfig))
app.use(json());
app.use( express.static(__dirname + "/app"));

const mongoUri = "mongodb://localhost:27017/server-project";
mongoose.connect(mongoUri);
mongoose.connection.once('open', ()=> {console.log(`Connected to mongo db at ${mongoUri}`)});

app.listen( port, () => console.log( `Listening on port  ${ port }.`));
