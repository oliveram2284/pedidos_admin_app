import React, {useState,useEffect} from 'react';

import axios from 'axios';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';


import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Copyright from './components/Copyright';

import Login from './views/Login';
import Dashboard from './views/Dashboard';
import Pedidos   from './views/Pedidos';
import Comercios from './views/Comercios';
import ComercioForm from './views/Comercios/ComercioForm';
import Productos from './views/Productos';

import './App.css';
import useToken from './useToken';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },  
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));


function App() {

  const classes = useStyles();
  const {token, setToken} = useToken();
  const [userData, setUserData] = useState();

  useEffect(()=>{
    const instance = axios.create({
      baseURL: 'http://pedidos_backend.test/api/',
      timeout: 1000,
      headers: {'Authorization': 'Bearer '+token}
    });

    instance.get('/user')
    .then(response => {
      setUserData(response.data);
    })


  },[token]);
  
  /*
  useEffect(()=>{
    console.log("LOAD HEADER")
    console.log("=====> TOKEN: ", token)
  },[])
  */

  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  
  //Valida la session
  if (!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Router>
        <Header 
          open={open}
          userData={userData}
          setOpen={setOpen} 
          handleDrawerOpen={handleDrawerOpen} 
        />

        <Sidebar 
          open={open} 
          userData={userData}
          setOpen={setOpen} 
          handleDrawerClose={handleDrawerClose} 
        />
        
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth={false} className={classes.container}>
            <Switch>
              <Route path="/" component={Dashboard}  exact/>
              <Route path="/pedidos" component={Pedidos}/>
              <Route path="/comercios/add"      component={ComercioForm}/>
              <Route path="/comercios/:id/edit" component={ComercioForm}/>
              <Route path="/comercios" component={Comercios}/>
              <Route path="/clientes" component=""/>
              <Route path="/productos" component={Productos}/>
              <Route path="/reportes" component=""/>
            </Switch>
            
            <Box pt={4}>
              <Copyright />
            </Box>
          </Container>
        </main>
      </Router>
    </div>
  );
}

export default App;
