import React from "react";

import Grid from '@material-ui/core/Grid';

import Listado from "./Productos/Listado";

const Comercios = () => {

    return (
      <>        
        <Grid container spacing={1}>        
          {/* listado Comercios */}
          <Grid item xs={12} md={12} lg={12}>
            <h1>Productos</h1>

            <Listado />
          </Grid>
        </Grid>
      </>
    )
}

export default Comercios;