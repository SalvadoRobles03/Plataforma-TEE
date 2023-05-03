import axios from "axios";

const getCorreo = async (username) => {

    const response = await axios.get('http://localhost:2023/api/Usuario/' + username, {
    });
    
    console.log(response)
    return response;
};

const getNombre = async (correo) => {

    const response = await axios.get('http://localhost:2023/api/Nombre/' + correo, {
    });
    
    console.log(response.data)
    return response.data;
};

const getApellido = async (correo) => {

    const response = await axios.get('http://localhost:2023/api/Apellido/' + correo, {
    });
    
    console.log(response.data)
    return response.data;
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


const usuarioAutenticado = () => {

    return (sessionStorage.getItem('usuariovalidado') === 'ok' );
    
}

export {validarUsuario, getCorreo, usuarioAutenticado, getNombre, getApellido, GetNOTIF, getDocLink, GetExpediente};
