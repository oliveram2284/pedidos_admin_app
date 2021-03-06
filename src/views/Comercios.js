import React from "react";
import {Link} from 'react-router-dom';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import { green } from '@material-ui/core/colors';
import Listado from './Comercios/Listado';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  container: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: '100vh',
  },
  
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  fabGreen: {
    color: theme.palette.common.white,
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[600],
    },
    justify:"space-between"
  },
  buttonHeader: {    
    padding: '10px',
    textAlign: 'right',
    marginBottom: '5px',
  }
}));

const Comercios = () => {
    const classes = useStyles();
    
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    return (
      <>        
        <Grid container spacing={1}>        
          {/* listado Comercios */}
          <Grid item xs={12} md={12} lg={12}>
            <h1>Comercios</h1>
            <Grid item xs={12} md={12} lg={12}>
              <Paper className={classes.buttonHeader}>
                <Button 
                  size="small"
                  component={Link}               
                  to='/comercios/add' 
                  align='right'
                  variant="contained" 
                  color="primary">  
                  <AddIcon /> Agregar 
                </Button>
              </Paper>
            </Grid>
            <Paper className={fixedHeightPaper}>           
              
              <Listado/>
            </Paper>
          </Grid>
        </Grid>
      </>
    )
}

export default Comercios;