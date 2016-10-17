const express = require('express');
const {json} = require('body-parser');
const session = require('express-session');
// const sessionConfig

const app = express();
const port = 5000;

// app.use( session( sessionConfig))
app.use(json());
app.use( express.static(__dirname + "/app"));

app.listen( port, () => console.log( `Listening on port  ${ port }.`));
