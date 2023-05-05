import React, { useState } from 'react';
import "../sections/css/cielo.css"
import "../sections/css/Plantilla.css"
import "../sections/css/mandarNotif.css"
import toggleSidebar  from "../sections/toggleSidebar.js";
import { Link } from "react-router-dom";
import { insertarNotificacion } from '../api.js';
import { GetUsuario} from '../api.js';
import emailjs from 'emailjs-com';



export function MuroNotif() {
    const [selectedFolio, setSelectedFolio] = useState("");
    const [Asunto, SetAsunto]=useState('');
    const [Texto, SetTexto]=useState('');
    const [timeClicked, setTimeClicked] = useState(null);

    const sendEmail = (correo) => {
        emailjs
          .send(
            "service_z2prh2b",
            "template_9v2ymvq",
            {
              from_name: "TEE",
              to_name: sessionStorage.getItem("usuario"),
              message:
                "Tienes una nueva notificación en la plataforma TEE, Inicia sesión para verla.",
              to: correo,
            },
            "CTncan4uJLqgrNK0Q"
          )
          .then(
            function (response) {
              console.log("SUCCESS!", response.status, response.text);
            },
            function (error) {
              console.log("FAILED...", error);
            }
          );
      };
      
   
  
    const handleEnviarNotificacion= async (event) => {
        event.preventDefault();
        
        
        let fechaActual = new Date();
        fechaActual.setHours(fechaActual.getHours() - 6);
        fechaActual= fechaActual.toISOString();
        setTimeClicked(fechaActual);
        const valores = await GetUsuario(selectedFolio)
        console.log(valores.usuario)
        console.log(valores.correo)
        const response = await insertarNotificacion(timeClicked,Asunto,Texto,valores.usuario);
        console.log(Asunto);
        console.log(Texto)
        if (response.status == 200) {  
          if (response.data == "")
            alert("Error")
          else 
            alert("Notificación enviada con éxito")
            sendEmail(valores.correo);
      } else {
        alert("Error: " + response.status);
      }
     
      };
  return (
    <div>
         
        <body>
                <header style={{backgroundColor: "#743484"}}>
                    <Link to = "/EntrasteTEE">
                        <a><img className="LOGO"src= {require("../sections/TEEAdmin.png" )}alt="Logo" width="150px"/></a>
                    </Link>
                    <div className="LOGIN">
                        <img src= {require("../sections/Login.webp" )} alt="Foto Perfil" width="50 px"/>
                        <h3>{sessionStorage.getItem('usuario')}</h3> 
                    </div>
                </header>
                <div className = "sidebar">
                    <ul>
                        <button onClick={toggleSidebar} className="hamburguesa">
                            <span className="linea"></span>
                            <span className="linea"></span>
                            <span className="linea"></span>
                    </button>
                    <Link to= "/EntrasteTEE">
                        <li><a>Tablero</a></li>
                    </Link>
                    <li style={{backgroundColor: "#743484"}}><a href="/MandarNotif">Mandar Notificación</a></li>
                    
                    <Link to = "/Expediente">
                        <li><a>Expediente Electrónico</a></li>
                    </Link>
                    </ul>
                </div>

                <div className='widget'>
                <h3 className="titulo">Enviar notificación</h3>
                <input id="destinatario-input" type="text" placeholder="Folio del destinatario" maxLength={50} value={selectedFolio} onChange={e => setSelectedFolio(e.target.value)} />
                <input id="asunto-input" type="text" placeholder="Asunto" maxLength={50} value={Asunto} onChange={e => SetAsunto(e.target.value)} />
                <textarea rows="auto" cols="auto" placeholder='Texto..' maxLength={5000} value={Texto} onChange={e => SetTexto(e.target.value)}></textarea>
                <button onClick={handleEnviarNotificacion}><b>Enviar Notificación</b></button>
                </div>
              
            </body>
    </div>
  )
}

export default MuroNotif;

