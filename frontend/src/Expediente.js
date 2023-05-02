import React, { useState } from 'react';
import { Link } from "react-router-dom";
import toggleSidebar  from "./sections/toggleSidebar.js";
import "./sections/css/expediente.css"
import { getDocLink } from './api.js';


export function Expediente() {
  const [docUrl, setDocUrl] = useState(""); // Estado para guardar la URL del documento

  // Manejador del evento del botón "BUSCAR"
  const handleSearch = () => {
    const fetchData = async () => {
      const folio = document.querySelector('#folio-input').value;
      const docUrl = await getDocLink(folio);
      

      setDocUrl(docUrl);
      
    };
    fetchData();
     
  };

  return (
    <div>
      
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
                <Link to = "/Entraste">
                  <li><a>Tablero</a></li>
                </Link>
                <Link to = "/MuroNotif">
                    <li><a href="/MuroNotif">Notificaciones</a></li>
                </Link>
                
                <li style={{backgroundColor: "#743484"}}><a>Expediente Electrónico</a></li>
            </ul>
        </div>
        <div class="search_box5">
          <div>
            <h3 className="titulo">Expediente</h3>
            <input id="folio-input" type="text" placeholder="Folio Documento:"/>
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
        
    </div>
  )
}

export default Expediente;
