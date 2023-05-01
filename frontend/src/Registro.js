import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./sections/css/registro.css"

export function Registro() {

    const [formData, setFormData] = useState({ //Para comparar más adelante los inputs
        name: "",
        apellidop: "",
        apellidom: "",
        firel: "",
        email: "",
        password: "",
        cpassword: "",
      });


    const handleChange = (event) => { // Receta de cocina 
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
     }));
    };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        if (formData.password != formData.cpassword) //Straightforward, lógica de primer sem.
        {
            alert("Las contraseñas no coinciden."); // Mejor alert para que de plano quede claro
            return;
        }
        if (!formData.email.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/)) { // Que se cumpla el formato de email.
            alert("Correo electrónico inválido.");
            return;
        }
        console.log(formData);
        window.location.href = "/Entraste"; // Ya se cumplio, entonces pasas! En vez de link aquí uso esto.


      };

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
                <form onSubmit={handleSubmit}> {/*Al darle submit se cumplira */}
                    <label htmlFor="name">Nombre(s)*:</label>
                    <input type="text" id="name" name="name" placeholder="" value ={formData.name} onChange={handleChange} required/>

                    <label htmlFor="apellidop">Apellido paterno*:</label>
                    <input type="text" id="apellidop" name="apellidop" placeholder="" value= {formData.apellidop} onChange={handleChange} required/>

                    <label htmlFor="apellidom">Apellido materno*:</label>
                    <input type="text" id="apellidom" name="apellidom" placeholder="" value= {formData.apellidom} onChange={handleChange} required/>

                    <label htmlFor="firel">Firel:</label>
                    <input type="text" id="firel" name="firel" placeholder="" value={formData.firel} onChange={handleChange}/>

                    <label htmlFor="email">Correo electrónico*:</label>
                    <input type="email" id="email" name="email" placeholder="" value= {formData.email} onChange={handleChange} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required/>

                    <label htmlFor="password">Contraseña*:</label>
                    <input type="password" id="password" name="password" placeholder="" value={formData.password} onChange={handleChange} required/>

                    <label htmlFor="cpassword">Confirmar contraseña*:</label>
                    <input type="password" id="cpassword" name="cpassword" placeholder="" value={formData.cpassword} onChange={handleChange} required/>
                
                    <button className="button" type="submit">Registrarse</button>
                </form>
            </main>
            </body>
        </div>
    );
}

export default Registro
