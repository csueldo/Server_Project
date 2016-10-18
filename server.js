const express = require('express');
const {json} = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');


const masterRoutes = require( './server/masterRoutes');

const app = express();
const port = 5000;



app.use( express.static(`${__dirname}/app`));

const mongoUri = "mongodb://localhost:27017/server-project";
mongoose.connect(mongoUri);
mongoose.connection.once('open', ()=> {console.log(`Connected to mongo db at ${mongoUri}`)});

app.use(json());

app.use((req, res) => {
    console.log("body:",req.body);
    console.log("query:",req.query);
    next();
});
masterRoutes(app);

app.listen( port, () => console.log( `Listening on port  ${ port }.`));
