import { Box, Button, Typography } from "@mui/material";
import React from "react";
import style from "./style";
import Image from "next/image";
const Follow = () => {
    return(
       <Box sx={style.userProfile}>
        <Typography variant="h4" sx={{color:"#424656", fontSize:"12px", fontWeight:"bold"}}>COLLEAGUES TO
FOLLOW</Typography>

{[1, 2, 3].map((item) => (
  <Box sx={style.followerList} key={item}>
    <Box sx={style.follewerProfile}>
      <Image
        src="/images/profile.jpg"
        alt="Search"
        width={32}
        height={32}
        priority
        style={{ display: "block" }}
      />

      <Box>
        <Typography variant="h5" sx={{ fontSize: "12px", fontWeight: "bold", color: "#181C1E" }}>
          Rumit Verma
        </Typography>

        <Typography variant="h6" sx={{ fontSize: "11px", fontWeight: "400", color: "#424656" }}>
          Finance
        </Typography>
      </Box>
    </Box>

    <Button variant="text">Follow</Button>
  </Box>
))}
       </Box>
    )
}
export default Follow