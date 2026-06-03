import { Box, Grid, LinearProgress, Typography } from '@mui/material'
import React from 'react'
import style from './style'
import Image from 'next/image'

const CompanyCulture = () => {
  return (
 <Box sx={style.CompanyCulture}>
    <Grid container spacing={2}>
        <Grid size={9}>
<Image src="/images/Visual-Accent-Card.jpg"
alt='work'
  width={960}
  height={225}
/>
</Grid>
     <Grid size={3}>
    <Box sx={style.activeEmployees}>
        <Typography variant='h1'>250+</Typography>
        <Typography variant='body1'>ACTIVE EMPLOYEES</Typography>
       <hr
  style={{
    margin: "39px 0",
    border: "none",
    borderTop: "1px solid #195ecf",
  }}
/>

<Box>
    <Box sx={style.processBarSection}>
    <Typography variant='body1'>RETENTION RATE</Typography>
     <Typography variant='body1'>94%</Typography>
    </Box>
   <LinearProgress
  variant="determinate"
  value={94}
  sx={{
    height: 8,
    borderRadius: 5,
    backgroundColor: "#e3f2fd",
    marginTop:"20px",
    "& .MuiLinearProgress-bar": {
      backgroundColor: "#195ecf",
      borderRadius: 5,
    },
  }}
/> 
</Box>
    </Box>
</Grid>

</Grid>
 </Box>
  )
}

export default CompanyCulture
