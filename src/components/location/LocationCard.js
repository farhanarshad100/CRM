import { Box, Typography } from "@mui/material";
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
  location,
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
            height: "23px",
            fontWeight: "800",
            lineHeight: "0px",
          }}
        >
          {subtitle}
        </Button>
      </Box>
      <Typography
        variant="h5"
        sx={{
          marginTop: "28px",
          fontSize: "12px",
          color: "#424656",
          fontWeight: "700",
        }}
      >
        {type}
      </Typography>
      <Typography
        variant="h3"
        sx={{
          fontSize: "24px",
          color: "#181C1E",
          letterSpacing: "-0.6px",
          fontWeight: "800",
          marginTop: "4px",
        }}
      >
        {title}
      </Typography>
      <Box sx={style.addressSection}>
        <span>
          <Image src={location} alt="map" width={16} height={24} />
        </span>
        <Typography variant="body1">{address}</Typography>
      </Box>
      <Box sx={{ position: "relative" }}>
        <Image
          src={image}
          alt="office"
          width={400}
          height={200}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "8px",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: "10px",
            left: "10px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <span
            style={{
              height: "12px",
              width: "12px",
              background: "#004CCA",
              borderRadius: "12px",
            }}
          ></span>
          <Typography
            variant="body1"
            sx={{ fontSize: "12px", color: "#181C1E", fontWeight: "500" }}
          >
            {" "}
            {footer}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default LocationCard;
