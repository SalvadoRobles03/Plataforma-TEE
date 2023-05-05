import { Link } from "react-router-dom";
import "../sections/css/cielo.css";
import "../sections/css/Plantilla.css"
import toggleSidebar  from "../sections/toggleSidebar.js";




export function Entraste() {
    
    return (
    <div>
            <head>
                <meta charSet="UTF-8"/>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Tablero</title>
                <link rel="icon" type="image/png" href="./sections/LOGO.png"/>
                <link rel="stylesheet" href="./sections/css/cielo.css"/>
                <link rel="stylesheet" href="./sections/css/Plantilla.css"/>
                <script src = "./sections/jsFunctions/toggleSidebar.js"></script>
                
            </head>
        <body>
                <header style={{backgroundColor: "#743484"}}>
                    <a href=""><img className="LOGO"src= {require("../sections/TEE.png" )}alt="Logo" width="150px"/></a>
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
                    <li style={{backgroundColor: "#743484"}}><a>Tablero</a></li>
                </Link>
                <Link to = "/MuroNotif">
                    <li><a>Notificaciones</a></li>
                </Link>
                <Link to = "/Impugnarc">
                    <li><a>Subir Archivos</a></li>
                </Link>
                </ul>
                </div>

                <div className="Presentacion">
                    <h1>BIENVENIDO</h1>
                    <h2>Bienvenido a la plataforma de del Tribunal Estatal Electoral</h2>
                    <img src={require("../sections/TEE.png" )} alt="logo" width="40%"/>
                </div>

                
        </body>
    </div>
);
}

export default Entraste;

