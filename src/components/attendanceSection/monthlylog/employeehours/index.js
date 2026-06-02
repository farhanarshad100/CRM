import { Box, Button, duration, Grid, Typography } from "@mui/material";
import React from "react";
import style from "./style";
import Image from "next/image";

const EmployeeHours = () => {
  return (
    <Box sx={{ marginTop: "24px" }}>
      <Grid container spacing={3}>
        <Grid size={3}>
          <Box sx={style.employeeHours}>
            <Box sx={style.employeeInner}>
              <Box sx={style.workIcon}>
                <Image
                  src="/images/totalwork.svg"
                  alt="total work"
                  width={20}
                  height={20}
                />
              </Box>
              <Button>ON TRACK</Button>
            </Box>
            <Typography variant="body1">WORK DURATION</Typography>
            <Typography variant="h3">
              08:42 <span>/ 31</span>
            </Typography>
          </Box>
        </Grid>
          <Grid size={3}>
          <Box sx={style.employeeHours}>
            <Box sx={style.employeeInner}>
              <Box sx={style.workIcon}>
                <Image
                  src="/images/duration.svg"
                  alt="total work"
                  width={20}
                  height={20}
                />
              </Box>
            
            </Box>
            <Typography variant="body1">Work Duration (Hrs)</Typography>
            <Typography variant="h3">
              176.5 <span>/ Goal: 160h</span>
            </Typography>
          </Box>
        </Grid>
            <Grid size={3}>
          <Box sx={style.employeeHours}>
            <Box sx={style.employeeInner}>
              <Box sx={style.workIcon} style={{background:"#FFFBEB"}}>
                <Image
                  src="/images/Overtime.svg"
                  alt="total work"
                  width={20}
                  height={20}
                />
              </Box>
            
            </Box>
            <Typography variant="body1">Total Overtime</Typography>
            <Typography variant="h3">
              16.5h
            </Typography>
          </Box>
        </Grid>
         <Grid size={3}>
          <Box sx={style.employeeHours}>
            <Box sx={style.employeeInner}>
              <Box sx={style.workIcon} style={{background:"#FEF2F2"}}>
                <Image
                  src="/images/alert.svg"
                  alt="total work"
                  width={20}
                  height={20}
                />
              </Box>
              <Button sx={{background:"#f6eae6 !important", color:"#a12d01 !important"}}>ACTION REQUIRED</Button>
            </Box>
            <Typography variant="body1">Total Anomalies</Typography>
            <Typography variant="h3" sx={{color:"#a12d01 !important"}}>
              03
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default EmployeeHours;
