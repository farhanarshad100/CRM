import { Box, Typography } from "@mui/material";
import React from "react";
import style from "./style";
import Button from "../ui/Button";
import Image from "next/image";

const PoliciesCard = ({
  icon,
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
}) => {
  return (
    <Box sx={style.PoliciesDetails}>
      <Box sx={style.innerDetails}>
        <Box sx={style.iconBtn}>
    <Image
  src={icon}
  alt="icon"
  width={24}
  height={24}
/>
        </Box>
        <Button>{actionBtn}</Button>
      </Box>
      <Box>
        <Typography variant="h4">{title}</Typography>
        <Typography variant="body1">{details}</Typography>
      </Box>
      <Box sx={style.versionCheck}>
        <Box>
          <Typography variant="body1">{update}</Typography>
          <Typography variant="h6">{updateNumber}</Typography>
        </Box>
        <Box>
          <Typography variant="body1">{lastUpdate}</Typography>
          <Typography variant="h6">{Date}</Typography>
        </Box>
      </Box>
      <Box sx={style}>
        <Button>{viewBtn}</Button>
        <Box>
          <span>
  <Image
    src={downloadIcon}
    alt="Download"
    width={10}
    height={10}
  />
          </span>
          <span>
            <Image src={shareIcon} alt="text" width={10} height={10} />
          </span>
        </Box>
      </Box>
    </Box>
  );
};

export default PoliciesCard;
