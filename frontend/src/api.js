import axios from "axios";

const getCorreo = async (username) => {

    const response = await axios.get('http://localhost:2023/api/Usuario/' + username, {
    });
    
    console.log(response)
    return response;
};

const getCorreoTEE = async (username) => {

    const response = await axios.get('http://localhost:2023/api/Magistrado/' + username, {
    });
    
    console.log(response)
    return response;
};

const getNombre = async (correo) => {

    const response = await axios.get('http://localhost:2023/api/Nombre/' + correo, {
    });
    
    console.log(response.data.nombres)
    return response.data.nombres;
};

const getNombreM = async (correo) => {

    const response = await axios.get('http://localhost:2023/api/NombreMagis/' + correo, {
    });
    
    console.log(response.data.nombres)
    return response.data.nombres;
};

const getApellido = async (correo) => {

    const response = await axios.get('http://localhost:2023/api/Apellido/' + correo, {
    });
    
    console.log(response.data.apellidoPaterno)
    return response.data.apellidoPaterno;
};

const getApellidoM = async (correo) => {

    const response = await axios.get('http://localhost:2023/api/ApellidoMagis/' + correo, {
    });
    
    console.log(response.data.apellidos)
    return response.data.apellidos;
};

const getDocLink = async (Folio) => {

    const response = await axios.get('http://localhost:2023/api/DOC/' + Folio, {
    });
    
    console.log(response.data.Document_link)
    return response.data.Document_link;
};

const GetExpediente = async (Folio) => {
    const response = await axios.get(`http://localhost:2023/api/Expediente/${Folio}`);
    const data = response.data;
    const folios = data.map(doc => doc.Folio_Documento); // Genera un nuevo array con los valores de "Folio_Documento"
    return folios;
  };
  

const GetNOTIF = async (id) => {
    const response = await axios.get(`http://localhost:2023/api/NOTIF/${id}`);
    const data = response.data;
    return data;
  };
  
  const GetUsuario = async (id) => {
    const response = await axios.get(`http://localhost:2023/api/userFolio/${id}`);
    const data = response.data;
    const usuario = parseInt(data.Usuario);
    return usuario;
  };


const validarUsuario = async (username, password) => {

    const response = await getCorreo(username);
    console.log(response)

    if (response.status === 200) {
        if (response.data.contrasena === password)
        {
            console.log(response.data.contrasena);
            return true;
        }
        else 
            return false;
    } else {
        return false;
    }
};

const validarUsuarioTEE = async (username, password) => {

    const response = await getCorreoTEE(username);
    console.log(response)

    if (response.status === 200) {
        if (response.data.contrasena === password)
        {
            console.log(response.data.contrasena);
            return true;
        }
        else 
            return false;
    } else {
        return false;
    }
};


const usuarioAutenticado = () => {

    return (sessionStorage.getItem('usuariovalidado') === 'ok' );
    
}

const insertarUsuario = async (name, apelliodp,apellidom,rfc,email,password) => {
    
    const jsonData = JSON.stringify({
        nombres: name,
        apellidoPaterno: apelliodp,
        apellidoMaterno: apellidom,
        rfc: rfc,
        correo: email,
        contrasena: password
    });
    const response = await axios.post('http://localhost:2023/api/Insert/',jsonData , {
        headers: {
          'Content-Type': 'application/json'
        }}
    );
    
    console.log(response)
    return response;
};

<<<<<<< HEAD
const insertarNotificacion = async (fechae,asunto,contenido,receptor) => {
=======
const insertarNotificacion = async (fechae,asunto,contenido) => {
>>>>>>> f7296b5 (Buscar expedientes)
    
    const jsonData = JSON.stringify({
        fecha_envio: fechae,
        asunto: asunto,
<<<<<<< HEAD
        contenido: contenido,
        receptor: receptor
=======
        contenido: contenido
>>>>>>> f7296b5 (Buscar expedientes)
    });
    const response = await axios.post('http://localhost:2023/api/InsertNotif/',jsonData , {
        headers: {
          'Content-Type': 'application/json'
        }}
    );
    
    console.log(response)
    return response;
};

<<<<<<< HEAD
export {validarUsuario,validarUsuarioTEE, getCorreo, usuarioAutenticado, getNombre, getNombreM, getApellido, getApellidoM, GetNOTIF, getDocLink, GetExpediente, insertarNotificacion, insertarUsuario, GetUsuario};
=======
export {validarUsuario, getCorreo, usuarioAutenticado, getNombre, getApellido, GetNOTIF, getDocLink, GetExpediente,insertarUsuario,insertarNotificacion};

>>>>>>> f7296b5 (Buscar expedientes)
