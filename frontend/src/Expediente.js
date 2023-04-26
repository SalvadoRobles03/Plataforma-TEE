import React from 'react'
import { Link } from "react-router-dom";
import toggleSidebar  from "./sections/toggleSidebar.js";
import "./sections/css/expediente.css"

export function Expediente() {
  return (
    <div>
      <head>
            <meta charset="UTF-8"/>
            <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>Impugnar/Comparecer</title>
            <link rel="icon" type="image/png" href="./LOGO.png"/>
            <link rel="stylesheet" href="./sections/css/impugnar.css"/>
            <link rel="stylesheet" href="./sections/css/Plantilla.css"/>
            <script src="5.js"></script> 
        </head>
        <header style={{backgroundColor: "#743484"}}>
          <Link to = "/Entraste">
            <a><img className="LOGO"src= {require("./sections/TEE.png" )}alt="Logo" width="150px"/></a>
          </Link>
            <div className="LOGIN">
                <img src= {require("./sections/Login.webp" )} alt="Foto Perfil" width="50 px"/>
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
                    <li><a href="../Muro_notif/Muro_Nof.html">Notificaciones</a></li>
                </Link>
                
                <li style={{backgroundColor: "#743484"}}><a>Expediente Electrónico</a></li>
            </ul>
        </div>
        <div class="search_box5">
          <h2><i>Expediente</i></h2>
          <p><label style={{display:"inline-block"}}>Búsqueda por expediente<input type="radio" checked="checked" name="radio"/>
            <span class="checkmark"></span></label><label style={{display:"inline-block"}}>Búsqueda por folio <input type="radio" checked="checked" name="radio"/>
            <span class="checkmark"></span></label>
          </p>
          <p><input type="text" placeholder="Folio:" style={{color: "#70170", width: "100px"}}/><input type="text" placeholder="Sala:" style={{color: "black", width: "100px"}}/><input type="text" placeholder="Tipo de Medio:" style={{color: "black", width: "110px"}}/><input type="text" placeholder="Consecutivo:" style={{color: "black", width: "100px"}}/><input type="text" placeholder="Año:" style={{color: "black", width: "100px"}}/>
              <button style={{height:"30px", width: "100px", backgroundColor: "rgb(255, 196, 0)", color:"black", marginLeft:"779px", cursor: "pointer"}}> <b>BUSCAR</b></button>
          </p>
        </div>

        <div class="document_box5">
          <h3 style={{fontSize:"22px"}}><i>Documentos</i></h3>
          <div style={{backgroundColor:"lightgray", height: "200px",padding: "5px 10px", margin: "0", width: "110%"}}>
              <div style={{height: "200px", width:"450px", border:" 1px solid #4e4e4e", font:"16px Arial, Serif", overflow:"auto", backgroundColor: "white"}}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan metus vitae purus tempor, vel sollicitudin nulla aliquam. Morbi tincidunt tellus nec nibh faucibus porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan metus vitae purus tempor, vel sollicitudin nulla aliquam. Morbi tincidunt tellus nec nibh faucibus porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan metus vitae purus tempor, vel sollicitudin nulla aliquam. Morbi tincidunt tellus nec nibh faucibus porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan metus vitae purus tempor, vel sollicitudin nulla aliquam. Morbi tincidunt tellus nec nibh faucibus porttitor.
              </div>
          </div>
        </div>
        
    </div>
  )
}

export default Expediente
