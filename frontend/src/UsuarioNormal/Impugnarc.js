import "../sections/css/Plantilla.css"
import toggleSidebar  from "../sections/toggleSidebar";
import "../sections/css/impugnar.css"
import { Link } from "react-router-dom";

export function Impugnarc() {
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
                <a><button>Siguiente</button></a> 
            </Link>
            
        </div>

       
        <div className="adjuntar-archivos" id="drop-area">
        <div className="titulo1"><h3>Adjuntar Demanda</h3></div>
            <div >
                <p>Arrastre aquí sus archivos</p>
                <input type="file" id="file-input" accept=".pdf,.doc,.docx" multiple/>      
            </div>
        </div>

    </div>
  )
}

export default Impugnarc

