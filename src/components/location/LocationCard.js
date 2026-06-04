import { Box } from "@mui/material";
import React from "react";
import style from "./style";
import Button from "../ui/Button";
import Image from "next/image";

const LocationCard = ({
  type,
  subtitle,
  title,
  address,
  image,
  icon,
  footer,
}) => {
  return (
    <Box sx={style.cardOffice}>
      <Box sx={style.innerDetails}>
        <Box sx={style.iconBox}>
          <Image src={icon} width={20} height={18} alt="office icon" />
        </Box>
        <Button
          sx={{
            borderRadius: "12px",
            background: "rgb(180 197 255 / 20%)",
            padding: "4px 12px",
            color: "#0F1C2C",
            fontSize: "11px",
            height:"23px",
            fontWeight:"800",
          }}
        >
          {subtitle}
        </Button>
      </Box>
    </Box>
  );
};

export default LocationCard;
