import "../sections/css/Plantilla.css"
import toggleSidebar  from "../sections/toggleSidebar";
import "../sections/css/impugnar.css"
import { Link } from "react-router-dom";

export function Impugnarc() {
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
                <li style={{backgroundColor: "#743484"}}><a>Impugnar/Comparecer</a></li>
                <Link to = "/Expediente">
                    <li><a>Expediente Electrónico</a></li>
                </Link>
            </ul>
        </div>

        <div className="MENU2">
            <button className="one">1. Acreditar Personería</button>
            <Link to = "/Detalles">
                <button className="two">2. Detalles</button>
            </Link>
            <Link to = "/Cargarrec">
                <button className="three">3. Cargar Recursos</button>
            </Link>
            <Link to = "/Firma">
                <button className="four">4. Firmar Recurso</button>
            </Link>
        </div>

        <div className="Footer">
            <Link to = "/Detalles">
                <a><button>Siguiente</button></a> 
            </Link>
            <button>Cancelar</button>
        </div>

        <div className="OPCIONES">
            <div className="opciones1">
                <div className="Titulo">
                    <h3 className="CENTRO">¿Comó desea adjuntar el recurso?</h3>
                </div>
                <ul>
                    <li>
                        
                        <label for="cargar">
                            <input type="radio" id="cargar" name="documento" value="CARGAR"/>
                            Cargar Documento
                        </label>
                    </li>
                    <li>
                        <label for="generar">
                            <input type="radio" id="generar" name="documento" value="GENERAR"/>
                            Generar Documento
                        </label>   
                    </li>
                </ul>
            </div>
            <div className="opciones1">
                <div className="Titulo">
                    <h3>Calidad de la Persona que Comparezca</h3>
                </div>
                <ul>
                    <li>
                        <label for="impugar">
                            <input type="radio" id="impugar" name="calidad" value="IMPUGAR"/>
                            ¿Desea Impugar?</label>
                    </li>
                    <li>
                        <label for="terceria" > 
                        <input type="radio" id="terceria" name="calidad" value="TERCERIA"/> ¿Compareces como Tercería?</label>
                    </li>
                </ul>
            </div>
        </div>
        <div className="adjuntar-archivos" id="drop-area">
        <div className="titulo1"><h3>Adjuntar Recurso</h3></div>
            <div >
                <p>Arrastre aquí sus archivos</p>
                <input type="file" id="file-input" accept=".pdf,.doc,.docx" multiple/>      
            </div>
        </div>

    </div>
  )
}

export default Impugnarc

