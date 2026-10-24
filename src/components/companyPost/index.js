import React from "react";
import UserProfile from "./userProfile";
import { Grid } from "@mui/material";
const CompanyPost = () =>{
return(
    <>
    <Grid container spacing={2}>
<Grid size={2.5}><UserProfile/></Grid>
<Grid size={7}><UserProfile/></Grid>
<Grid size={2.5}><UserProfile/></Grid>
    </Grid>

    </>
)
}
export default CompanyPost