import React from "react";
import UserProfile from "./userProfile/UserProfile";
import { Grid } from "@mui/material";
import FeedFilter from "./userProfile/FeedFilter";
import Login from "./Login/login";
const CompanyPost = () =>{
return(
    <>
    <Grid container spacing={2}>
<Grid size={2.2}>
    <UserProfile/>
    <FeedFilter/>
    </Grid>
<Grid size={7.6}><Login/></Grid>
<Grid size={2.2}><UserProfile/></Grid>
    </Grid>

    </>
)
}
export default CompanyPost