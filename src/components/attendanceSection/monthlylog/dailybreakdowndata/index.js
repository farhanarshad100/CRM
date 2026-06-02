import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Button,
  Typography,
  Pagination,
} from "@mui/material";
const rows = [
  {
    id: "1",
    time: "09:02:14 AM",
    type: "CLOCK IN",
    ip: "192.168.1.45",
    location: "Main Headquarters - Hall A",
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
const DailyBreakDowndata = () => {
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
                borderTop:"1px solid #c2c6d94f",
                fontSize: "15px",
                color:"#424656",
                borderBottom:"1px solid #c2c6d94f"
              },
            }}
          >
            <TableRow>
              <TableCell>SL NO</TableCell>
              <TableCell>TIME</TableCell>
              <TableCell>TYPE</TableCell>
              <TableCell>IP ADDRESS</TableCell>
              <TableCell>LOCATION</TableCell>
              <TableCell>STATUS</TableCell>
            </TableRow>
          </TableHead>

          <TableBody
            sx={{
              "& td": {
                fontSize: "13px",
                color: "#979696",
                fontWeight: "500",
                borderBottom: "1px solid #c2c6d94f",
              },
            }}
          >
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.time}</TableCell>
                <TableCell>
                  <span
                    style={{
                      background:
                        row.type === "STYTEM CHECK" ? "#e1e1e1" : "#eff6ff",
                      color:
                        row.type === "STYTEM CHECK" ? "#686868" : "#001bd4",
                      padding: "6px 15px",
                      borderRadius: "30px",
                      width: "150px",
                      display: "block",
                      textAlign: "center",
                    }}
                  >
                    {row.type}
                  </span>
                </TableCell>
                <TableCell>{row.ip}</TableCell>
                <TableCell>{row.location}</TableCell>
                <TableCell ><span style={{color:"green"}}>{row.status}</span></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mt: 2,
        }}
      >
        <Typography variant="body1" sx={{color:"#424656", fontWeight:"600", fontSize:"12px"}}>Showing 1-31 of 31 days</Typography>
    <Pagination
  count={2}
  variant="outlined"
  shape="rounded"
  sx={{
    "& .MuiPaginationItem-root.Mui-selected": {
      backgroundColor: "#1565c0",
      color: "#fff",
      borderColor: "#1565c0",
    },
    "& .MuiPaginationItem-root.Mui-selected:hover": {
      backgroundColor: "#1565c0",
    },
  }}
/>
      </Box>
    </>
  );
};

export default DailyBreakDowndata;
