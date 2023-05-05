import toggleSidebar  from "../sections/toggleSidebar.js";
import { Link } from "react-router-dom";
import "../sections/css/detalles.css"

export  function Detalles() {
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
                <button className="two" style={{backgroundColor:"#743484"}}>2. Adjuntar Pruebas</button>
            </Link>
            <Link to = "/Cargarrec">
                <button className="three">3. Comentarios</button>
            </Link>
            <Link to = "/Firma">
                <button className="four">4. Firma</button>
            </Link>

        </div>
        <div className="Footer">
            <Link to = "/Impugnarc">
                <a><button>Anterior</button></a> 
            </Link>
            <Link to = "/Cargarrec">
                <a><button>Siguiente</button></a> 
            </Link>
            
        </div>

        <div className="adjuntar-archivos" id="drop-area">
        <div className="titulo1"><h3>Adjuntar Pruebas</h3></div>
            <div >
                <p>Arrastre aquí sus archivos</p>
                <input type="file" id="file-input" accept=".pdf,.doc,.docx" multiple/>      
            </div>
        </div>

    </div>
  )
}

export default Detalles