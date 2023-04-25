import { Link } from "react-router-dom";
import "./sections/css/cielo.css"
import "./sections/css/Plantilla.css"
import toggleSidebar  from "./sections/toggleSidebar.js";
import MuroNotif from "./MuroNotif";

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
                    <a href=""><img className="LOGO"src= {require("./sections/TEE.png" )}alt="Logo" width="150px"/></a>
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
                    <li style={{backgroundColor: "#743484"}}><a href="#">Tablero</a></li>
                    <Link to = "/MuroNotif">
                        <li><a>Notificaciones</a></li>
                    </Link>
                    <Link to = "/Impugnarc">
                        <li><a>Impugnar/Comparecer</a></li>
                    </Link>
                    <Link to = "/Expediente">
                        <li><a>Expediente Electrónico</a></li>
                    </Link>
                </ul>
                </div>

                <div className="notificaciones por leer">
                    <div>   
                        <img src= {require("./sections/Notificaciones.jpg")}/>
                        <h1 className="Notif" >Notificaciones por Leer</h1>
                    </div>  
                </div>

                <div className="notificaciones leidas">
                    <div>
                        <img src= {require("./sections/notificaciones_abierta.jpg" )}/>
                        <h1  className= "Notif"  >Notificaciones Abiertas</h1>
                    </div>
                </div>

                <div className="Juicios">
                    <h1 style={{color:"#14213D", position: "absolute", top: "270px"}}>Juicios en Instrucción y Resueltos</h1>
                    <div style={{backgroundColor: "#743484", width: "1000px", height: "65px", position: "absolute", top: "340px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <h1 className="solotexto" >Expediente</h1>
                        <h1 className="solotexto" >Expediente asignado</h1>
                        <h1 className="solotexto" >Hechos</h1>
                        <h1 className="solotexto" >Acciones</h1>
                    </div>
                    <div className="Raya" style={{marginTop:'450px'}} ></div>
                    <div className="Raya" style={{marginTop:'40px'}}></div>
                    <div className="Raya" style={{marginTop:'40px'}}></div>
                    <div className="Raya" style={{marginTop:'40px'}}></div>
                </div>
        </body>
    </div>
);
}

export default Entraste;

/*const Entraste = () =>{
    return <h1>Pasaste :)</h1>;
}

export default Entraste;*/

//mg src={require('./TEE.png')}  style={{ width: '400px'}}