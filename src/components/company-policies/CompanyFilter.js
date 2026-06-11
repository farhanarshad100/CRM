import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import style from "./style";
import Button from "../ui/Button";
import Image from "next/image";

const CompanyFilter = () => {
  return (
    <>
      <Box sx={style.companyFilter}>
        <Box sx={style.companyPolicies}>
          <Typography variant="h1"> Company Policies</Typography>
          <Typography variant="body1">
            Access and manage the regulatory documents, ethical guidelines, and
            operational
            <br />
            frameworks of Precision Ledger.
          </Typography>
        </Box>
        <Button
          sx={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
            background: "#004CCA",
            padding: "15px 20px",
            color: "#fff",
          }}
        >
          <Image src="/images/upload.svg" alt="upload" width={16} height={20} />{" "}
          Upload New Policy
        </Button>
      </Box>

      <Grid container spacing={3}>
        <Grid size={8}>
          <Box
            sx={{
              background: "#FFFFFF",
              border: "1px solid rgba(226, 232, 240, 0.05)",
              boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
              borderRadius: "8px",
              padding: "24px",
              display: "flex",
              justifyContent: "space-between",
              gap: "16px",
              height: "100%",
              alignItems: "center",
            }}
          >
            <Box sx={{ width: "80%", position: "relative" }}>
              <span style={{ position: "absolute", top: "0", left: "0" }}>
                <Image
                  src="/images/filterIcon.svg"
                  alt="add"
                  width={20}
                  height={15}
                />
              </span>
              <input
                style={{
                  borderTop: "none",
                  borderLeft: "none",
                  borderRight: "none",
                  borderBottom: "1px solid #c2c6d945",
                  padding: "10px 30px",
                  width: "100%",
                  outline: "none",
                }}
                type="text"
                placeholder="Search by policy title, keyword or version..."
              />
            </Box>
            <Box
              sx={{
                width: "20%",
                display: "flex",
                gap: "10px",
                justifyContent: "end",
              }}
            >
              <Button
                sx={{
                  border: "1px solid #C2C6D9",
                  padding: "10px 16px",
                  borderRadius: "4px",
                  display: "flex",
                  gap: "8px",
                  color: "#424656",
                  fontWeight: "800",
                  fontSize: "14px",
                }}
              >
                <Image
                  src="/images/iconFilter.svg"
                  alt="add"
                  width={10}
                  height={8}
                />
                Filter
              </Button>
              <Button
                sx={{
                  border: "1px solid #C2C6D9",
                  padding: "10px 16px",
                  borderRadius: "4px",
                  display: "flex",
                  gap: "8px",
                  color: "#424656",
                  fontWeight: "800",
                  fontSize: "14px",
                }}
              >
                <Image
                  src="/images/sorticon.svg"
                  alt="add"
                  width={10}
                  height={8}
                />
                Sort
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid size={4}>
          <Grid container spacing={3}>
            <Grid size={6}>
              <Box
                sx={{
                  background: "#0062FF",
                  borderRadius: "8px",
                  padding: "24px",
                  display: "flex",

                  flexDirection: "column",
                }}
              >
                <Typography
                  variant="h3"
                  sx={{ color: "#fff", fontSize: "30px", fontWeight: "800" }}
                >
                  24
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "#F3F3FF", fontSize: "12px", fontWeight: "800" }}
                >
                  TOTAL
                  <br />
                  POLICIES
                </Typography>
              </Box>
            </Grid>
            <Grid size={6}>
              <Box
                sx={{
                  background: "#FFDBD0",
                  padding: "24px",
                  borderRadius: "8px",
                  borderLeft: "4px solid #A12D01",
                }}
              >
                <Typography
                  variant="h3"
                  sx={{ color: "#3A0A00", fontSize: "30px", fontWeight: "800" }}
                >
                  3
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "#3A0A00", fontSize: "12px", fontWeight: "800" }}
                >
                  ACTION
                  <br />
                  NEEDED
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default CompanyFilter;
