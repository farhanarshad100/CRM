import { Box, List, ListItem, Typography } from "@mui/material";
import React from "react";
import style from "./style";
import Image from "next/image";

const CorporateCard2 = () => {
  return (
<>
<Box sx={style.frontCardDetails}>
  <span></span>
  <Typography variant="body1" sx={{fontSize:"12px", color:"#424656", fontWeight:"bold"}}>BACK VIEW</Typography>
</Box>

    <Box sx={{...style.frontCard, ...style.frontCard2}}>
      <Box sx={style.coverBack}>
        <Typography variant="h3">SAFETY INFORMATION</Typography>
   <Box sx={style.innerBox}>
    <Box sx={style.backsideInner}>
      <Typography variant="h5">BLOOD GROUP</Typography>
      <Typography variant="h3">O+</Typography>
    </Box>

     <Box sx={{...style.backsideInner, ...style.backsideInner2}} >
      <Typography variant="h5">EMERGENCY NO</Typography>
      <Typography variant="h3">+91 89604
62360</Typography>
    </Box>

   </Box>
       <Box sx={style.officeAddress}>
      <Typography variant="h6">OFFICE ADDRESS</Typography>
      <Typography variant="body1">knowbuild Business Software Pvt Ltd
B28, Phase 1, Okhla Industrial Estate,
New Delhi, India - 110020</Typography>
    </Box>
    <Box sx={style.officeAddress}>
            <Typography variant="h6">TERMS OF USE</Typography>
      <Typography variant="body1" style={{color:"#424656", fontWeight:"normal"}}>This identity card is property of knowbuild Business Software
Pvt Ltd. If found, please return to the office mentioned above.
Use of this card is governed by the company's internal security
policies.</Typography>
    </Box>

    <Box sx={style.officeAddress}>
      <Box sx={style.officeAddressInner}>
        <Box sx={style.author}>
          <Typography variant="body1">AUTHORIZED SIGNATORY</Typography>
          <span>        <Image
                    src="/images/Signature.png"
                    alt="Export"
                    width={32}
                    height={32}
                  /></span>
        </Box>
          <span>        <Image
                    src="/images/Qr.jpg"
                    alt="Export"
                    width={64}
                    height={64}
                  /></span>
      </Box>
    </Box>
      </Box>
      
      

    </Box>
    </>
  );
};

export default CorporateCard2;
