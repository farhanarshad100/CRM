import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import style from "./style";
import Image from "next/image";

const cardDetails =[
    {
        id:1,
        icon:"/images/updateinfo.svg",
        title:"Update Info",
        description: "Request changes to your designation or personal details.",
    },
    {
        id:2,
        icon:"/images/updateinfo2.svg",
        title:"Report Loss",
        description:"Immediately deactivate and request a new security ID card."
    },
    {
        id:3,
        icon:"/images/updateinfo3.svg",
        title:"Custom Brand",
        description:"Access letterheads and digital brand assets."
    }
]
const UpdateInfoCard = () =>{
    return(
        <>
        <Grid container spacing={2}>

            {cardDetails.map((listIteam)=>(
                      <Grid size={4} key={listIteam.id}>
                <Box sx={style.updateInfoCard}>
                    <Box sx={style.iconBox}>
                        <Image src={listIteam.icon} alt="updateinfo" 
                        width={18}
                        height={16}
                        />
                    </Box>
                          <Box sx={style.updateInnderDetails}>
                            <h2>{listIteam.title}</h2>
                            <Typography variant="body1">{listIteam.description}</Typography>
</Box>
</Box>
            </Grid>
            ))}
  
        </Grid>

        </>
    )
}
export default UpdateInfoCard