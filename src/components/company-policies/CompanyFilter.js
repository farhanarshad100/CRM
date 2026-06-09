import { Box, Typography } from '@mui/material'
import React from 'react'
import style from './style'
import Button from '../ui/Button'
import Image from 'next/image'

const CompanyFilter = () => {
  return (
<Box sx={style.companyFilter}>
    <Box sx={style.companyPolicies}>
       <Typography variant='h1'> Company Policies</Typography>
<Typography variant='body1'>Access and manage the regulatory documents, ethical guidelines, and operational<br/>
frameworks of Precision Ledger.</Typography>
    </Box>
   <Button sx={{display:"flex", gap:"10px", alignItems:"center", background:"#004CCA", padding:"15px 20px", color:"#fff"}}><Image src="/images/upload.svg" alt='upload'
   width={16}
   height={20}
   /> Upload New Policy</Button>
</Box>
  )
}

export default CompanyFilter
