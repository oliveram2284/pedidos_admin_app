import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(1, '31/10/2021', 'Elvis Presley', 'Domicilio', 'Nuevo', 312.44),
  createData(2, '31/10/2021', 'Elvis Presley', 'Domicilio', 'Preparacion', 312.44),
  createData(3, '31/10/2021', 'Elvis Presley', 'Domicilio', 'Listo para Despachar', 312.44),
  createData(4, '31/10/2021', 'Elvis Presley', 'Domicilio', 'Despachado', 312.44),
  createData(5, '31/10/2021', 'Elvis Presley', 'Domicilio', 'Entregado', 312.44),
  createData(6, '31/10/2021', 'Elvis Presley', 'Domicilio', 'Completado', 312.44),
  createData(7, '31/10/2021', 'Paul McCartney', 'Retiro, UK', 'Nuevo', 866.99),
  createData(8, '31/10/2021', 'Paul McCartney', 'Retiro, UK', 'Preparacion', 866.99),
  createData(9, '31/10/2021', 'Paul McCartney', 'Retiro, UK', 'Listo para Despachar', 866.99),
  createData(10, '31/10/2021', 'Paul McCartney', 'Retiro, UK', 'Entregado', 866.99),
  createData(11, '31/10/2021', 'Paul McCartney', 'Retiro, UK', 'Completado', 866.99),
  createData(12, '31/10/2021', 'Tom Scholz', 'Mesa 1', 'Nuevo', 100.81),
  createData(13, '31/10/2021', 'Tom Scholz', 'Mesa 1', 'Preparacion', 100.81),
  createData(14, '31/10/2021', 'Tom Scholz', 'Mesa 1', 'Listo para Despachar', 100.81),
  createData(15, '31/10/2021', 'Tom Scholz', 'Mesa 1', 'Entregado', 100.81),
  createData(16, '31/10/2021', 'Tom Scholz', 'Mesa 1', 'Cobrado', 100.81),

  createData(17, '31/10/2021', 'Michael Jackson', 'Mesa 2', 'AMEX ⠀•••• 2000', 654.39),
  createData(18, '31/10/2021', 'Bruce Springsteen', 'Domicilio', 'VISA ⠀•••• 5919', 212.79),
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Pedidos Recientes</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Fecha</TableCell>
            <TableCell>Nombre</TableCell>
            <TableCell>Tipo</TableCell>
            <TableCell>Estado</TableCell>
            <TableCell align="right">Total $</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more orders
        </Link>
      </div>
    </React.Fragment>
  );
}