import React from 'react'
import style from "./style";
import { Box, List, ListItem, Typography } from '@mui/material';
import Image from 'next/image';
const DashboardLeft = () => {
  return (
    <Box sx={style.LeftSide}>
      <Box sx={style.cardBox}>
        <Box sx={style.innerBox}>
          <Box sx={style.sideBarLogo}><Image
            src="/images/leftside.png"
            alt="Search"
            width={68}
            height={68}
            priority
            style={{ display: "block" }}
          /></Box>
        </Box>

        <Box sx={{ pt: 5, pb: 3, textAlign: "center" }}>
          <Box sx={style.details}>
            <Typography variant='h4'>knowbuild</Typography>
            <Typography variant='body1'>INNOVATION LABS</Typography>
          </Box>
          <Box sx={style.profileBottom}>
            <List>
              <ListItem>
                <Image
                  src="/images/global.svg"
                  alt="Search"
                  width={15}
                  height={15}
                  style={{ display: "block" }}
                />
              </ListItem>
              <ListItem>
                <Image
                  src="/images/share.svg"
                  alt="Search"
                  width={15}
                  height={15}
                  style={{ display: "block" }}
                />
              </ListItem>
              <ListItem>
                <Image
                  src="/images/chat.svg"
                  alt="Search"
                  width={15}
                  height={15}
                  style={{ display: "block" }}
                />
              </ListItem>
            </List>
          </Box>
        </Box>
      </Box>

          <Box sx={{...style.cardBox, ...style.cardBoxP3, }}>
            <Typography variant='h5'>Tasks &
Notifications</Typography>


<Box sx={style.infoDetails}>
    <Box sx={style.notification}>
      <Typography variant='body1'>Education details
are pending
update.</Typography>
<Typography variant='h6'>UPDATE NOW</Typography>
    </Box>
    <Box sx={style.policySection}>
      <Box sx={style.iconBox}><Image
            src="/images/inbox.svg"
            alt="Search"
            width={15}
            height={12}
            priority
            style={{ display: "block" }}
          /></Box>
          <Box sx={style.rightInfo}>
            <Typography variant='h3'>New Policy
Update</Typography>
<Typography variant='body1'>Please review the
updated leave policy
for 2024.</Typography>
          </Box>
    </Box>
    <Box sx={style.policySection}>
      <Box sx={{...style.iconBox, ...style.iconBoxBg}}>
        <Image
            src="/images/pay.svg"
            alt="Search"
            width={15}
            height={15}
            priority
            style={{ display: "block" }}
          /></Box>
          <Box sx={style.rightInfo}>
            <Typography variant='h3'>Payroll
Processed</Typography>
<Typography variant='body1'>Salary for October
has been credited.</Typography>
          </Box>
    </Box>
</Box>
          </Box>
    </Box>
  )
}

export default DashboardLeft
