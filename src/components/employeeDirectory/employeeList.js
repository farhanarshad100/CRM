"use client"


import {
  IconButton,
  Menu,
  MenuItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useState } from "react";
import MoreVertIcon from '@mui/icons-material/MoreVert';

const employees = [
  {
    id: "#EMP-4092",
    employee: {
      name: "Sarah Jenkins",
      email: "sarah.j@precision.com",
      avatar: "/images/mangeProfile.jpg",
    },
    designation: "Senior Product Designer",
    level: "L5",
    managerDetails: {
      name: "David Miller",
      initials: "DM",
    },
    dob: "14 Oct 1992",
   
  },
    {
    id: "#EMP-4093",
    employee: {
      name: "Sarah Jenkins",
      email: "sarah.j@precision.com",
      avatar: "/images/mangeProfile.jpg",
    },
    designation: "Senior Product Designer",
    level: "L5",
    managerDetails: {
      name: "David Miller",
      initials: "DM",
    },
    dob: "14 Oct 1992",
   
  },
    {
    id: "#EMP-4392",
    employee: {
      name: "Sarah Jenkins",
      email: "sarah.j@precision.com",
      avatar: "/images/mangeProfile.jpg",
    },
    designation: "Senior Product Designer",
    level: "L5",
    managerDetails: {
      name: "David Miller",
      initials: "DM",
    },
    dob: "14 Oct 1992",
   
  },
    {
    id: "#EMP-4292",
    employee: {
      name: "Sarah Jenkins",
      email: "sarah.j@precision.com",
      avatar: "/images/mangeProfile.jpg",
    },
    designation: "Senior Product Designer",
    level: "L5",
    managerDetails: {
      name: "David Miller",
      initials: "DM",
    },
    dob: "14 Oct 1992",
   
  },
    {
    id: "#EMP-4192",
    employee: {
      name: "Sarah Jenkins",
      email: "sarah.j@precision.com",
      avatar: "/images/mangeProfile.jpg",
    },
    designation: "Senior Product Designer",
    level: "L5",
    managerDetails: {
      name: "David Miller",
      initials: "DM",
    },
    dob: "14 Oct 1992",
   
  },
    {
    id: "#EMP-4992",
    employee: {
      name: "Sarah Jenkins",
      email: "sarah.j@precision.com",
      avatar: "/images/mangeProfile.jpg",
    },
    designation: "Senior Product Designer",
    level: "L5",
    managerDetails: {
      name: "David Miller",
      initials: "DM",
    },
    dob: "14 Oct 1992",
   
  },
    {
    id: "#EMP-4792",
    employee: {
      name: "Sarah Jenkins",
      email: "sarah.j@precision.com",
      avatar: "/images/mangeProfile.jpg",
    },
    designation: "Senior Product Designer",
    level: "L5",
    managerDetails: {
      name: "David Miller",
      initials: "DM",
    },
    dob: "14 Oct 1992",
   
  },
    {
    id: "#EMP-40882",
    employee: {
      name: "Sarah Jenkins",
      email: "sarah.j@precision.com",
      avatar: "/images/mangeProfile.jpg",
    },
    designation: "Senior Product Designer",
    level: "L5",
    managerDetails: {
      name: "David Miller",
      initials: "DM",
    },
    dob: "14 Oct 1992",
   
  },
    {
    id: "#EMP-3092",
    employee: {
      name: "Sarah Jenkins",
      email: "sarah.j@precision.com",
      avatar: "/images/mangeProfile.jpg",
    },
    designation: "Senior Product Designer",
    level: "L5",
    managerDetails: {
      name: "David Miller",
      initials: "DM",
    },
    dob: "14 Oct 1992",
   
  },
    {
    id: "#EMP-46092",
    employee: {
      name: "Sarah Jenkins",
      email: "sarah.j@precision.com",
      avatar: "/images/mangeProfile.jpg",
    },
    designation: "Senior Product Designer",
    level: "L5",
    managerDetails: {
      name: "David Miller",
      initials: "DM",
    },
    dob: "14 Oct 1992",
   
  },
];
const EmployeeList = () => {
    const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
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

          <TableBody>
            {employees.map((employee) => (
              <TableRow key={employee.id}>
                <TableCell>{employee.id}</TableCell>

                <TableCell>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <img
                      src={employee.employee.avatar}
                      alt={employee.employee.name}
                      width={40}
                      height={40}
                      style={{ borderRadius: "12px" }}
                    />
                    <div>
                      <div>{employee.employee.name}</div>
                      <small>{employee.employee.email}</small>
                    </div>
                  </div>
                </TableCell>

                <TableCell>{employee.designation}</TableCell>
                <TableCell>
                  <span
                    style={{
                      background: "rgb(0 76 202 / 10%)",
                      textAlign: "center",
                      height: "20px",
                      width: "37px",
                      borderRadius: "12px",
                      color: "#004CCA",
                      fontSize: "11px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "800",
                    }}
                  >
                    {employee.level}
                  </span>
                </TableCell>
                <TableCell>
                  {" "}
                  <span
                    style={{
                      background: "rgb(0 76 202 / 10%)",
                      textAlign: "center",
                      height: "24px",
                      width: "24px",
                      borderRadius: "12px",
                      color: "#004CCA",
                      fontSize: "10px",
                      display: "inline-block",
                      fontWeight: "800",
                      lineHeight: "23px",
                      marginRight: "8px",
                    }}
                  >
                    {employee.managerDetails.initials}
                  </span>
                  {employee.managerDetails.name}
                </TableCell>
                <TableCell>{employee.dob}</TableCell>

                <TableCell>
                <IconButton onClick={handleClick}>
          <MoreVertIcon sx={{color:"#94A3B8", fontSize:"30px"}}  />
        </IconButton>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
 sx={{
    "& .MuiPaper-root": {
      ml: -12,
      boxShadow:"0px 3px 10px 0px rgba(31, 31, 31, 0.14)",
    background: "#f7f7fc",
    width:"160px"
    },
  }}
        >
          <MenuItem onClick={handleClose}>View</MenuItem>
          <MenuItem onClick={handleClose}>Edit</MenuItem>
          <MenuItem onClick={handleClose}>Delete</MenuItem>
        </Menu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default EmployeeList;
