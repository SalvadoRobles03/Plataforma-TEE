import {Outlet, Link} from "react-router-dom"
import { useNavigate, Navigate } from "react-router-dom";
import { validarUsuario } from '/Users/nataliavalles/Downloads/TribunalFinal/Plataforma-TEE/frontend/src/api.js';
import { useState } from 'react';
import "./sections/css/log.css";

export function Login() {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [proceder, setProceder] = useState(null);

    const handleFormSubmit = async (event) => {
      event.preventDefault();

      console.log(username)
      console.log(password)

      const valido = await validarUsuario(username, password)
      console.log(valido)
      if ( valido ) {
          sessionStorage.setItem('usuario', username);
          sessionStorage.setItem('usuariovalidado', 'ok');
          setProceder('ok');
      } else {
        //setProceder('no');
        alert("El correo o contraseña son equivocados")
      }
  };

    return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}> 
        <head>
            <title>TEE</title>
            <link rel="icon" type="image/png" href="./sections/TEE.png"></link>
        </head>
        <body>
        <img src={require('./sections/TEE.png')}  style={{ width: '400px'}}/>
        <h1>Introduzca sus credenciales</h1>
          <form onSubmit={handleFormSubmit}>
            <label>
              <p>Usuario</p>
              <input type="text" placeholder="Correo"  onChange={e => setUserName(e.target.value)} />
            </label>
            <label>
              <p>Contraseña</p>
              <input type="password" placeholder="Contraseña" onChange={e => setPassword(e.target.value)} />
            </label>
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
          {proceder && ( <Navigate to="/Entraste" replace={true} /> )}
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
    