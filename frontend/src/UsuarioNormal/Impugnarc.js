import "../sections/css/Plantilla.css"
import toggleSidebar  from "../sections/toggleSidebar";
import "../sections/css/impugnar.css"
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import { GetUserId } from "../api";
import { createExpediente } from "../api";
import { InsertDoc } from "../api";

function Impugnarc() {
    const [link, setLink] = useState("");
    const [name, setName] = useState("");

    
    const handleSubmit = async (event) => {
        event.preventDefault();
        const mail=sessionStorage.getItem('correo')
        console.log(mail)
        const userId=await GetUserId(mail);
        console.log(userId);
        const response=await createExpediente(name,userId)
        const response2=await InsertDoc(link)
        if (response.status == 201 && response2.status == 201) {  
            if (response.data == "" && response2.data == "")
              alert("Error")
            else 
              alert("Documento enviado con exito")
        } else {
          alert("Error: " + response.status);
        }
       
   
  };
  return (
    <div>
        
        <header style={{backgroundColor: "#743484"}}>
            <Link to="/Entraste">
                <a><img className="LOGO"src= {require("../sections/TEE.png" )}alt="Logo" width="150px"/></a>
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
                <Link to = "/Entraste">
                    <li><a>Tablero</a></li>
                </Link>
                <Link to = "/MuroNotif">
                    <li><a>Notificaciones</a></li>
                </Link>
                <Link to = "/Impugnarc">
                    <li style={{backgroundColor: "#743484"}}><a>Subir Archivos</a></li>
                </Link>
            </ul>
        </div>

        <div className="MENU2">
            <button className="one">1. Adjuntar Demanda</button>
            <Link to = "/Detalles">
                <button className="two">2. Adjuntar Pruebas</button>
            </Link>
            <Link to = "/Cargarrec">
                <button className="three">3. Comentarios</button>
            </Link>
            <Link to = "/Firma">
                <button className="four">4. Firma</button>
            </Link>
        </div>

        <div className="Footer">
            <Link to = "/Detalles">
                <a><button onClick={handleSubmit}>Siguiente</button></a> 
            </Link>
            
        </div>

       
        <div className="adjuntar-archivos" id="drop-area">
        <div className="titulo1"><h3>Adjuntar Demanda</h3></div>
            <div className="separar">
                <input type="text" id="file-link" placeholder="Nombre del caso"  value={name}  onChange={e => setName(e.target.value)}/> 
                <input type="text" id="file-link" placeholder="Ingrese el link de google drive al pdf de su demanda" value={link}  onChange={e => setLink(e.target.value)} />      
            </div>
        </div>

    </div>
  )
}

export default Impugnarc


