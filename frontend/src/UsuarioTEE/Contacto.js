import React, { useEffect } from 'react';
import emailjs from 'emailjs-com';
import { useState } from 'react';



const Contacto=()=> {
  const [user_email, setUser_email] = useState('');
  

 

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.send("service_z2prh2b","template_9v2ymvq",{
      from_name: "TEE",
      to_name: sessionStorage.getItem('usuario'),
      message: "Tienes una nueva notificación en la plataforma TEE, Inicia sesión para verla.",
      to:  "alexrobles03@hotmail.com",
      }, 'CTncan4uJLqgrNK0Q').then(function(response) {
          console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
          console.log('FAILED...', error);
        });
  };
//aqui iria setuser_email(session)
  return (
    <form onSubmit={sendEmail}>
      
      <label>Name</label>
      <input type="text" name="user_name" />

      <label>E-mail</label>
      <input type="email" name="user_l" value={user_email} onChange={e => setUser_email(e.target.value)}/>
      
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};

export default Contacto;
