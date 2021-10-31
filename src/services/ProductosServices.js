const  getProductos = ({token}) =>{
    const apiUrl = 'http://pedidos_backend.test/api/productos'
 
    return fetch(apiUrl)
    .then(res => {
        return res.json()
    }).then(response => {
        return response
    })
 }