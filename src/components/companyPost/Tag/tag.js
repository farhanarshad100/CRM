import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import style from "./style";

const Tag = () =>{
    const [tag, settag] = useState ("")
    return(
        <Box sx={style.feedUpdate}>
       <Typography variant="h6">TRENDING TAGS</Typography>
        </Box>
    )
}
export default Tag