/*import "./sections/css/cielo.css"*/
/*import "./sections/css/Plantilla.css"*/
import toggleSidebar from "../sections/toggleSidebar.js";
import "../sections/css/notif.css";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { GetNOTIF } from "../api.js";

export function Notif() {
  const { id } = useParams();
  const [asuntos, setAsuntos] = useState([]);
  const [contenido, setContenido] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const notifications = await GetNOTIF(id);
      console.log(notifications)
      const asuntos = notifications.asunto;
      console.log(asuntos)
      const contenido = notifications.contenido;
      console.log(contenido)

      setAsuntos(asuntos);
      setContenido(contenido);
      
    };
    fetchData();
  }, [id]);

  return (
    <div>
      <head></head>

      <body>
        <header style={{ backgroundColor: "#743484" }}>
          <Link to="/Entraste">
              <img
                className="LOGO"
                src={require("../sections/TEE.png")}
                alt="Logo"
                width="150px"
              />
          </Link>
          <div className="LOGIN">
            <img
              src={require("../sections/Login.webp")}
              alt="Foto Perfil"
              width="50 px"
            />
            <h3>{sessionStorage.getItem("usuario")}</h3>
          </div>
        </header>
        <div className="sidebar">
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
                    <li style={{backgroundColor: "#743484"}}><a>Notificaciones</a></li>
                </Link>
                <Link to = "/Impugnarc">
                    <li><a>Subir Archivos</a></li>
                </Link>
          </ul>
        </div>

        <div className="document_box">
        <Link to="/MuroNotif"> 
                    <button className="Botones">
                        Regresar
                    </button>
                </Link>
          <h3 style={{ fontSize: "22px" }}>
            <i>{asuntos}</i>
          </h3>
          <div>
            <p>{contenido}</p>
          </div>
        </div>
      </body>
    </div>
  );
}

export default Notif;
