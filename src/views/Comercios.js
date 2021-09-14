import React from "react";

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Listado from './Comercios/Listado';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
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
              <Paper className={fixedHeightPaper}>
                <Listado/>
              </Paper>
          </Grid>
        </Grid>
      </>
    )
}

export default Comercios;