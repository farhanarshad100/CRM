import { Box, Typography } from '@mui/material'
import React from 'react'
import style from './style'
import Image from 'next/image'
import Button from '../ui/Button'

const CalenderRightCard = () => {
  return (
 <>
 <Box sx={style.holidayCardRight}>
  <Box sx={{display:"flex", display:"flex",
justifyContent:"space-between",
alignItems:"center", marginBottom:"24px"}}>
    <Box sx={style.selectDate}>
        <Typography variant='body1'>Selected Date</Typography>
        <Typography variant='h2'>19 Apr 2026</Typography>
        <Typography variant='h5'>Sunday</Typography>
    </Box>
              <Box sx={style.iconSection} style={{background:"#E5E9EB"}}>
                    <Image src="/images/calenderblue.svg" alt='holiday'
                    width={22}
                    height={25}
                    />
                </Box>
  </Box>
  <Box sx={style.status}>
    <Typography variant='h6'>STATUS</Typography>
    <Box sx={{display:"flex", alignItems:"center", gap:"10px", marginTop:"4px"}}>
        <span>&nbsp;</span>
        <Typography variant='h4'>Weekend Break</Typography>
    </Box>
  </Box>
    <Box sx={style.status}>
    <Typography variant='h6'>DESCRIPTION</Typography>
        <Typography variant='body1'>No specific holidays observed.
Standard weekend policy
applies.</Typography>
  </Box>
  <Button sx={{width:"100%", color:"#566475", fontSize:"16px", background:"#D3E1F6"}}>Add Reminder</Button>
 </Box>
 </>
  )
}

export default CalenderRightCard
