"use client";

import { Box, Typography } from "@mui/material";
import style from "./style"
import Image from "next/image";

export default function Navbar() {
  return (
    <Box position="static" sx={{background:"#FFFFFF", boxShadow:"1px 1px 1px #c3c3c3", minHeight:"64px", padding:"11px 20px"}}>
      <Box sx={{ display:"flex", alignItems:"center"}}>
        <Typography sx={{fontSize:"20px", color:"#fff", fontWeight:"bold"}}>The Precision Ledger</Typography>
         <Box sx={style.searchBar}>
        <input type="text" placeholder="Search"/>
        <span>  <Image
    src="/images/search.svg"
    alt="Search"
    width={14}
    height={14}
  /></span>
      </Box>
      <Box sx={{display:"flex", marginLeft:"auto"}}>User</Box>

      </Box>
     
    </Box>
  );
}