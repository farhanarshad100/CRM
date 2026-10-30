import React from "react";
import UserProfile from "./userProfile/UserProfile";
import { Grid } from "@mui/material";
import FeedFilter from "./userProfile/FeedFilter";
import Login from "./Login/login";
import Community from "./community";
import Tag from "./Tag/tag";
const CompanyPost = () =>{
return(
    <>
    <Grid container spacing={2}>
<Grid size={3}>
    <UserProfile/>
    <FeedFilter/>
    </Grid>
<Grid size={6}><Community/></Grid>
<Grid size={3}><Tag/></Grid>
    </Grid>

    </>
)
}
export default CompanyPost