"use client"

import { Box, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import style from "./style";
import Button from "../ui/Button";
import Image from "next/image";



const EmployeeManage = () => {
      const [select1, setSelect1] = useState("");
  const [select2, setSelect2] = useState("");

  return (
    <>
    <Box sx={style.manageDetails}>
      <Box>
        <Typography variant="h3">Employee Directory</Typography>
        <Typography variant="body1">
          Manage and view the core personnel database of the organization.
        </Typography>
      </Box>
      <Button
        sx={{
          background: "#FFFFFF",
          color: "#334155",
          fontWeight: "600",
          border: "1px solid #ebebeb",
          gap: "8px",
          display: "flex",
          alignItems: "center",
          padding: "10px 20px",
        }}
      >
        <Image
          src="/images/downloadicon.svg"
          alt="office"
          width={13}
          height={13}
        />
        Export CSV
      </Button>
    </Box>
    <Box sx={style.manageInputSection}>
<Grid container spacing={3}>
    <Grid size={4}>
       <Typography sx={{ mb: 1, color:"#64748B", fontSize:"11px", fontWeight:"800" }}>GLOBAL SEARCH</Typography>
<Box sx={{position:"relative"}}>
  <TextField
  fullWidth
  placeholder="Name, ID, or Designation..."
  variant="outlined"

/>
<span style={{position:"absolute", top:"13px", left:"13px"}}>
     <Image
          src="/images/search2.svg"
          alt="office"
          width={18}
          height={24}
        />
</span>
</Box>
    </Grid>
    <Grid size={8}>
            <Grid container spacing={3}>
      
      {/* Select 1 */}
      <Grid size={4}>
        <Typography sx={{ mb: 1, color:"#64748B", fontSize:"11px", fontWeight:"800" }}>DEPARTMENT</Typography>
        <FormControl fullWidth
        >
           
          <Select
            value={select1}
            onChange={(e) => setSelect1(e.target.value)}
            displayEmpty
          >
            <MenuItem value="">All Departments</MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      {/* Select 2 */}
      <Grid size={4}>

        <Typography sx={{ mb: 1, color:"#64748B", fontSize:"11px", fontWeight:"800" }}>WORK LOCATION</Typography>
        <FormControl fullWidth>
         
          <Select
            value={select2}
           displayEmpty
            onChange={(e) => setSelect2(e.target.value)}
          >
            <MenuItem value="">Global</MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      {/* Select 3 */}
      <Grid size={4}>
        <Typography sx={{ mb: 1, color:"#64748B", fontSize:"11px", fontWeight:"800" }}>&nbsp;</Typography>
    <Button sx={{width:"100%", background:"#D3E1F6", padding:"10px 24px", height:"44px", color:"#566475", fontSize:"16px", fontWeight:"800", display:"flex", alignItems:"center", gap:"10px" }}>
        
        <Image
          src="/images/iconFilter.svg"
          alt="office"
          width={15}
          height={11}
        />Advanced</Button>
      </Grid>

    </Grid>
    </Grid>
</Grid>
    </Box>
    </>
  );
};

export default EmployeeManage;
