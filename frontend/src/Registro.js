import { Link } from "react-router-dom";
import "./sections/css/registro.css"

export function Registro() {
    return (
        <div>
            <head>
                <title>Registro de un nuevo usuario</title>
                <link rel="stylesheet" href="registro.css"/>
            </head>
            <body>
            <header>
                <img className="LOGO"src= {require("./sections/TEE.png")} alt="Logo" width="150px"/>
            </header>
            <main>
            <h1>Registro de un nuevo usuario</h1> {/*Por conveniencia, resulta mejor que el header este aquí*/}
                <form>
                    <label for="name">Nombre(s)*:</label>
                    <input type="text" id="name" name="name" placeholder="" required/>

                    <label for="apellidop">Apellido paterno*:</label>
                    <input type="text" id="apellidop" apellidop="apellidop" placeholder="" required/>

                    <label for="apellidom">Apellido materno*:</label>
                    <input type="text" id="apellidom" apellidop="apellidom" placeholder="" required/>

                    <label for="firel">Firel:</label>
                    <input type="text" id="firel" firel="firel"/>

                    <label for="email">Correo electrónico*:</label>
                    <input type="email" id="email" name="email" placeholder="" required/>

                    <label for="password">Contraseña*:</label>
                    <input type="password" id="password" name="password" placeholder="" required/>

                    <label for="cpassword">Confirmar contraseña*:</label>
                    <input type="password" id="cpassword" name="cpassword" placeholder="" required/>
                    
                    <a>
                        <Link to = "/Entraste">
                            <input type="submit" value="Register"/>
                        </Link>
                    </a>
                </form>
            </main>
            </body>
        </div>
    );
}

export default Registro
