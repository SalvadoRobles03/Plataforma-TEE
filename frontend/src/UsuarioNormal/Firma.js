import React from 'react'
import { Link } from 'react-router-dom'
import toggleSidebar  from "../sections/toggleSidebar.js";
import "../sections/css/firma.css"

export  function Firma() {
  return (
    <div>
        <head>
            <meta charset="UTF-8"/>
            <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>Impugnar/Comparecer</title>
            <link rel="icon" type="image/png" href="./LOGO.png"/>
            <link rel="stylesheet" href="./sections/css/detalles.css"/>
            <link rel="stylesheet" href="./sections/css/detalles.css"/>
            <script src="5.js"></script> 
        </head>
        <header style={{backgroundColor: "#743484"}}>
            <Link to = "/Entraste">
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
            <Link to= "/Impugnarc">
                <button className="one" style={{backgroundColor:"#c1a7c7"}}>1. Adjuntar Demanda</button>

            </Link>
            <Link to = "/Detalles">
                <button className="two" style={{backgroundColor:"#c1a7c7"}}>2. Adjuntar Pruebas</button>
            </Link>
            <Link to = "/Cargarrec">
                <button className="three" style={{backgroundColor:"#c1a7c7"}}>3. Comentarios</button>
            </Link>
            <Link to = "/Firma">
                <button className="four" style={{backgroundColor:"#743484"}}>4. Firma</button>
            </Link>

        </div>

        <div class="Footer">
            <Link to = "/Cargarrec">
                <a><button>Anterior</button></a> 
            </Link>
            
        </div>
    
        <div class="preview-container">
            <iframe id="preview" src="" frameborder="0"></iframe>
            <button class="preview-button">FIRMAR</button>
        </div>


    </div>
  )
}

export default Firma
