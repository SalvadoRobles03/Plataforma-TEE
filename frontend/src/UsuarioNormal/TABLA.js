import React, { useState, useEffect } from "react";
import {RefreshNOTIF} from "../api";
import { Link } from "react-router-dom";


function Table() {
    const [notifications, setNotifications] = useState([]);
    

  
  
    function addNotification(notificationText) {
      const notification = {
        text: notificationText,
        date: new Date().toLocaleString(),
      };
      setNotifications([...notifications, notification]);
    }
  
    function deleteNotification(notification) {
      setNotifications(notifications.filter((n) => n !== notification));
    }

    function verNotificacion(id) {
        
    }
  
    const notificationLinkStyle = {
        color: "black",
        
      };

    useEffect(() => {
    // Hacer la llamada a la API para obtener los datos
    const fetchData = async () => {
      const response = await fetch("http://localhost:2023/api/NOTIF");
      const data = await response.json();
      setNotifications(data);
      console.log(response)
    }
    fetchData();
  }, []);
  
    return (
      <div className="TABLA">
        <table>
          <thead>
            <tr>
              <th>Notificación</th>
              <th>Fecha</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {notifications.map((notification) => (
              <tr key={notification.id_notificacion}>
                <td>
                  <a href="#" style={notificationLinkStyle}>
                    {notification.asunto}
                  </a>
                </td>
                <td>{new Date(notification.fecha_envio).toLocaleString('es-ES', { dateStyle: 'short', timeStyle: 'medium' })}</td>
                <td>
                <Link to={`/Notif/${notification.id_notificacion}`}> 
                    <button className="Botones">
                        <b>Ver</b> 
                    </button>
                </Link>
                
                  <button className="Botones" onClick={() => deleteNotification(notification)}>
                    <b>Eliminar</b> 
                  </button>
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
      </div>
    );
  }
  
export default Table;
