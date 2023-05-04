import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { insertarNotificacion } from '../api.js';

function ENVIAR_NOTI(){
    const [Asunto, SetAsunto]=useState('');
    const [Texto, SetTexto]=useState('');
    const [timeClicked, setTimeClicked] = useState(null);

    const handleEnviarNotificacion= async (event) => {
        event.preventDefault();
        
        let fechaActual = new Date();
        fechaActual.setHours(fechaActual.getHours() - 6);
        fechaActual= fechaActual.toISOString();
        setTimeClicked(fechaActual);
        const response = await insertarNotificacion(timeClicked,Asunto,Texto);
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
      
      return (
      <div className='EnviarNoti'>
      <h3 className="titulo">Enviar notificación</h3>
        <input id="asunto-input" type="text" placeholder="Asunto" maxLength={50} value={Asunto} onChange={e => SetAsunto(e.target.value)} />
        <textarea rows="auto" cols="auto" placeholder='Texto..' maxLength={5000} value={Texto} onChange={e => SetTexto(e.target.value)}></textarea>
        <button onClick={handleEnviarNotificacion}><b>Enviar Notificación</b></button>
      </div>
      );
}

export default ENVIAR_NOTI