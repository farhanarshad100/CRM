import { Box, Typography } from "@mui/material";
import React from "react";
import style from "./style";
import Button from "../ui/Button";
import Image from "next/image";

const CorporateStationeryTop = () => {
  return (
    <Box sx={style.corporateStationery}>
      <Box sx={style.innerDetails}>
        <Typography variant="h4">Corporate Stationery</Typography>
        <Typography variant="body1">
          Preview and download your official company identification
          <br />
          and business cards for professional use.
        </Typography>
      </Box>
      <Box sx={{ display: "flex", gap: "12px" }}>
        <Button
          sx={{
            background: "#D3E1F6",
            padding: "10px 24px",
            color: "#566475",
            display: "flex",
            gap: "8px",
          }}
        >
          <Image
            src="/images/print.svg"
            alt="download"
            width={13}
            height={13}
          />
          Request Print
        </Button>
        <Button
          sx={{
            padding: "10px 24px",
            color: "#fff",
            display: "flex",
            gap: "8px",
          }}
        >
          <Image
            src="/images/downloadwhite.svg"
            alt="download"
            width={13}
            height={13}
          />
          Download PDF
        </Button>
      </Box>
    </Box>
  );
};

export default CorporateStationeryTop;
