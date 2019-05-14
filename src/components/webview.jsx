import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';



let ID = 0;
function createData(ID,Name,Email,MobileNumber,City) {
  ID += 1;
  return { ID,Name,Email,MobileNumber,City };
}

const rows = [
  createData(10, 'Shahazad', 'sk.shahazad@gmail.com', 8446663013,'Mumbai'),
  createData(11, 'Abhijeet', 'abhijeet@gmail.com', 9890901509, 'Pune'),
  createData(12,'Laxman', 'lucky@gmail.com', 9595804106, 'Gujrat'),
  createData(13, 'Akash','lucky123@gmail.com', 9595804546,'Nashik'),
];

function SimpleTable(props) {


  return (
    <Paper className="paper">
      <Table className="table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            
            <TableCell align="center">Name</TableCell>
            <TableCell  className="priority-2" align="center">Email</TableCell>
            <TableCell  className="priority-2" align="center">Mobile Number</TableCell>
            <TableCell  align="center">City</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.ID}>
              <TableCell component="th" scope="row">
                {row.ID}
              </TableCell>
              <TableCell align="left">{row.Name}</TableCell>
              <TableCell className="priority-2"  align="left">{row.Email}</TableCell>
              <TableCell className="priority-2"  align="left">{row.MobileNumber}</TableCell>
              <TableCell   align="left">{row.City}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}



export default (SimpleTable);
