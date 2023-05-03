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
            res.send(recordset.recordset);
            
        });
    });
    
});

app.get('/api/Nombre/:correo', function (req, res) {
   
    // connect to your database
    sql.connect(config, function (err) {
    
        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();
           
        // query to the database and get the records
        sentencia = "select nombres from Usuario where correo = '" + req.params.correo + "'"; 
        console.log(sentencia);
        request.query(sentencia, function (err, recordset) {
            
            if (err) console.log(err)

            // send records as a response
            res.send(recordset.recordset);
            
        });
    });
    
});

app.get('/api/Apellido/:correo', function (req, res) {
   
    // connect to your database
    sql.connect(config, function (err) {
    
        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();
           
        // query to the database and get the records
        sentencia = "select apellidoPaterno from Usuario where correo = '" + req.params.correo + "'"; 
        console.log(sentencia);
        request.query(sentencia, function (err, recordset) {
            
            if (err) console.log(err)

            // send records as a response
            res.send(recordset.recordset);
            
        });
    });
    
});


app.get('/api/NOTIF', function (req, res) {

    // connect to your database
    sql.connect(config, function (err) {

        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();

        // query to the database and get the records
        request.query('select * from Notificacion', function (err, recordset) {

            if (err) console.log(err)

            // send records as a response
            res.send(recordset.recordset);

        });
    });

});

app.get('/api/NOTIF/:ID', function (req, res) {

    sql.connect(config, function (err) {
    
        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();
           
        // query to the database and get the records
        sentencia = "select * from Notificacion where id_notificacion = '" + req.params.ID + "'"; 
        console.log(sentencia);
        request.query(sentencia, function (err, recordset) {
            
            if (err) console.log(err)

            // send records as a response
            res.send(recordset.recordset);
            
        });
    });

});


app.get('/api/DOC/:Folio', function (req, res) {

    sql.connect(config, function (err) {
    
        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();
           
        // query to the database and get the records
        sentencia = "select Document_link from Documentos where Folio_Documento = '" + req.params.Folio + "'"; 
        console.log(sentencia);
        request.query(sentencia, function (err, recordset) {
            
            if (err) console.log(err)

            // send records as a response
            res.send(recordset.recordset[0]);
            
        });
    });

});

app.get('/api/Expediente/:Folio', function (req, res) {

    sql.connect(config, function (err) {
    
        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();
           
        // query to the database and get the records
        sentencia = "SELECT t1.* FROM Expediente_Documento t1 INNER JOIN Expedientes t2 ON t1.id_Expediente = t2.id_Expediente WHERE t2.Folio_Expediente = '" + req.params.Folio + "'"; 
        console.log(sentencia);
        request.query(sentencia, function (err, recordset) {
            
            if (err) console.log(err)

            // send records as a response
            res.send(recordset.recordset);
            
        });
    });

});


app.listen(2023, () => console.log("Listening on port "));
