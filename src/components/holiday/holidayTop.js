import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import style from './style'
import Image from 'next/image'

const HolidayTop = () => {
  return (
<Box>
    <Grid container spacing={3}>
        <Grid size={4}>
            <Box sx={style.holidayCard}>
                <Box>
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
         <Grid size={4}>one</Grid>
          <Grid size={4}>one</Grid>
    </Grid>
</Box>
  )
}

export default HolidayTop
