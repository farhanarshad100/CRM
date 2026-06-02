import { Box, List, ListItem, Typography } from '@mui/material'
import React from 'react'
import style from './style'
import Image from 'next/image'

const DailyBreakdown = () => {
  return (
<Box sx={style.dailyBreakdown}>
    <Box sx={style.dailyInnerDetails}>
        <span>
            <Image src="/images/dailybreakdwon.svg"
            alt='daily breakdown'
            width={18}
            height={18}
             style={{display:"block"}}/>
        </span>
        <Typography variant='h4'>Daily Breakdown — October 2023</Typography>
    </Box>
    <Box sx={style.presentSection}>
        <List>
            <ListItem><span style={{background:"#10B981", height:"8px", width:"8px", borderRadius:"100px"}}></span>P - Present</ListItem>
            <ListItem><span style={{background:"#EF4444", height:"8px", width:"8px", borderRadius:"100px"}}></span>AN - Anomaly</ListItem>
            <ListItem><span style={{background:"#CBD5E1", height:"8px", width:"8px", borderRadius:"100px"}}></span>WO - Weekly Off</ListItem>
        </List>
    </Box>
</Box>
  )
}

export default DailyBreakdown
