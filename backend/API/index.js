const cors = require('cors');
const {google, admin_reports_v1} = require('googleapis');
const axios = require('axios');
const readline = require('readline');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
var express = require('express');
var app = express();
app.use(cors());
app.use(express.json());

const fs = require('fs');
const { JWT } = require('google-auth-library');

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

app.get('/api/Magistrado/:correo', function (req, res) {
   
    // connect to your database
    sql.connect(config, function (err) {
    
        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();
           
        // query to the database and get the records
        sentencia = "select * from magistrado where correo = '" + req.params.correo + "'"; 
        console.log(sentencia);
        request.query(sentencia, function (err, recordset) {
            
            if (err) console.log(err)

            // send records as a response
            res.send(recordset.recordset[0]);
            
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
            res.send(recordset.recordset[0]);
            
        });
    });
    
});

app.get('/api/NombreMagis/:correo', function (req, res) {
   
    // connect to your database
    sql.connect(config, function (err) {
    
        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();
           
        // query to the database and get the records
        sentencia = "select nombres from magistrado where correo = '" + req.params.correo + "'"; 
        console.log(sentencia);
        request.query(sentencia, function (err, recordset) {
            
            if (err) console.log(err)

            // send records as a response
            res.send(recordset.recordset[0]);
            
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
            res.send(recordset.recordset[0]);
            
        });
    });
    
});

app.get('/api/ApellidoMagis/:correo', function (req, res) {
   
    // connect to your database
    sql.connect(config, function (err) {
    
        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();
           
        // query to the database and get the records
        sentencia = "select apellidos from magistrado where correo = '" + req.params.correo + "'"; 
        console.log(sentencia);
        request.query(sentencia, function (err, recordset) {
            
            if (err) console.log(err)

            // send records as a response
            res.send(recordset.recordset[0]);
            
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
            res.send(recordset.recordset[0]);
            
        });
    });

});

app.post('/api/Insert', (req, res) => {
  sql.connect(config, (err) => {
    if (err) {
      console.log(err);
      res.status(500).send('No se puede conectar a la base de datos.');
    } else {
      const request = new sql.Request();
      const { nombres, apellidoPaterno, apellidoMaterno, rfc, correo, contrasena } = req.body;

      // Check if email already exists
      const checkEmailQuery = `SELECT correo FROM Usuario WHERE correo = '${correo}'`;
      request.query(checkEmailQuery, (err, result) => {
        if (err) {
          console.log(err);
          res.status(500).send('Error al verificar si el correo ya existe en la base de datos.');
        } else {
          if (result.recordset.length > 0) {
            // Email already exists in database
            res.status(409).send('El correo ya existe en la base de datos.');
          } else {
            // Email does not exist in database, insert new record
            const insertQuery = `INSERT INTO Usuario (nombres,apellidoPaterno,apellidoMaterno,rfc,correo,contrasena,TipoUsuario) 
              VALUES ('${nombres}','${apellidoPaterno}','${apellidoMaterno}','${rfc}','${correo}','${contrasena}','Externo')`;

            request.query(insertQuery, (err, result) => {
              if (err) {
                console.log(err);
                res.status(500).send('No se pudo crear el registro.');
              } else {
                res.status(201).send('Registro creado.');
              }
            });
          }
        }
      });
    }
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

app.get('/api/userFolio/:Folio', function (req, res) {

    sql.connect(config, function (err) {
    
        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();
           
        // query to the database and get the records 
        sentencia = "select Usuario from Expedientes where Folio_Expediente = '" + req.params.Folio + "'"; 
        console.log(sentencia);
        request.query(sentencia, function (err, recordset) {
            
            if (err) console.log(err)

            // send records as a response
            res.send(recordset.recordset[0]);
            
        });
    });

});

app.get('/api/UserID/:correo', function (req, res) {

  sql.connect(config, function (err) {
  
      if (err) console.log(err);

      // create Request object
      var request = new sql.Request();
         
      // query to the database and get the records 
      sentencia = "select id_usuario from Usuario where correo = '" + req.params.correo + "'"; 
      console.log(sentencia);
      request.query(sentencia, function (err, recordset) {
          
          if (err) console.log(err)

          // send records as a response
          res.send(recordset.recordset[0]);
          
      });
  });

});

app.post('/api/InsertDoc', (req, res) => {
  sql.connect(config, (err) => {
    if (err) {
      console.log(err);
      res.status(500).send('No se puede conectar a la base de datos.');
    } else {
      const request = new sql.Request();
      const { Document_Link } = req.body;

      const insertQuery = `INSERT INTO Documentos (Document_Link, Tipo) VALUES ('${Document_Link}','demanda')`;
      console.log(insertQuery);
            request.query(insertQuery, (err, result) => {
              if (err) {
                console.log(err);
                res.status(500).send('No se pudo cargar el documento');
              } else {
                res.status(201).send('Documento enviado');
              }
            });
          }
        });
  });

  app.post('/api/createExpediente', (req, res) => {
    sql.connect(config, (err) => {
      if (err) {
        console.log(err);
        res.status(500).send('No se puede conectar a la base de datos.');
      } else {
        const request = new sql.Request();
        const { Nombre,Usuario } = req.body;
        console.log(Usuario);
        const insertQuery = `INSERT INTO Expedientes (Nombre,Usuario) VALUES ('${Nombre}',${Usuario})`;
        console.log(insertQuery);
              request.query(insertQuery, (err, result) => {
                if (err) {
                  console.log(err);
                  res.status(500).send('No se pudo cargar el documento');
                } else {
                  res.status(201).send('Documento enviado');
                }
              });
            }
          });
    });
   

    app.post('/api/uploadPrueba', (req, res) => {
      sql.connect(config, (err) => {
        if (err) {
          console.log(err);
          res.status(500).send('No se puede conectar a la base de datos.');
        } else {
          const request = new sql.Request();
          const { Document_Link } = req.body;
    
          const insertQuery = `INSERT INTO Documentos (Document_Link, Tipo) VALUES ('${Document_Link}','prueba')`;
          console.log(insertQuery);
                request.query(insertQuery, (err, result) => {
                  if (err) {
                    console.log(err);
                    res.status(500).send('No se pudo cargar el documento');
                  } else {
                    res.status(201).send('Documento enviado');
                  }
                });
              }
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
