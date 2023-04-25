import {Outlet, Link} from "react-router-dom"
import { useNavigate, Navigate } from "react-router-dom";
import "./sections/css/main.css"

export function Main() {
  return (
    <div>
        <head>
            <meta charset="UTF-8"/>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <link rel="icon" type="image/png" href="./sections/LOGO.png"/>
            <title>Página de inicio</title>
            <link rel="stylesheet" href="main.css"/>
        </head>
        <body>
            <div className="container">
                <nav style={{backgroundColor: "#192948"}}>    
                    <ul>
                        <li>INICIO</li>
                        <li>CONTACTANOS</li>
                    </ul>
                </nav>
                    <div className="bajar">
                        <h2>Para comenzar a utilizar la plataforma<br/> iniciar sesión o registrarse</h2>
                        <Link to = "/Login">
                            <a><button className="botonCool" type="button">
                                Iniciar Sesion
                                <img src={require("./bxs-right-arrow-alt.svg")}alt=""/>
                            </button> 
                            </a>
                        </Link>
                        <Link to= "/Registro">
                            <a>
                                <button className="botonCool" type="button">
                                Registrarse
                                <img src={require("./bxs-right-arrow-alt.svg")} alt=""/>
                                </button>
                            </a>
                        </Link>
                    </div>
                <img src={require('./sections/TEE.png')} alt="logo" class="emp"/>
            </div>
        </body>
    </div>
  );
}

export default Main

