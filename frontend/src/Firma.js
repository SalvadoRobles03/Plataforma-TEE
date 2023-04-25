import React from 'react'
import { Link } from 'react-router-dom'
import toggleSidebar  from "./sections/toggleSidebar.js";
import "./sections/css/firma.css"

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
                <a><img className="LOGO"src= {require("./sections/TEE.png" )}alt="Logo" width="150px"/></a>
            </Link>
            <div className="LOGIN">
                <img src= {require("./sections/Login.webp" )} alt="Foto Perfil" width="50 px"/>
                <h3>Usuario</h3>
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
                    <li><a href="../Muro_notif/Muro_Nof.html">Notificaciones</a></li>
                </Link>
                <li style={{backgroundColor: "#743484"}}><a>Impugnar/Comparecer</a></li>
                <Link to= "/Expediente">
                    <li><a>Expediente Electrónico</a></li>
                </Link>
            </ul>
        </div>

        <div className="MENU2">
            <Link to = "/Impugnarc">
                <button className="two">1. Acreditar Personería</button>
            </Link>
            <Link to = "/Detalles">
                <button className="three">2. Detalles</button> {/*que quede morado el boton con className*/}
            </Link>
            <Link to = "/Cargarrec">
                <button className="four">3. Cargar Recursos</button>
            </Link>
            <button className="one">4. Firmar Recurso</button>
        </div>

        <div class="Footer">
            <Link to = "/Cargarrec">
                <a><button>Anterior</button></a> 
            </Link>
            <button>Cancelar</button>
        </div>
    
        <div class="preview-container">
            <iframe id="preview" src="" frameborder="0"></iframe>
            <button class="preview-button">FIRMAR</button>
        </div>


    </div>
  )
}

export default Firma
