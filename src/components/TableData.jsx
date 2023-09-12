import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const TableData = ({employeeData}) => {
  return (
    <div>
         {employeeData.map((user,index) => (
              <TableRow key={index}>
              <TableCell>{user.userName}</TableCell>
                <TableCell>{user.userEmail}</TableCell>
                <TableCell>{user.userRole}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {}}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() =>{}}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
              ))}
    </div>
  )
}

export default TableData