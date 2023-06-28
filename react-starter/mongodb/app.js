const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routeProducts = require('./routers/Patient');
const routeHumeurs = require('./routers/humeur');

mongoose.connect('mongodb+srv://noah:julWAvKT742ZCPXR@mydb.exhfxs3.mongodb.net/', 
{useNewUrlParser: true, useUnifiedTopology: true}).then(() => {console.log("ok")
}).catch((error) => {
    console.log(error);
});

const app = express();

app.use(bodyParser.json());

app.use('/api/humeur/', routeHumeurs);

app.use('/api/produit/', routeProducts);

module.exports = app;