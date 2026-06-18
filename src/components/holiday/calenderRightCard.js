import { Box, Typography } from '@mui/material'
import React from 'react'
import style from './style'
import Image from 'next/image'
import Button from '../ui/Button'
import Link from 'next/link'

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

 <Box sx={style.hightlightsCard}>
    <Typography variant='h3'>April Highlights</Typography>
    <Box sx={{display:"flex", alignItems:"center", gap:"16px", marginTop:"16px"}}>
        <Box sx={{background:"#B4C5FF", borderRadius:"8px", display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column", width:"48px", height:"48px"}}>
            <Typography variant='h4' sx={{fontSize:"12px", color:"#004CCA", fontWeight:"800"}}>03</Typography>
            <Typography variant='body1' sx={{fontSize:"10px", color:"#004CCA", fontWeight:"800"}}>APR</Typography>
        </Box>
        <Box>
            <Typography variant='h4' sx={{fontSize:"14px", color:"#181C1E", fontWeight:"800"}}>Good Friday</Typography>
            <Typography variant='body1' sx={{fontSize:"12px", color:"#424656", fontWeight:"400"}}>Mandatory Holiday</Typography>
        </Box>
        <Link href="/" style={{marginLeft:"auto"}}>
         <Image src="/images/rightarrow.svg" alt='holiday'
                    width={7}
                    height={12}
                    />
        
        </Link>
    </Box>
        <Box sx={{display:"flex", alignItems:"center", gap:"16px", marginTop:"16px"}}>
        <Box sx={{background:"#B4C5FF", borderRadius:"8px", display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column", width:"48px", height:"48px"}}>
            <Typography variant='h4' sx={{fontSize:"12px", color:"#004CCA", fontWeight:"800"}}>03</Typography>
            <Typography variant='body1' sx={{fontSize:"10px", color:"#004CCA", fontWeight:"800"}}>APR</Typography>
        </Box>
        <Box>
            <Typography variant='h4' sx={{fontSize:"14px", color:"#181C1E", fontWeight:"800"}}>Good Friday</Typography>
            <Typography variant='body1' sx={{fontSize:"12px", color:"#424656", fontWeight:"400"}}>Mandatory Holiday</Typography>
        </Box>
        <Link href="/" style={{marginLeft:"auto"}}>
         <Image src="/images/rightarrow.svg" alt='holiday'
                    width={7}
                    height={12}
                    />
        
        </Link>
    </Box>
        <Box sx={{display:"flex", alignItems:"center", gap:"16px", marginTop:"16px"}}>
        <Box sx={{background:"#B4C5FF", borderRadius:"8px", display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column", width:"48px", height:"48px"}}>
            <Typography variant='h4' sx={{fontSize:"12px", color:"#004CCA", fontWeight:"800"}}>03</Typography>
            <Typography variant='body1' sx={{fontSize:"10px", color:"#004CCA", fontWeight:"800"}}>APR</Typography>
        </Box>
        <Box>
            <Typography variant='h4' sx={{fontSize:"14px", color:"#181C1E", fontWeight:"800"}}>Good Friday</Typography>
            <Typography variant='body1' sx={{fontSize:"12px", color:"#424656", fontWeight:"400"}}>Mandatory Holiday</Typography>
        </Box>
        <Link href="/" style={{marginLeft:"auto"}}>
         <Image src="/images/rightarrow.svg" alt='holiday'
                    width={7}
                    height={12}
                    />
        
        </Link>
    </Box>
 </Box>
 </>
  )
}

export default CalenderRightCard
