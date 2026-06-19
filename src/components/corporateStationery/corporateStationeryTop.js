import { Box, Typography } from '@mui/material'
import React from 'react'
import style from './style'
import Button from '../ui/Button'


const CorporateStationeryTop = () => {
  return (
<Box sx={style.corporateStationery}>
    <Box sx={style.innerDetails}>
<Typography variant='h4'>Corporate Stationery</Typography>
<Typography variant='body1'>Preview and download your official company identification<br/>
and business cards for professional use.</Typography>
</Box>
<Box>
    <Button>Request Print</Button>
    <Button>Download PDF</Button>
</Box>
</Box>
  )
}

export default CorporateStationeryTop
