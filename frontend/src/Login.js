import {Outlet, Link} from "react-router-dom"
import { useNavigate, Navigate } from "react-router-dom";
import "./sections/css/log.css";

export function Login() {
    return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}> 
        <head>
            <title>TEE</title>
            <link rel="icon" type="image/png" href="./sections/TEE.png"></link>
        </head>
        <body>
        <img src={require('./sections/TEE.png')}  style={{ width: '400px'}}/>
        <div>
            <label for="fname">Usuario</label>
            <input type="text" id="fname" name="firstname" placeholder="Tu usuario.."/>
            <label for="fname">Contraseña</label><br/>
            <input type="password" id="psword" name="clave" placeholder="Contraseña.."/>
            <Link to = "/Entraste">
                <button>Login</button>
            </Link>
        </div>
        </body>
    </div>
    );
}
export default Login;

/*</input><div> 
        <h1>TEE HOLA SOY MIYAGI</h1>
        <nav>
            <label>
                usuario
            <input/>
                contraseña
            <input type = "password"/>
            <Link to = "/Entraste">
                <button>Login</button>
            </Link>
            </label>
        </nav>
    </div>*/
    