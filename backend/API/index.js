const cors = require('cors');

var express = require('express');
var app = express();
app.use(cors());
app.use(express.json());
const path = require('path');

var sql = require("mssql");

// config for your database
var config = {
    user: 'team1',
    password: 'HuevitoConJamon2023.',
    server: 'lab420azdb01.itesm.mx', 
    port: 1433,
    database: 'team1_test',
    trustServerCertificate: true,
};

// Read
app.get('/api/Usuario/:correo', function (req, res) {
   
    // connect to your database
    sql.connect(config, function (err) {
    
        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();
           
        // query to the database and get the records
        sentencia = "select * from Usuario where correo = '" + req.params.correo + "'"; 
        console.log(sentencia);
        request.query(sentencia, function (err, recordset) {
            
            if (err) console.log(err)

            // send records as a response
            res.send(recordset.recordset[0]);
            
        });
    });
    
});

// Create
app.post('/api/Perritos', (req, res) => {
    sql.connect(config, err => {
        if (err) {
            console.log(err);
            res.status(500).send('No se puede connectar a la base de datos.');
        } else {
            const request = new sql.Request();
            const { nombre } = req.body;
            sentencia = `INSERT INTO Perrito (id_perrito, nombre_perrito) VALUES (((SELECT max(id_perrito) as ultimo FROM Perrito)+1), '${nombre}')`;
            console.log(sentencia);
            request.query(sentencia, (err, result) => {
            if (err) {
                console.log(err);
                res.status(500).send('No se pudo crear el registro.');
            } else {
                res.status(201).send('Registro creado.');
            }
            });
        }
    });
});


app.listen(2023, () => console.log("Listening on port "));
