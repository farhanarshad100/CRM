import { Box, Typography } from "@mui/material";
import React from "react";
import style from "./style";

const CorporateCard = () => {
  return (
    <Box sx={style.frontCard}>
      <Box sx={style.coverFront}>
        <Typography variant="body1">KNOWBUILD</Typography>
        <Typography variant="h3">PRECISION CORP</Typography>
        <Box sx={style.cardProfile}></Box>
      </Box>
      
      <Typography variant="h4">Mohd Ansari</Typography>
      <Typography variant="body1">Senior Backend Engineer</Typography>
    </Box>
  );
};

export default CorporateCard;
