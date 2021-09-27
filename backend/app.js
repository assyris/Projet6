const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('requête reçu');
    next();
});

app.use((req, res, next) => {
    res.status(201);
    next();
});

app.use((req, res, next) => {
    res.json({message: 'votre blablalal'});
    next();
});

app.use((req, res) => {
    console.log('reponse envoyé avec succé');
});

module.exports = app;