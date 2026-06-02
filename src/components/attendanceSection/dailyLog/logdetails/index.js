import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const LogDetails = () => {
  return (
    <Box
      sx={{
        border: "1px solid rgba(226, 232, 240, 0.1)",
        boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
        background: "#fff",
        padding: "24px",
        mt: 3,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Typography variant="h5" sx={{ fontSize: "24px", fontWeight: "700" }}>
        Log Details
      </Typography>
      <Button
        variant="contained"
        sx={{
          background: "#dbe1ff",
          color: "#003ec8",
          padding: "11px 29px",
          boxShadow: "none",
          display: "flex",
          lineHeight:"0",
          fontSize:"15px",
          alignContent: "center",
          gap: "7px",
          "&:hover":{
            boxShadow:"none"
          }
        }}
      >
        <Image
          src="/images/download-minimalistic.svg"
          alt="Export"
          width={20}
          height={20}
        />
        Export CSV
      </Button>
    </Box>
  );
};

export default LogDetails;
