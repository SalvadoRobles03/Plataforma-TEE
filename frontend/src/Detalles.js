import toggleSidebar  from "./sections/toggleSidebar.js";
import { Link } from "react-router-dom";
import "./sections/css/detalles.css"

export  function Detalles() {
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
                <li><a href="#">Tablero</a></li>
                <Link to = "/MuroNotif">
                    <li><a href="../Muro_notif/Muro_Nof.html">Notificaciones</a></li>
                </Link>
                <li style={{backgroundColor: "#743484"}}><a>Impugnar/Comparecer</a></li>
                <li><a href="../Garzita/9.html">Expediente Electrónico</a></li>
            </ul>
        </div>

        <div className="MENU2">
            <Link to = "/Impugnarc">
            <button className="two">1. Acreditar Personería</button>
            </Link>
            <Link to = "/Detalles">
                <button className="one">2. Detalles</button> {/*que quede morado el boton con className*/}
            </Link>
            <Link to = "/Cargarrec">
                <button className="three">3. Cargar Recursos</button>
            </Link>
            <Link to = "/Firma">
                <button className="four">4. Firmar Recurso</button>
            </Link>
        </div>
        <div className="Footer">
            <Link to = "/Impugnarc">
                <a><button>Anterior</button></a> 
            </Link>
            <Link to = "/Cargarrec">
                <a><button>Siguiente</button></a> 
            </Link>
            <button>Cancelar</button>
        </div>

        <div className="document_box3">
            <h3 style={{size:"22px"}}><i>Acto reclamado</i></h3>
            <div style={{backgroundColor: "lightgray", height:" 300px", padding: "5px 10px", margin: "0", width: "80%"}}></div> {/*aqui acomodamos el gris*/}
        </div>

    </div>
  )
}

export default Detalles