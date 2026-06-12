import { Box, Typography } from "@mui/material";
import React from "react";
import style from "./style";
import Button from "../ui/Button";
import Image from "next/image";

const PoliciesCard = ({
  hammer,
  actionBtn,
  title,
  details,
  update,
  updateNumber,
  lastUpdate,
  Date,
  viewBtn,
  downloadIcon,
  shareIcon,
  pdfIcon,
}) => {
  return (
    <Box sx={style.PoliciesDetails}>
      <Box sx={{padding:"24px"}}>
      <Box sx={style.innerDetails}>
        <Box sx={style.iconBtn}>
    <Image
  src={hammer}
  alt="hammer Icon"
  width={18}
  height={19}
/>
        </Box>
        <Button sx={{
          background:"#A12D01",
          borderRadius:"2px",
          padding:"4px",
          fontSize:"11px",
          letterSpacing:"1px",
          fontWeight:"800",
          color:"#fff"
        }}>{actionBtn}</Button>
      </Box>
      <Box sx={{marginBottom:"16px"}}>
        <Typography variant="h4" sx={{color:"#181C1E", fontSize:"20px", fontWeight:"800"}}>{title}</Typography>
        <Typography variant="body1" sx={{color:"#424656", fontSize:"14px", fontWeight:"500"}}>{details}</Typography>
      </Box>
      <Box sx={style.versionCheck}>
        <Box sx={style.versionInner}>
          <Typography variant="body1">{update}</Typography>
          <Typography variant="h6">{updateNumber}</Typography>
        </Box>
        <Box sx={style.versionInner}>
          <Typography variant="body1">{lastUpdate}</Typography>
          <Typography variant="h6">{Date}</Typography>
        </Box>
      </Box>
      </Box>
      <Box sx={style.PoliciesFooter}>
        <Button sx={{borderRadius:"4px", fontSize:"14px", padding:"8px", fontWeight:"800", display:"flex", gap:"8px"}}>
           <Image
    src={pdfIcon}
    alt="Download"
    width={12}
    height={12}
  />
          {viewBtn}</Button>
        <Box sx={{display:"flex", alignItems:"center", gap:"15px"}}>
          <span>
  <Image
    src={downloadIcon}
    alt="Download"
    width={16}
    height={16}
  />
          </span>
          <span>
            <Image src={shareIcon} alt="text" width={18} height={20}  />
          </span>
        </Box>
      </Box>
    </Box>
  );
};

export default PoliciesCard;
