import React from "react";
import style from "./style";
import { Box, colors, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Button from "../ui/Button";


const CompanyInfo = () => {
  return (
    <Box sx={style.companyInfo}>
      <Grid container spacing={5} sx={{alignItems:"center"}}>
        <Grid size={2}>
          <Box sx={style.innerLogo}>
            <Image
              src="/images/innerlogo.png"
              alt="inner Logo"
              width={86}
              height={80}
            />
          </Box>
        </Grid>
        <Grid size={8}>
          <Box sx={style.companyInfoDetails}>
            <Typography variant="h1">
              Trikuta Global Business Software Pvt Ltd
            </Typography>
            <Box sx={style.companyInfoInner}>
              <Box sx={style.info}>
                <span>
                  <Image
                    src="/images/Verified.svg"
                    alt="Verified"
                    width={12}
                    height={15}
                  />
                </span>
                <Typography variant="body1">Verified Entity</Typography>
              </Box>
              <Box sx={style.info}>
                <span>
                  <Image
                    src="/images/Technology.svg"
                    alt="Technology"
                    width={15}
                    height={14}
                  />
                </span>
                <Typography variant="body1">
                  Information Technology (IT)
                </Typography>
              </Box>
      
            </Box>
                    <Box sx={{display:"flex", gap:"12px", mt:3}}>
                        <Button   sx={{
    background: "#D6E4F9",
    fontSize: "11px",
    padding: "6px 16px",
    fontWeight:"700",
    color:"#0F1C2C",
    letterSpacing:"1.1px"
  }}>HQ: BANGALORE, INDIA</Button>
                    <Button   sx={{
    background: "#D6E4F9",
    fontSize: "11px",
    padding: "6px 16px",
    fontWeight:"700",
    color:"#0F1C2C",
    letterSpacing:"1.1px"
  }}>GROWTH STAGE</Button>
  

              </Box>
          </Box>
        </Grid>
        <Grid size={2}>
            <Button   sx={{
    background: "#004CCA",
    fontSize: "14px",
    padding: "12px 30px",
    fontWeight:"700",
    color:"#fff",
    letterSpacing:"1.1px",
    width:"100%",
  }}>Edit
Profile</Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CompanyInfo;
