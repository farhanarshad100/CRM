import { Box, colors, Typography } from '@mui/material'
import React from 'react'
import style from './style'
import Button from '../ui/Button'

const LocationTop = () => {
  return (
  <Box sx={style.locationTopSection}>
 <Box sx={style.locationLeft}>
    <Typography variant='subtitle1'>WORKSPACE IDENTIFICATION</Typography>
        <Typography variant='h3'>Office Locations</Typography>
        <Typography variant='body1'>Manage and view the physical presence of knowbuild Business<br/>
Software Pvt Ltd across different administrative hubs.</Typography>
 </Box>
  <Box sx={style.locationRight}>
    <Button sx={{
        border:"1px solid #C2C6D9",
        background:"#fff",
        padding:"10px 20px",
             fontWeight:"600",
    }}>Download PDF</Button>
     <Button sx={{
        background:"#004CCA",
        padding:"10px 20px",
         fontWeight:"600",
         color:"#fff",
    }}>Download PDF</Button>
  </Box>
  </Box>
  )
}

export default LocationTop
