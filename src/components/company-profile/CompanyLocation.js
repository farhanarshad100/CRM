import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import style from "./style";
import Image from "next/image";
const CompanyLocation = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid size={6}>
          <Box sx={{ ...style.companyInfo, ...style.locationInfo }}>
            <Box sx={style.locationIcon}>
              <Image
                src="/images/location.svg"
                alt="location"
                width={16}
                height={20}
              />
            </Box>
            <Typography variant="h6"> Corporate Office</Typography>
            <Typography variant="body1">
              The Tech Park, Sector 44, Delhi, Delhi 560001, India
            </Typography>
          </Box>
        </Grid>
        <Grid size={6}>
          <Image
            src="/images/locationMap.jpg"
            alt="map"
            width={456}
            height={456}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default CompanyLocation;
