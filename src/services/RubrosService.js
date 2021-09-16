
const apiUrl = `http://pedidos_backend.test/api`
 
const getRubro = (id) => {
    const url = `${apiUrl}/rubros/${id}`
    console.log(url);
    return fetch(url)
    .then(res => {
        return res.json()
    }).then(response => {
        return response
    })
 }

 const  getRubros = () =>{
    const url = `${apiUrl}/rubros`
 
    return fetch(url)
    .then(res => {
        return res.json()
    }).then(response => {
        return response
    })
 }


 export {
    getRubro,
    getRubros
    };