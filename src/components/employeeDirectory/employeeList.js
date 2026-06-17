"use client";

import React, { useState } from "react";
import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Pagination,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import style from "./style";

const initialEmployees = [
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
    id: "EMP-4093",
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
    id: "#EMP-43923",
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
    id: "#EMP-4332",
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
];

const EmployeeList = () => {
  const [employees, setEmployees] = useState(initialEmployees);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const handleClick = (event, employee) => {
    setAnchorEl(event.currentTarget);
    setSelectedEmployee(employee);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = () => {
    if (!selectedEmployee) return;

    setEmployees((prev) =>
      prev.filter((item) => item.id !== selectedEmployee.id)
    );

    handleClose();
  };

  return (
    <>
      <TableContainer
        component={Paper}
        sx={{
          marginTop: "32px",
          boxShadow: "none",
        }}
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
                borderBottom: "1px solid #f5f5f5",
                fontSize:"14px;",
                fontWeight:"400"
              },
            }}
          >
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
                  <span
                    style={{
                      background: "rgb(0 76 202 / 10%)",
                      textAlign: "center",
                      height: "25px",
                      width: "25px",
                      borderRadius: "12px",
                      color: "#004CCA",
                      fontSize: "10px",
                      display: "inline-block",
                      fontWeight: "600",
                      lineHeight: "25px",
                      marginRight: "8px",
                    }}
                  >
                    {employee.managerDetails.initials}
                  </span>

                  {employee.managerDetails.name}
                </TableCell>

                <TableCell>{employee.dob}</TableCell>

                <TableCell>
                  <IconButton
                    onClick={(e) => handleClick(e, employee)}
                  >
                    <MoreVertIcon
                      sx={{
                        color: "#94A3B8",
                        fontSize: "30px",
                      }}
                    />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Single Menu */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        sx={{
          ...style.menuRow,
          "& .MuiPaper-root": {
            ml: -12,
            width: "160px",
            background: "#fff",
            boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
          },
          "& .MuiMenu-list": {
            py: 0,
          },
        }}
      >
        <MenuItem onClick={handleClose}>View</MenuItem>
        <MenuItem onClick={handleClose}>Edit</MenuItem>
        <MenuItem onClick={handleDelete}>Delete</MenuItem>
      </Menu>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mt: 2,
        }}
      >
        <Typography
          variant="body1"
          sx={{
            color: "#424656",
            fontWeight: "600",
            fontSize: "12px",
          }}
        >
          Showing {employees.length} employees
        </Typography>

        <Pagination
          count={4}
          variant="outlined"
          shape="rounded"
          sx={{
            "& .MuiPaginationItem-root.Mui-selected": {
              backgroundColor: "#1565c0",
              color: "#fff",
              borderColor: "#1565c0",
            },
          }}
        />
      </Box>
    </>
  );
};

export default EmployeeList;