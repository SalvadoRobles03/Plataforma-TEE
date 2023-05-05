import React from 'react';
import {Routes, Route, Navigate, useNavigate} from "react-router-dom";
import Login from "./UsuarioNormal/LoginNormal";
import LoginTEE from "./UsuarioTEE/LoginTEE"
import Entraste from './UsuarioNormal/Entraste';
import EntrasteTEE from './UsuarioTEE/Entraste_TEE'
import MuroNotif from './UsuarioNormal/MuroNotif';
import Notif from './UsuarioNormal/Notif';
import Main from './Main';
import Registro from './Registro';
import Impugnarc from './UsuarioNormal/Impugnarc';
import Detalles from './UsuarioNormal/Detalles';
import Cargarrec from './UsuarioNormal/Cargarrec';
import Expediente from './UsuarioTEE/Expediente';
import Firma from './UsuarioNormal/Firma';
import MandarNotif from './UsuarioTEE/MandarNotif'
import Contacto from './UsuarioTEE/Contacto'


export function App() {
  return (
    <div>
        
        <Routes>
            <Route exact path ="/" element={<Main/>}/>
            <Route path ="/Login" element={<Login/>}/>
            <Route path ="/LoginTEE" element={<LoginTEE/>}/>
            <Route path = "Registro" element = {<Registro/>}/>
            <Route path ="/Entraste" element={<Entraste/>}/>
            <Route path ="/Correo" element={<Contacto/>}></Route>
            <Route path ="/EntrasteTEE" element={<EntrasteTEE/>}/>
            <Route path = "/MuroNotif" element= {<MuroNotif/>}></Route>
            <Route path = "/MandarNotif" element= {<MandarNotif/>}></Route>
            <Route path="/Notif/:id" element={<Notif />} />
            <Route path = "/Impugnarc" element = {<Impugnarc/>}></Route>
            <Route path = "/Detalles" element = {<Detalles/>}></Route>
            <Route path = "/Cargarrec" element = {<Cargarrec/>}></Route>
            <Route path = "/Expediente" element = {<Expediente/>}></Route>
            <Route path = "/Firma" element = {<Firma/>}></Route>
            
        </Routes>
    </div>
  )
}
