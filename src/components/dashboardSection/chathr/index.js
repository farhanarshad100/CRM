import { Box, Button, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const ChatHr = () => {
  return (
 <Box sx={{marginTop:"32px",

display: "flex",
flexDirection: "row",
justifyContent: "space-between",
alignItems: "center",
background:"rgba(0, 76, 202, 0.05)",
border: "1px solid rgba(0, 76, 202, 0.1)",
borderRadius: "24px",
padding:"32px",

 }}>
    <Box>
        <Typography variant='h3' sx={{fontSize:"20px", fontWeight:"600", color:"#004CCA"}}>Need assistance with your benefits?</Typography>
        <Typography variant='body1' sx={{fontSize:"14px", color:"#424656",fontWeight:"500", marginTop:"10px"}}>Our HR support team is available 24/7 to help you with payroll,<br/>
leaves, or technical queries.</Typography>
    </Box>
    <Button sx={{background:"#004CCA", borderRadius:"8px", fontSize:"16px", fontWeight:"700", color:"#fff", display:"flex", gap:"10px", padding:"12px 24px"}}>
        <span> <Image
                    src="/images/hr.svg"
                    alt="Search"
                    width={15}
                    height={14}
                    priority
                    style={{ display: "block" }}
                  /></span>Chat with HR</Button>
 </Box>
  )
}

export default ChatHr
