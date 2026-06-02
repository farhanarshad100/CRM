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
const DailyData = () => {
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
                borderBottom: "1px solid #f3f3f3",
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
          justifyContent: "center",
          mt: 2,
        }}
      >
        <Button
          variant="text"
          sx={{
            textTransform: "none",
            fontWeight: 600,
          }}
        >
          VIEW FULL HISTORY
        </Button>
      </Box>
    </>
  );
};

export default DailyData;
