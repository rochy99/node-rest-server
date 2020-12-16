require('./config/config');

const express = require('express');
const app = express();

var bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());



// Peticiones Get

app.get('/usuario', function(req, res) {
    res.json('get Usuario');
});

// Peticiones Post
app.post('/usuario', function(req, res) {

    let body = req.body;

    if (body.nombre === undefined) {

        res.status(400).json({
            ok: false,
            mensaje: 'El nombre es nesecesario'
        });

    } else {

        res.json({
            persona: body
        });
    }


});

// Peticiones PUT
app.put('/usuario/:id', function(req, res) {
    let id = req.params.id;
    res.json({
        id
    });
});

// Peticiones Delete
app.delete('/usuario', function(req, res) {
    res.json('delete Usuario');
});


app.listen(process.env.PORT, () => console.log(`Escuhando el puerto ${process.env.PORT}`));