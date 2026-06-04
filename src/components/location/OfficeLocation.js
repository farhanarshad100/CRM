import React from "react";
import LocationTop from "./LocationTop";
import LocationCard from "./LocationCard";
import { Grid } from "@mui/material";
import { officeLocation } from "./locationData";
const OfficeLocationDetails = () => {
  return (
    <>
      <LocationTop />
      <Grid container spacing={3}>
        {officeLocation.map((office) => (
          <Grid key={office.id} size={6}>
            <LocationCard {...office} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default OfficeLocationDetails;
