import React from 'react'
//import { useHistory, NavLink } from "react-router-dom";

import { Grid,Paper, Avatar, TextField, Button, Typography } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {useState} from 'react';

import axios from 'axios';

//const user_logged = localStorage.getItem("users");
const Login = ({setToken}) => {

    const paperStyle={
        padding :20,
        height:'70vh',
        width:280, 
        margin:"20px auto"
    }

    const avatarStyle={backgroundColor:'#3370bd'}
    const btnstyle={margin:'8px 0'}

    const [user, setUser] = useState({
        email: "",
        password:""
    });

    //let history = useHistory(); 

    const {email,password} = user;
    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const signIn = () =>
    { 
       if(user.email === '')
        {
            alert('Email Field is empty')
        }
        else if(user.password === '')
        {
            alert('Pass Field is empty')
        }
        
        axios.post("http://pedidos_backend.test/api/login",user)
        .then(response => {
            const token = response.data.access_token;
            setToken(token)
        }).catch(errors => {
            console.log("errors ==> ",errors.message);
        }); 
    }

    return   (

        <Grid container >
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                  <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Ingresar</h2>
                </Grid>
                <TextField label='Email'  name="email" value={email}  onChange={e => onInputChange(e)} placeholder='Enter Email' type='text' fullWidth required/>
                <TextField label='Password'  name="password" value={password}  onChange={e => onInputChange(e)} placeholder='Enter password' type='text' fullWidth required/>
              
                <Button type='submit' onClick={signIn} color='primary' variant="contained" style={btnstyle} fullWidth>Ingresar</Button>
              
                <Typography >No tienes una cuenta ?
                 
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Login