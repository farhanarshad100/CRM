import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const rows = [
  {
    id: "#EMP-4092",
    time: "Sarah Jenkins",
    type: "Senior Product Designer",
    ip: "L5",
    location: "David Miller",
    update: "14 Oct 1992",
    status: "Active",
    
  },
  {
    id: "2",
    time: "09:03:14 AM",
    type: "BREAK OUT",
    ip: "192.167.1.45",
    location: "Main Headquarters - Hall B",
    status: "Active",
  },
  {
    id: "3",
    time: "09:03:14 AM",
    type: "STYTEM CHECK",
    ip: "192.167.1.45",
    location: "Main Headquarters - Hall B",
    status: "Active",
  },
  {
    id: "4",
    time: "09:03:14 AM",
    type: "CLOCK OUT",
    ip: "192.167.1.45",
    location: "Main Headquarters - Hall B",
    status: "Active",
  },
  {
    id: "5",
    time: "09:03:14 AM",
    type: "CLOCK OUT",
    ip: "192.167.1.45",
    location: "Main Headquarters - Hall B",
    status: "Active",
  },
];
const EmployeeList = () => {
  return (
 <>
  <TableContainer
        component={Paper}
        sx={{ marginTop: "24px", boxShadow: "none" }}
      >
        <Table>
          <TableHead
            sx={{
              background: "#f7fafc",
              "& th": {
                fontWeight: "bold",
                border: "none",
                fontSize: "15px",
              },
            }}
          >
            <TableRow>
              <TableCell>EMPLOYEE ID</TableCell>
              <TableCell>NAME</TableCell>
              <TableCell>DESIGNATION</TableCell>
              <TableCell>GRADE</TableCell>
              <TableCell>MANAGER</TableCell>
              <TableCell>DATE OF BIRTH</TableCell>
              <TableCell>ACTION</TableCell>
            </TableRow>
          </TableHead>

          <TableBody
            sx={{
              "& td": {
                fontSize: "13px",
                color: "#979696",
                fontWeight: "500",
                borderBottom: "1px solid #f3f3f3",
              },
            }}
          >
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.time}</TableCell>
                <TableCell>
                    {row.type}
                </TableCell>
                <TableCell>{row.ip}</TableCell>
                <TableCell>{row.location}</TableCell>
                 <TableCell>{row.update}</TableCell>
                <TableCell ><span style={{color:"green"}}>{row.status}</span></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
 </>
  )
}

export default EmployeeList
