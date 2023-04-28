import React, { useState } from "react";
import {RefreshNOTIF} from "./api";

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
  
    const notificationLinkStyle = {
        color: "black",
        
      };
  
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
              <tr key={notification.date}>
                <td>
                  <a href="#" style={notificationLinkStyle}>
                    {notification.text}
                  </a>
                </td>
                <td>{notification.date}</td>
                <td>
                  <button onClick={() => deleteNotification(notification)}>
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addNotification(e.target.elements.notification.value);
            e.target.reset();
          }}
        >
          <label>
            Notificación:
            <input type="text" name="notification" required />
          </label>
          <button type="submit">Agregar</button>
        </form>
      </div>
    );
  }
  
export default Table;
