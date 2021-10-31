import React,{useState} from 'react';
import useToken from '../../useToken';
import axios from 'axios';
import {Link} from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined';
import CheckBoxOutlineBlankOutlinedIcon from '@material-ui/icons/CheckBoxOutlineBlankOutlined';
import { green,red } from '@material-ui/core/colors';

const useStyles = makeStyles({
    table: {
      minWidth: '100vh',
    },
    span_success:{
        color: green[700],        
    },
    span_error:{        
        color: red[700],
    }
});

const Listado = () => {
    
    const classes = useStyles();       
    const {token} = useToken();
    const [productos, setProductos] = useState([]);
    
    const getProductos = () => {
        const instance = axios.create({
          baseURL: 'http://pedidos_backend.test/api/',
          headers: {'Authorization': 'Bearer '+ token}
        });

        instance.get('/productos')
        .then(response => {
            if (response.data.status) {
                console.log("==> PRODUCTOS response : %o",response);
                setProductos(response.data.productos);
            }
        })
    }

    getProductos();

    return (
        <>
           <TableContainer component={Paper}>
               <Table className={classes.table} size="small" aria-label="a dense table">
                   <TableHead>
                   <TableRow>
                       <TableCell>Id</TableCell>
                       <TableCell align="left">Nombre</TableCell>
                       <TableCell align="left">Stock</TableCell>
                       <TableCell align="left">Precio</TableCell>
                       <TableCell align="center">Habilitado</TableCell>
                       <TableCell align="center">Acciones</TableCell>
                   </TableRow>
                   </TableHead>
                   <TableBody>
                       {
                           productos.map((producto) => {
                               return (
                                   <TableRow key={producto.id}>
                                       <TableCell >{producto.id}</TableCell>
                                       <TableCell align='left'>{producto.nombre}</TableCell>
                                       <TableCell align='left'>{producto.cantidad}</TableCell>
                                       <TableCell align='left'>{producto.precio_unitario}</TableCell>
                                       <TableCell align='center'>
                                           {(producto.estado === 1) ?
                                               <span className={classes.span_success}><CheckBoxOutlinedIcon/></span>:
                                               <span className={classes.span_error}><CheckBoxOutlineBlankOutlinedIcon/></span>
                                           }
                                       </TableCell>
                                       <TableCell align="center">
                                           <IconButton 
                                               fontSize="small" 
                                               style={{ color: green[500] }} 
                                               aria-label="Editar Comercio" 
                                               component={Link}
                                               to={`/productos/${producto.id}/edit`}
                                               >
                                               <EditIcon />
                                           </IconButton>
                                       </TableCell>
                                   </TableRow>
                               )
                           })
                       }
                   </TableBody>
               </Table>
           </TableContainer>
        </>
    )
}

export default Listado;