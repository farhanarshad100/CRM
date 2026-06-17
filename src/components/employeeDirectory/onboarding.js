import { Box, colors, Grid, Typography } from '@mui/material'
import React from 'react'
import style from './style'
import Image from 'next/image'
import Button from '../ui/Button'


const Onboarding = () => {
  return (
   <>
   <Box sx={{marginTop:"32px"}}>
   <Grid container spacing={3}>
    <Grid size={3}>
            <Box sx={style.manageInputSection}>
                <Typography variant='body1' sx={{fontSize:"11px", color:"#64748B", fontWeight:"800", letterSpacing:"0.55px"}}>TOTAL STRENGTH</Typography>
                <Typography variant='h3' sx={{color:"#1D4ED8", fontSize:"36px", fontWeight:"800", marginTop:"4px"}}>1,284</Typography>
                <Box sx={{display:"flex", alignItems:"center", gap:"5px", color:"#16A34A", fontSize:"10px", fontWeight:"800", marginTop:"16px"}}>
                  <span> <Image
                      src="/images/quarter.svg"
                      alt="quarter"
                      width={10}
                      height={6}
                    /></span>  +12% from last quarter
                </Box>
            </Box>
    </Grid>
     <Grid size={3}>
                   <Box sx={style.manageInputSection}>
                <Typography variant='body1' sx={{fontSize:"11px", color:"#64748B", fontWeight:"800", letterSpacing:"0.55px"}}>DEPARTMENTS</Typography>
                <Typography variant='h3' sx={{color:"#0F172A", fontSize:"36px", fontWeight:"800", marginTop:"4px"}}>14</Typography>
                <Box sx={{color:"#94A3B8", fontSize:"10px", fontWeight:"800", marginTop:"16px"}}>
          Global expansion active
                </Box>
            </Box>
     </Grid>
      <Grid size={6}>
        <Box sx={style.onboarding}>
          <Box>
            <Typography variant='h3' sx={{fontSize:"20px", fontSize:"20px", color:"#fff", fontWeight:"800", lineHeight:"28px"}}>Onboarding Queue</Typography>
            <Typography variant='body1' sx={{color:"#DBEAFE", fontSize:"14px", fontWeight:"400", lineHeight:"20px"}}>8 New hires joining this week.</Typography>
          </Box>
          <Button sx={{background:"#fff", color:"#004CCA", padding:"7px 18px", position:"relative", zIndex:"1"}}>Review Pipeline</Button>
        </Box>
      </Grid>
   </Grid>
   </Box>
   </>
  )
}

export default Onboarding
