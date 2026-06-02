import DashboardLeft from '@/components/dashboardSection/dashboardLeft'
import DashboardRight from '@/components/dashboardSection/dashboardRight'
import { Box } from '@mui/material'
import React from 'react'

const DashboardPage = () => {
  return (
 <Box sx={{display:"flex", gap:"24px"}}>
  <DashboardLeft/>
  <DashboardRight/>
 </Box>
  )
}

export default DashboardPage
