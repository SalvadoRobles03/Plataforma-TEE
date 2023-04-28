import "./sections/css/cielo.css"
import "./sections/css/Plantilla.css"
import toggleSidebar  from "./sections/toggleSidebar.js";
import "./sections/css/muronotif.css"
import { Link } from "react-router-dom";
import Table from "./TABLA.js"

export function MuroNotif() {
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
                    <Link to= "/Entraste">
                        <li><a href="/Entraste">Tablero</a></li>
                    </Link>
                    <li style={{backgroundColor: "#743484"}}><a href="/MuroNotif">Notificaciones</a></li>
                    
                    <Link to = "/Expediente">
                        <li><a>Expediente Electrónico</a></li>
                    </Link>
                    </ul>
                </div>

                
              <Table/>
            </body>
    </div>
  )
}

export default MuroNotif;

