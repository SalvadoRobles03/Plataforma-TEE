import {Outlet, Link} from "react-router-dom"
import { useNavigate, Navigate } from "react-router-dom";
import { validarUsuario } from './api.js';
import { useState } from 'react';
import "./sections/css/log.css";
import {getNombre} from './api'
import {getApellido} from './api'




export function Login() {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [proceder, setProceder] = useState(null);
    const [isError, setIsError] = useState(false);

    const inputStyle = {
      border: isError ? "2px solid red" : "2px solid black",
      // Estilo adicional si lo deseas
      
    };

    const handleFormSubmit = async (event) => {
      event.preventDefault();

      console.log(username)
      console.log(password)
      const Nombre= await getNombre(username) +' '+ await getApellido(username)
      console.log(Nombre)
      

      const valido = await validarUsuario(username, password)
      console.log(valido)
      if ( valido ) {
          
          sessionStorage.setItem('usuario', Nombre);
          sessionStorage.setItem('usuariovalidado', 'ok');
          setProceder('ok');
      } else {
        alert("El correo o contraseña son equivocados")
        setIsError(true);
        setTimeout(() => {
          setIsError(false);
        }, 3000);
        
      }
  };
  
    return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}> 
        <head>
            <title>TEE</title>
            <link rel="icon" type="image/png" href="./sections/TEE.png"></link>
        </head>
        
        <body>
        <img alt='LOGO' src={require('./sections/TEE.png')}  style={{ width: '400px'}}/>
        <h1>Introduzca sus credenciales</h1>
          <form onSubmit={handleFormSubmit}>
            <label>
              <p>Usuario</p>
              <input style={inputStyle} type="text" placeholder="Correo"  onChange={e => setUserName(e.target.value)} />
            </label>
            <label>
              <p>Contraseña</p>
              <input style={inputStyle} type="password" placeholder="Contraseña" onChange={e => setPassword(e.target.value)} />
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


    