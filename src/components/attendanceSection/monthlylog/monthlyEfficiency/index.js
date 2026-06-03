import React from 'react'
import style from './style'
import { Box, Button, Grid, List, ListItem, Typography } from '@mui/material'
import Link from 'next/link'
import Image from 'next/image'
const MonthlyEfficiency = () => {
  return (
<Box sx={style.monthlyEfficiency}>
 <Grid container spacing={3}>
    <Grid size={8} >
    <Box sx={style.monthlyEfficiencyInner}>
        <Typography variant='h4'>Monthly Efficiency Recap</Typography>
        <Typography variant='body1'>Your attendance consistency is 94% higher than last month. 3<br/>
anomalies detected require resolution to finalize the payroll cycle.</Typography>
<Button sx={{background:"#fff", color:"#0062FF"}}>Resolve Anomalies</Button>
  <Button sx={{background:"#0062FF", color:"#fff", border:"1px solid #fff3"}}>View Leave Balance</Button>
    </Box>
</Grid>
 <Grid size={4} >
<Box sx={{...style.monthlyEfficiencyInner, ...style.monthlyEfficiencyInnerRight}}>
<Typography variant='h6'>PENDING APPROVALS</Typography>
<List>
    <ListItem><span style={{background:"#A12D01", height:"8px", width:"8px", borderRadius:"100px"}}></span>2 OT Regularization</ListItem>
    <ListItem><span style={{background:"#F59E0B", height:"8px", width:"8px", borderRadius:"100px"}}></span>1 Late Entry Waiver</ListItem>
</List>
<Link href="/">Go to Approvals <Image src="/images/approval.svg"
    alt='approval'
    width={8}
    height={8}
    
/>
 </Link>
</Box>
</Grid>
</Grid>
</Box>
  )
}

export default MonthlyEfficiency
