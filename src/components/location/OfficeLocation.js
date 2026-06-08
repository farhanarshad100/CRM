import React from "react";
import LocationTop from "./LocationTop";
import LocationCard from "./LocationCard";
import { Box, Grid } from "@mui/material";
import { officeLocation } from "./locationData";
import OfficeDetails from "./officeDetails";
const OfficeLocationDetails = () => {
  return (
    <>
      <LocationTop />
      <Box sx={{marginTop:"40px"}}>
      <Grid container spacing={3}>
        {officeLocation.map((office) => (
          <Grid key={office.id} size={6}>
            <LocationCard {...office} />
          </Grid>
        ))}
      </Grid>
      </Box>
      <OfficeDetails/>
    </>
  );
};

export default OfficeLocationDetails;
