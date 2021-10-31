import React from 'react';
import {Link} from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import StoreIcon from '@material-ui/icons/Store';


const MainMenuItems = ({userData}) => {
  
  console.log("=====> MainMenuItems userData: ", userData)

  const items = [
    {
      text: 'Inicio',
      to: '/',
      icon: <DashboardIcon />,
      isAdmin: false,
    },
    {
      text: 'Comercios',
      to: '/comercios',
      icon: <StoreIcon />,
      isAdmin: true,
    },
    {
      text: 'Pedidos',
      to: '/pedidos',
      icon: <ShoppingCartIcon />,
      isAdmin: true,
    },
    {
      text: 'Productos',
      to: '/productos',
      icon: <LayersIcon />,
      isAdmin: false,
    },
    {
      text: 'Clientes',
      to: '/clientes',
      icon: <PeopleIcon />,
      isAdmin: false,
    },
    {
      text: 'Reportes',
      to: '/reportes',
      icon: <BarChartIcon />,
      isAdmin: false,
    },
  ]

  
  return (
    <>
      {
        items.map((item) => {
          return <>            
            <ListItem component={Link} to={item.to}>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          </>
        })
      }
    </>
  )
}

export default MainMenuItems;
/*
export const mainListItems = (
  <div>
    <ListItem component={Link} to='/'>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Inicio" />
    </ListItem>
    <ListItem component={Link} to='/comercios'>
      <ListItemIcon>
        <StoreIcon />
      </ListItemIcon>
      <ListItemText primary="Comercios" />
    </ListItem>
    <ListItem component={Link} to='/pedidos'>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Pedidos" />
    </ListItem>
    <ListItem component={Link} to='/productos'>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Productos" />
    </ListItem>
    <ListItem component={Link} to='/Clientes'>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Clientes" />
    </ListItem>
    <ListItem component={Link} to='/Reportes'>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Reportes" />
    </ListItem>
  </div>
);*/
/*
export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem>
  </div>
); */