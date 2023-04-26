import axios from "axios";

const getUsuario = async (username) => {

    const response = await axios.get('http://localhost:2023/api/Usuario/' + username, {
    });
    
    console.log(response)
    return response;
};


const validarUsuario = async (username, password) => {

    const response = await getUsuario(username);
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

export {validarUsuario, getUsuario, usuarioAutenticado};
