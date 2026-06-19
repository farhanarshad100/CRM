"use client";
import { Box, Grid } from "@mui/material";
import React, { useState } from "react";
import style from "./style";
import Button from "../ui/Button";
import CorporateCard from "./corporateCard";

const StationeryTabs = () => {
  const [activeTab, setActiveTab] = useState("idCard");
  return (
    <>
      <Box sx={style.StationeryTabs}>
        <Button
          onClick={() => setActiveTab("idCard")}
          sx={{
            padding: "8px 32px",
            borderRadius: "12px",
            fontSize: "16px",
            fontWeight: "800",
            background: "#F1F4F6",
            color: "#424656",
            ...(activeTab === "idCard" && style.active),
          }}
        >
          ID Card
        </Button>

        <Button
          onClick={() => setActiveTab("visitCard")}
          sx={{
            padding: "8px 32px",
            borderRadius: "12px",
            fontSize: "16px",
            background: "#F1F4F6",
            fontWeight: "800",
            color: "#424656",
            ...(activeTab === "visitCard" && style.active),
          }}
        >
          Visiting Card
        </Button>
      </Box>
      {activeTab === "idCard" && (
        <Grid container spacing={3}>
          <Grid size={6}>
            <CorporateCard />
          </Grid>
          <Grid size={6}>one</Grid>
        </Grid>
      )}
      {activeTab === "visitCard" && <p>yahooo</p>}
    </>
  );
};

export default StationeryTabs;
