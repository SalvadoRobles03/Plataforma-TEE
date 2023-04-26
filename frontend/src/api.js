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
    
    console.log(response.data.nombres)
    return response.data.nombres;
};

const getApellido = async (correo) => {

    const response = await axios.get('http://localhost:2023/api/Apellido/' + correo, {
    });
    
    console.log(response.data.apellidos)
    return response.data.apellidos;
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

export {validarUsuario, getCorreo, usuarioAutenticado, getNombre, getApellido};
