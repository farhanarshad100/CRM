import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import style from './style'
import Image from 'next/image'
import Button from '../ui/Button'

const HolidayTop = () => {
  return (
<Box sx={{marginBottom:"32px"}}>
    <Grid container spacing={3}>
        <Grid size={4}>
            <Box sx={style.holidayCard}>
                <Box sx={style.holiDetails}>
                    <Typography variant='body1'>Total Holidays this Month</Typography>
                    <Typography variant='h3'>04</Typography>
                </Box>
                <Box sx={style.iconSection}>
                    <Image src="/images/calenderblue.svg" alt='holiday'
                    width={22}
                    height={25}
                    />
                </Box>
            </Box>
        </Grid>
     <Grid size={4}>
            <Box sx={style.holidayCard}>
                <Box sx={style.holiDetails}>
                    <Typography variant='body1'>Upcoming Mandatory</Typography>
                    <Typography variant='h3' style={{color:"#A12D01"}}>02</Typography>
                </Box>
                <Box sx={style.iconSection}>
                    <Image src="/images/question2.svg" alt='Upcoming'
                    width={5}
                    height={22}
                    />
                </Box>
            </Box>
        </Grid>
  <Grid size={4}>
            <Box sx={{...style.holidayCard, ...style.nextHolidayCard}}>
                <Box sx={style.holiDetails}>
                    <Typography variant='body1'>Upcoming Mandatory</Typography>
                    <Typography variant='h3'>03 Days</Typography>
                </Box>
          <Button sx={{background:"rgb(255 255 255 / 20%)", padding:"8px 16px", color:"#FFFFFF", fontSize:"14px", fontWeight:"800"}}>View List</Button>
            </Box>
        </Grid>
    </Grid>
</Box>
  )
}

export default HolidayTop
