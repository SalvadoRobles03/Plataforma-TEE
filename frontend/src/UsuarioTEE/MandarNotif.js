import React, { useState } from 'react';
import "../sections/css/cielo.css"
import "../sections/css/Plantilla.css"
import "../sections/css/mandarNotif.css"
import toggleSidebar  from "../sections/toggleSidebar.js";
import { Link } from "react-router-dom";
import { insertarNotificacion } from '../api.js';
import { GetUsuario} from '../api.js';



export function MuroNotif() {
    const [selectedFolio, setSelectedFolio] = useState("");
    const [Asunto, SetAsunto]=useState('');
    const [Texto, SetTexto]=useState('');
    const [timeClicked, setTimeClicked] = useState(null);
   
  
    const handleEnviarNotificacion= async (event) => {
        event.preventDefault();
        
        let fechaActual = new Date();
        fechaActual.setHours(fechaActual.getHours() - 6);
        fechaActual= fechaActual.toISOString();
        setTimeClicked(fechaActual);
        const Receptor= await GetUsuario(selectedFolio)
        console.log(Receptor)
        const response = await insertarNotificacion(timeClicked,Asunto,Texto,Receptor);
        console.log(Asunto);
        console.log(Texto)
        if (response.status == 200) {  
          if (response.data == "")
            alert("Error")
          else 
            alert("Notificación enviada con éxito")
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

