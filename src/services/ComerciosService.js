
const getComercio = (idComercio) => {
    const apiUrl = `http://pedidos_backend.test/api/comercios/${idComercio}`
 
    return fetch(apiUrl)
    .then(res => {
        return res.json()
    }).then(response => {
        return response
    })
 }

 const  getComercios = () =>{
    const apiUrl = 'http://pedidos_backend.test/api/comercios'
 
    return fetch(apiUrl)
    .then(res => {
        return res.json()
    }).then(response => {
        return response
    })
 }

 

const saveComercio = (comercio) => {

    const apiUrl = ( comercio.id )? `/comercios/${comercio.id}` : `/comercios`;
    const method = ( comercio.id )? `PUT` :  `POST` ;
    
    return fetch( `http://pedidos_backend.test/api${apiUrl}`,
        {
        method: method,
        body: JSON.stringify(comercio),
        headers:{
            "access-control-allow-origin" : "*",
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(res => res.json())
    .then(res => {
        return true;
    })
    .catch(error => console.error('Error:', error))

}

const cambiarEstadoComercio = (idComercio, estado) => {

    const apiUrl = `/comercios/${idComercio}/${(estado)?'disable':'enable'}` ;

    return fetch(`http://pedidos_backend.test/api${apiUrl}`,
        {
        method: 'GET',
        mode: 'cors',
        headers:{
            "access-control-allow-origin" : "*",
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(res => {
        return res.json()
    }).then(response => {
        return response
    })
}

export {
    getComercio,
    getComercios,
    saveComercio,
    cambiarEstadoComercio
};