import { Box, Typography } from '@mui/material'
import React from 'react'
import AddIcon from "@mui/icons-material/Add";
const UploadPolicyCard = () => {
  return (
   <Box
    sx={{
      border: "1px dashed #D0D5DD",
      borderRadius: 2,
      minHeight: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
    }}
  >
    <AddIcon />
    <Typography fontWeight={600}>
      Upload New Policy
    </Typography>
    <Typography variant="body2" color="text.secondary">
      PDF, DOCX or TXT files up to 10 MB
    </Typography>
  </Box>
  )
}

export default UploadPolicyCard
