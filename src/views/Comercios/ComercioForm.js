import React,{useState, useEffect} from 'react';
import { Redirect } from 'react-router';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
    Grid,
    Paper,
    Button,
    FormGroup,
    FormLabel,
    FormControl,
    TextField,
    Select,
    FormHelperText
} from '@material-ui/core';


import { saveComercio } from '../../services/ComerciosService';
import { getRubros }    from '../../services/RubrosService';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
        margin: theme.spacing(1),
        width: '80%',
        },
    },
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
    paper: {
      padding: theme.spacing(4),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
    },
    fixedHeight: {
      height: '500px',
    },
    formLabel: {
        paddingBottom:'10px',
    }
}));

const ComercioForm = () => {
    
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    
    const [redirect, setRedirect] = useState(false);
    const [rubros, setRubros]     = useState([]);    
    const [estados]               = useState([
        { id:0, text:'Deshablitar' },
        { id:1, text:'Habilitar' },
        { id:2, text:'Eliminar' }
    ]);

    const [comercio, setComercio] = useState({ nombre:'', descripcion:'', rubro_id:0, estado:1 }); 


    useEffect(()=>{
        getRubros().then(response => {
            setRubros(response);
        })
    },[]);

    const handleOnChange = (event) => {
        const {name,value} = event.target
        const newComercio  = Object.assign({}, comercio);
        newComercio[name]  = value;
        setComercio(newComercio);
        console.log("==> comercio: ",comercio);
    }

    const handleOnSubmit = (event) => {
        event.preventDefault() ;   

        console.log("==> handleOnSubmit -  comercio: ",comercio);
        saveComercio(comercio).then((response)=>{
            console.log(response);
            setRedirect(true);           
        }).catch((errorResponse)=>{
            console.log("errorResponse");
        });
    }
    return (
        <>
            { /* Despues del submit Redirecciona */
            redirect && <Redirect to='/comercios' />
            }
            <Grid >
            <Grid item xs={12} md={8} lg={9}>
                <Paper className={fixedHeightPaper}>
                    <h1>Alta Comercio</h1>
                    <form 
                        onSubmit={handleOnSubmit}  
                        className={classes.root} 
                        noValidate 
                        autoComplete="off"
                        >
                        <FormGroup>
                            <FormLabel className={classes.formLabel} htmlFor="inputNombre" >Nombre</FormLabel>
                            <FormControl>
                                <TextField 
                                    id="inputNombre" 
                                    name='nombre'
                                    value={comercio.nombre} 
                                    onChange={handleOnChange}
                                    aria-describedby="Nombre Comercio" variant="outlined"/>
                                <FormHelperText id="my-helper-text">Ingrese Nombre</FormHelperText>
                            </FormControl>
                        </FormGroup>
                        <FormGroup>                            
                            <FormControl variant="outlined" className={classes.formControl}>
                                <FormLabel className={classes.formLabel} htmlFor="inputRubro" >Rubro</FormLabel>
                                <Select                                    
                                    id='inputRubro'
                                    name='rubro_id'
                                    value={comercio.rubro_id} 
                                    onChange={handleOnChange}
                                    native          
                                    label="Rubro"
                                >
                                <option aria-label="None" value="" />
                                {
                                    rubros.map((item)=><option key={item.id} value={item.id} >{item.nombre}</option>)
                                }
                                </Select>
                            </FormControl>
                        </FormGroup>
                        <FormGroup>                            
                            <FormControl variant="outlined" className={classes.formControl}>
                                <FormLabel className={classes.formLabel} htmlFor="inputRubro" >Estado</FormLabel>
                                <Select
                                    id='inpuEstado'
                                    name='estado'
                                    value={comercio.estado} 
                                    onChange={handleOnChange}
                                    native          
                                    label="Estado"
                                >
                                <option aria-label="" value="" >Seleccionar Estado</option>
                                {
                                    estados.map((item)=><option  key={item.id} value={item.id} >{item.text}</option>)
                                }
                                </Select>
                            </FormControl>
                        </FormGroup>

                        <Button type='submit' variant="contained" color="primary">  
                        Guardar
                        </Button>
                    </form>
                </Paper>
            </Grid>
        </Grid>
        </>
    )
}

export default ComercioForm;