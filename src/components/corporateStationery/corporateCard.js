import { Box, List, ListItem, Typography } from "@mui/material";
import React from "react";
import style from "./style";
import Image from "next/image";

const CorporateCard = () => {
  return (
<>
<Box sx={style.frontCardDetails}>
  <span></span>
  <Typography variant="body1" sx={{fontSize:"12px", color:"#424656", fontWeight:"bold"}}>FRONT VIEW</Typography>
</Box>

    <Box sx={style.frontCard}>
      <Box sx={style.coverFront}>
        <Typography variant="body1">KNOWBUILD</Typography>
        <Typography variant="h3">PRECISION CORP</Typography>
        <Box sx={style.cardProfile}>
                   <Image
                          src="/images/profile.jpg"
                          alt="Search"
                          width={120}
                          height={120}
                          priority
                          style={{ display: "block" }}
                        />
        </Box>
      </Box>
      
      <Box sx={style.boxInnerPart}>
      <Typography variant="h4">Mohd Ansari</Typography>
      <Typography variant="body1">Senior Backend Engineer</Typography>

      <Box sx={style.lineHr}></Box>

      <List sx={style.profileList}>
        <ListItem>EMP ID <span>ID: 016</span></ListItem>
        <ListItem>DEPARTMENT<span>Core Infrastructure</span></ListItem>
        <ListItem>JOINING DATE <span>12 Feb 2022</span></ListItem>
      </List>

      </Box>
    </Box>
    </>
  );
};

export default CorporateCard;
