import toggleSidebar  from "./sections/toggleSidebar.js";
import { Link } from "react-router-dom";
import "./sections/css/cargar.css"


export function Cargarrec() {
  return (
    <div>

        <head>
            <meta charset="UTF-8"/>
            <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>Impugnar/Comparecer</title>
            <link rel="icon" type="image/png" href="./LOGO.png"/>
            <link rel="stylesheet" href="./sections/css/detalles.css"/>
            <link rel="stylesheet" href="./sections/css/detalles.css"/>
            <script src="5.js"></script> 
        </head>
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
                <Link to = "/Entraste">
                    <li><a>Tablero</a></li>
                </Link>
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
                <button className="three">2. Detalles</button> {/*que quede morado el boton con className*/}
            </Link>
            <button className="one">3. Cargar Recursos</button>
            <Link to = "/Firma">
                <button className="four">4. Firmar Recurso</button>
            </Link>
        </div>

        <div class="Footer">
            <Link to = "/Detalles">
                <a><button>Anterior</button></a> 
            </Link>
            <Link to = "/Firma">
                <a><button>Siguiente</button></a> 
            </Link>
            <button>Cancelar</button>
        </div>

        <div className="document_box2">
            <h3><i>Adjuntar Pruebas</i></h3>
            <p>
                <label>Si<input type="radio" checked="checked" name="radio"/>
                <span className="checkmark"></span></label>
                <label>No<input type="radio" checked="checked" name="radio"/>
                <span className="checkmark"></span></label>
            </p>

            <form className="formpdf" id="uploadForm" enctype="multipart/form-data">
                    <label for="pdfFile">Seleccionar archivo PDF:</label>
                    <input type="file" id="pdfFile" name="pdfFile" accept=".pdf"/>
                    <input style = {{backgroundColor:"#743484", color: "black", width: "auto", height: "23px", paddingTop: "5px",  border: "4px black"}} type="submit" value="Subir archivo"/>
            </form>  
        </div>
    </div>
  )
}

export default Cargarrec