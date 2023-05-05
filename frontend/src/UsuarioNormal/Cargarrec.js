import toggleSidebar  from "../sections/toggleSidebar.js";
import { Link } from "react-router-dom";
import "../sections/css/cargar.css"
import { useState } from "react";


export function Cargarrec() {

    const [Texto,SetTexto]=useState("");

  return (
    <div>

        
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
            <Link to = "/Impugnarc">
                <button className="one" style={{backgroundColor:"#c1a7c7"}}>1. Adjuntar Demanda</button>
            </Link>            
            <Link to = "/Detalles">
                <button className="two" style={{backgroundColor:"#c1a7c7"}}>2. Adjuntar Pruebas</button>
            </Link>
            <Link to = "/Cargarrec">
                <button className="three" style={{backgroundColor:"#743484"}}>3. Comentarios</button>
            </Link>
            <Link to = "/Firma">
                <button className="four">4. Firma</button>
            </Link>

        </div>

        <div class="Footer">
            <Link to = "/Detalles">
                <a><button>Anterior</button></a> 
            </Link>
            <Link to = "/Firma">
                <a><button>Siguiente</button></a> 
            </Link>
            
        </div>
            <div className="Comentarios">
                <textarea rows="auto" cols="auto" placeholder='Comentario..' maxLength={5000} value={Texto} onChange={e => SetTexto(e.target.value)}></textarea>
                <input type="submit"/>
            </div>
        
    </div>
  )
}

export default Cargarrec