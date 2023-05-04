import React, { useState } from 'react';
import { Link } from "react-router-dom";
<<<<<<< HEAD:frontend/src/UsuarioTEE/Expediente.js
import toggleSidebar  from "../sections/toggleSidebar.js";
import "../sections/css/expediente.css"
import { GetUsuario, getDocLink } from '../api.js';
import { GetExpediente } from '../api.js';
import ENVIAR_NOTI from './EnviarNotiWinget.js'
import { insertarNotificacion } from '../api.js';
=======
import toggleSidebar  from "./sections/toggleSidebar.js";
import "./sections/css/expediente.css"
import { getDocLink } from './api.js';
import { GetExpediente } from './api.js';
import { insertarNotificacion } from './api.js';
>>>>>>> f7296b5 (Buscar expedientes):frontend/src/Expediente.js


export function Expediente() {
  const [docUrl, setDocUrl] = useState(""); // Estado para guardar la URL del documento
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedFolio, setSelectedFolio] = useState("");
  const [OpcionesList, SetOpcionesList] = useState([]);
<<<<<<< HEAD:frontend/src/UsuarioTEE/Expediente.js
  const [Asunto, SetAsunto]=useState('');
  const [Texto, SetTexto]=useState('');
  const [timeClicked, setTimeClicked] = useState(null);
 
=======
  const [formData, setFormData] = useState({ //Para comparar más adelante los inputs
    asunto: "",
    texto: "",
  });
  const [timeClicked, setTimeClicked] = useState(null);

>>>>>>> f7296b5 (Buscar expedientes):frontend/src/Expediente.js
  // Manejador del evento del botón "BUSCAR"
  const handleSearch = () => {
    const fetchData = async () => {
      
      const docUrl = await getDocLink(selectedOption);
      setDocUrl(docUrl);
    };
    fetchData();
  };

  const CargarExpediente = () =>{
    const GetOpciones = async () => {
      const Folio_Expediente = document.querySelector('#folio-input').value;
      setSelectedFolio(Folio_Expediente);
      const opciones = await GetExpediente(Folio_Expediente);
      SetOpcionesList(opciones);
    };
    GetOpciones();
  }

<<<<<<< HEAD:frontend/src/UsuarioTEE/Expediente.js
  const handleEnviarNotificacion= async (event) => {
      event.preventDefault();
      
      let fechaActual = new Date();
      fechaActual.setHours(fechaActual.getHours() - 6);
      fechaActual= fechaActual.toISOString();
      setTimeClicked(fechaActual);
      const Receptor= await GetUsuario(selectedFolio)
      console.log(Receptor)
      const response = await insertarNotificacion(timeClicked,Asunto,Texto,Receptor);
      console.log(Asunto);
      console.log(Texto)
      if (response.status == 200) {  
        if (response.data == "")
          alert("Error")
        else 
          alert("Notificación enviada con éxito")
    } else {
      alert("Error: " + response.status);
    }
   
    };
=======
  const handleNotificacion = (event) => {
    setFormData(event.target.value); 
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
   }));
  };
  

  const handleEnviarNotificacion= async (event) => {
    event.preventDefault();
    
    const currentTime = new Date();
    setTimeClicked(currentTime);
    const response = await insertarNotificacion(currentTime,formData.asunto,formData.texto);
    console.log(formData.asunto);
    console.log(formData.texto)
    if (response.status == 201) {  // Post regresa 201 cuando hay exito
      if (response.data == "")
        alert("Error")
      else 
        alert("Notificación enviada con éxito")
  } else {
    alert("Error: " + response.status);
  }
 
  };

 
>>>>>>> f7296b5 (Buscar expedientes):frontend/src/Expediente.js

  return (
    <div>
      
        <header style={{backgroundColor: "#743484"}}>
          <Link to = "/Entraste">
            <a><img className="LOGO"src= {require("../sections/TEEAdmin.png" )}alt="Logo" width="150px"/></a>
          </Link>
            <div className="LOGIN">
                <img src= {require("../sections/Login.webp" )} alt="Foto Perfil" width="50 px"/>
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
                <Link to = "/EntrasteTEE">
                  <li><a>Tablero</a></li>
                </Link>
                <Link to = "/MandarNotif">
                    <li><a href="/MuroNotif">Mandar Notificación</a></li>
                </Link>
                
                
                <li style={{backgroundColor: "#743484"}}><a>Expediente Electrónico</a></li>
            </ul>
        </div>
        <div class="search_box5">
          <div>
            <h3 className="titulo">Expediente</h3>
            <input id="folio-input" type="text" placeholder="Folio Expediente:"/>
            <button className='Cargar' onClick={CargarExpediente} >Cargar Expediente</button>
            <select value={selectedOption} onChange={e => setSelectedOption(e.target.value)}>
              <option value="" disabled hidden>
                <h2>Seleccione Documento</h2>
              </option>
              {OpcionesList.map((opcion) => (
                <option value={opcion}>{opcion}</option>
              ))}
            </select>

            <button onClick={handleSearch}><b>BUSCAR</b></button> {/* Agrega el manejador del evento al botón */}
          </div>
        </div>

        <div class="document_box5">
          <h3 className='titulo'>Documento</h3>
          <div>
              <div>
                {/* Utiliza el estado "docUrl" para definir la URL del iframe */}
                <iframe src={docUrl} allow="autoplay"></iframe>
              </div>
          </div>
        </div>

        <div className='EnviarNoti'>
        <h3 className="titulo">Enviar notificación</h3>
<<<<<<< HEAD:frontend/src/UsuarioTEE/Expediente.js
        <input id="asunto-input" type="text" placeholder="Asunto" maxLength={50} value={Asunto} onChange={e => SetAsunto(e.target.value)} />
        <textarea rows="auto" cols="auto" placeholder='Texto..' maxLength={5000} value={Texto} onChange={e => SetTexto(e.target.value)}></textarea>
        <button onClick={handleEnviarNotificacion}><b>Enviar Notificación</b></button>
      </div>
=======
          <input id="asunto-input" type="text" placeholder="Asunto" maxLength={50} value={formData.asunto} onChange={handleNotificacion} />
          <textarea rows="auto" cols="auto" placeholder='Texto..' maxLength={5000} value={formData.texto} onChange={handleNotificacion}></textarea>
          <button onClick={handleEnviarNotificacion}><b>Enviar Notificación</b></button>
        </div>
>>>>>>> f7296b5 (Buscar expedientes):frontend/src/Expediente.js
    </div>
  )
}

export default Expediente;
