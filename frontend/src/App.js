import React from 'react'
import {Routes, Route, Navigate, useNavigate} from "react-router-dom"
import Login from "./Login"
import Entraste from './Entraste'
import MuroNotif from './MuroNotif'
import Notif from './Notif'
import Main from './Main'
import Registro from './Registro'
import Impugnarc from './Impugnarc'
import Detalles from './Detalles'
import Cargarrec from './Cargarrec'
import Expediente from './Expediente'
import Firma from './Firma'




export function App() {
  return (
    <div>
        <Routes>
            <Route exact path path ="/" element={<Main/>}/>
            <Route path ="/Login" element={<Login/>}/>
            <Route path = "Registro" element = {<Registro/>}></Route>
            <Route path ="/Entraste" element={<Entraste/>}/>
            <Route path = "/MuroNotif" element= {<MuroNotif/>}></Route>
            <Route path = "/Notif" element = {<Notif/>}></Route>
            <Route path = "/Impugnarc" element = {<Impugnarc/>}></Route>
            <Route path = "/Detalles" element = {<Detalles/>}></Route>
            <Route path = "/Cargarrec" element = {<Cargarrec/>}></Route>
            <Route path = "/Expediente" element = {<Expediente/>}></Route>
            <Route path = "/Firma" element = {<Firma/>}></Route>
        </Routes>
    </div>
  )
}
