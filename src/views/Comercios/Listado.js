import React,{useState, useEffect} from 'react';
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
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { green,red,teal } from '@material-ui/core/colors';
import { getComercios } from '../../services/ComerciosService';

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
    const [comercios, setComercios] = useState([]);

    useEffect(()=>{
        getComercios().then(_comercios => {
            setComercios(_comercios);
        })
    },[])

    return (
        <>
            <TableContainer component={Paper}>
            <Table className={classes.table} size="small" aria-label="a dense table">
                <TableHead>
                <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell align="left">Nombre</TableCell>
                    <TableCell align="left">Rubro</TableCell>
                    <TableCell align="center">Estado</TableCell>
                    <TableCell align="center">Acciones</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                    {
                        comercios.map((comercio) => {
                            return(
                                <TableRow key={comercio.id}>
                                    <TableCell align="center">{comercio.id}</TableCell>
                                    <TableCell align="left">{comercio.nombre}</TableCell>
                                    <TableCell align="left">{comercio.rubro.nombre}</TableCell>
                                    <TableCell align="center">
                                        {(comercio.estado === 1) ?
                                            <span className={classes.span_success}>Habilitado</span>:
                                            <span className={classes.span_error}>Deshabilitado</span>
                                        }
                                        
                                        </TableCell>
                                    <TableCell align="center">
                                        <IconButton 
                                            fontSize="small" 
                                            style={{ color: green[500] }} 
                                            aria-label="Editar Comercio" 
                                            component={Link}
                                            to={`/comercios/${comercio.id}/edit`}
                                            >
                                            <EditIcon />
                                        </IconButton>
                                        {/* 
                                        <IconButton fontSize="small" style={{ color: red[500] }} aria-label="Eliminar Comercio" component="span">
                                            <DeleteIcon />
                                        </IconButton>
                                        <IconButton fontSize="small" style={{ color: teal[500] }} aria-label="Ver Comercio" component="span">
                                            <VisibilityIcon />
                                        </IconButton>           
                                        */}                        
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

export default Listado