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
        icon:"/images/updateinfo.svg",
        title:"Update info 2",
        description:"description2"
    },
    {
        id:3,
        icon:"/images/updateinfo.svg",
        title:"Update info 3",
        description:"description 3"
    }
]
const UpdateInfoCard = () =>{
    return(
        <>
        <Grid container spacing={2}>


{cardDetails.map((iteam) =>(
<p>Price</p>
))}
            <Grid size={4}>
                <Box sx={style.updateInfoCard}>
                    <Box sx={style.iconBox}>
                        <Image src="/images/updateinfo.svg" alt="updateinfo" 
                        width={18}
                        height={16}
                        />
                    </Box>
                          <Box sx={style.updateInnderDetails}>
                            <h2>Update Info</h2>
                            <Typography variant="body1">Request changes to your designation or
personal details.</Typography>
</Box>
</Box>
            </Grid>
        </Grid>

        </>
    )
}
export default UpdateInfoCard