import "./sections/css/cielo.css"
import "./sections/css/Plantilla.css"
import toggleSidebar  from "./sections/toggleSidebar.js";
import "./sections/css/muronotif.css"
import { Link } from "react-router-dom";

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
                    <Link to= "/Entraste">
                        <li><a href="#">Tablero</a></li>
                    </Link>
                    <li style={{backgroundColor: "#743484"}}><a href="../Muro_notif/Muro_Nof.html">Notificaciones</a></li>
                    <Link to = "/Impugnarc">
                        <li><a>Impugnar/Comparecer</a></li>
                    </Link>
                    <Link to = "/Expediente">
                        <li><a>Expediente Electrónico</a></li>
                    </Link>
                    </ul>
                </div>

                <div class="tabla">
                    <h1>Muro de Notificaciones</h1>
                    <table>
                        <thead>
                            <tr>
                                <th>Notificaciones</th>
                                <th>Fecha</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                            <Link to = "/Notif">
                                <td>Nuevo mensaje</td>
                            </Link>
                            <td>10/04/2023</td>
                            </tr>
                            <tr>
                            <Link to = "/Notif">
                                <td>Mensaje número dos</td>
                            </Link>
                            <td>11/04/2023</td>
                            </tr>
                            <tr>
                            <Link to = "/Notif">
                                <td>Último mensaje recibido</td>
                            </Link>
                            <td>12/04/2023</td>
                            </tr>
                            </tbody>
                    </table>
                </div>
            </body>
    </div>
  )
}

export default MuroNotif;

/* para notif: 
 <div className="document_box">
                    <h1>Notificación</h1>
                    <h3 style={{fontSize:"22px;"}}><i>Mensaje</i></h3>
                    <div style={{backgroundColor: "lightgray", height: "400px", padding: "5px 10px", margin: "0", width: "100%"}}>
                    </div>
    </div>

*/