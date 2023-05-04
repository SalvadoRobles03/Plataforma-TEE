import "../sections/css/cielo.css"
import "../sections/css/Plantilla.css"
import toggleSidebar  from "../sections/toggleSidebar.js";
import { Link } from "react-router-dom";
import ENVIAR_NOTI from "./EnviarNotiWinget";


export function MuroNotif() {
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

                
                <ENVIAR_NOTI/>
                
                
              
            </body>
    </div>
  )
}

export default MuroNotif;

