import React from 'react'
import style from "./style"
import { Box, Grid, Typography } from '@mui/material'
import Link from 'next/link'
import Image from 'next/image'
import ChatHr from '../chathr'
const DashboardRight = () => {
  return (
    <Box sx={style.dashboardRight}>
      <Box sx={style.topSection}>
        <Box>
          <Typography variant='h2'>Employee Services</Typography>
          <Typography variant='body1'>Everything you need to manage your professional life.</Typography>

        </Box>
        <Link href="/services" style={{
          color: "#004CCA",
          fontSize: "12px",
          fontWeight: "700",
          padding: "8px"
        }}>
          VIEW ALL SERVICES
        </Link>
      </Box>

      <Grid container spacing={3}>
        <Grid size={3}>
          <Box sx={style.userCard}>
            <Box sx={style.userDetails}>
              <Image
                src="/images/Attendance.svg"
                alt="Search"
                width={18}
                height={18}
                priority
                style={{ display: "block" }}
              />
            </Box>
            <Typography variant='h4'>Attendance</Typography>
            <Typography variant='body1'>Logs & requests</Typography>
          </Box>
        </Grid>
       <Grid size={3}>
          <Box sx={style.userCard}>
            <Box sx={style.userDetails} style={{background:"#EEF2FF"}}>
              <Image
                src="/images/Leave.svg"
                alt="Search"
                width={18}
                height={18}
                priority
                style={{ display: "block" }}
              />
            </Box>
            <Typography variant='h4'>Leave</Typography>
            <Typography variant='body1'>Balance & apply</Typography>
          </Box>
        </Grid>
         <Grid size={3}>
          <Box sx={style.userCard}>
            <Box sx={style.userDetails} style={{background:"#F0FDF4"}}>
              <Image
                src="/images/Payroll.svg"
                alt="Search"
                width={18}
                height={18}
                priority
                style={{ display: "block" }}
              />
            </Box>
            <Typography variant='h4'>Attendance</Typography>
            <Typography variant='body1'>Logs & requests</Typography>
          </Box>
        </Grid>
         <Grid size={3}>
          <Box sx={style.userCard}>
            <Box sx={style.userDetails} style={{background:"#FAF5FF"}}>
              <Image
                src="/images/Directory.svg"
                alt="Search"
                width={18}
                height={18}
                priority
                style={{ display: "block" }}
              />
            </Box>
            <Typography variant='h4'>Directory</Typography>
            <Typography variant='body1'>Search colleagues</Typography>
          </Box>
        </Grid>
                 <Grid size={3}>
          <Box sx={style.userCard}>
            <Box sx={style.userDetails} style={{background:"#FFF7ED"}}>
              <Image
                src="/images/idcard.svg"
                alt="Search"
                width={18}
                height={18}
                priority
                style={{ display: "block" }}
              />
            </Box>
            <Typography variant='h4'>ID Card</Typography>
            <Typography variant='body1'>Visiting & digital ID</Typography>
          </Box>
        </Grid>
                 <Grid size={3}>
          <Box sx={style.userCard}>
            <Box sx={style.userDetails} style={{background:"#FEF2F2"}}>
              <Image
                src="/images/calender.svg"
                alt="Search"
                width={18}
                height={18}
                priority
                style={{ display: "block" }}
              />
            </Box>
            <Typography variant='h4'>Holiday Calendar</Typography>
            <Typography variant='body1'>2024 Schedule</Typography>
          </Box>
        </Grid>
                 <Grid size={3}>
          <Box sx={style.userCard}>
            <Box sx={style.userDetails} style={{background:"#ECFEFF"}}>
              <Image
                src="/images/myprofile.svg"
                alt="Search"
                width={18}
                height={18}
                priority
                style={{ display: "block" }}
              />
            </Box>
            <Typography variant='h4'>My Profile</Typography>
            <Typography variant='body1'>Personal data</Typography>
          </Box>
        </Grid>
                 <Grid size={3}>
          <Box sx={style.userCard}>
            <Box sx={style.userDetails} style={{background:"#F8FAFC"}}>
              <Image
                src="/images/chart.svg"
                alt="Search"
                width={18}
                height={18}
                priority
                style={{ display: "block" }}
              />
            </Box>
            <Typography variant='h4'>Org Chart</Typography>
            <Typography variant='body1'>Team hierarchy</Typography>
          </Box>
        </Grid>
      </Grid>

      <ChatHr/>

    </Box>
  )
}

export default DashboardRight
