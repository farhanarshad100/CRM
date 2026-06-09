import { Box, Grid, List, ListItem, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import style from "./style";
import Link from "next/link";

const OfficeDetails = () => {
  return (
    <>
      <Box sx={{marginTop:"40px"}}>
        <Grid container spacing={3}>
          <Grid size={4}>
            <Box
              sx={{
                background: "#004CCA",
                borderRadius: "12px",
                padding: "32px",
                display: "flex",
                flexDirection: "column",
                gap: "15px",
                height: "100%",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="h4"
                sx={{ color: "#F3F3FF", fontSize: "16px", fontWeight: "800" }}
              >
                Mailing Assistance
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontSize: "14px", color: "#FFFFFF", fontWeight: "400" }}
              >
                Need to send physical documents? All official correspondence
                should be directed to the Registered Office address.
              </Typography>
              <List sx={style.official}>
                <ListItem>
                  <span>
                    <Image
                      src="/images/mail.svg"
                      alt="icon"
                      width={12}
                      height={10}
                    />{" "}
                  </span>
                  legal@knowbuild.com
                </ListItem>
                <ListItem>
                  <span>
                    <Image
                      src="/images/phone.svg"
                      alt="icon"
                      width={11}
                      height={11}
                    />{" "}
                  </span>
                  +91 11 4050 6070
                </ListItem>
              </List>
            </Box>
          </Grid>
          <Grid size={8}>
            <Box
              sx={{
                background: "#F1F4F6",
                borderRadius: "12px",
                padding: "32px",
                height: "100%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "24px",
                }}
              >
                <Typography
                  variant="h3"
                  sx={{ fontSize: "16px", fontWeight: "800", color: "#181C1E" }}
                >
                  Office Access Log
                </Typography>
                <Link
                  href="viewAll"
                  style={{
                    fontSize: "12px",
                    fontWeight: "800",
                    color: "#004CCA",
                  }}
                >
                  View History
                </Link>
              </Box>

              <Box
                sx={{
                  background: "#FFFFFF",
                  padding: "12px",
                  borderRadius: "8px",
                  marginBottom: "16px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ display: "flex", gap: "16px" }}>
                    <Box
                      sx={{
                        background: "#E5E9EB",
                        borderRadius: "4px",
                        padding: "9px 11px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Image
                        src="/images/address-verified.svg"
                        alt="icon"
                        width={18}
                        height={18}
                      />
                    </Box>
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontSize: "14px",
                          color: "#181C1E",
                          fontWeight: "800",
                        }}
                      >
                        Address Verified{" "}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          fontSize: "12px",
                          color: "#424656",
                          fontWeight: "400",
                        }}
                      >
                        Last checked by Admin on Oct 12, 2023
                      </Typography>
                    </Box>
                  </Box>
                  <Box>
                    <Image
                      src="/images/tick.svg"
                      alt="icon"
                      width={12}
                      height={12}
                    />
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  background: "#FFFFFF",
                  padding: "12px",
                  borderRadius: "8px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ display: "flex", gap: "16px" }}>
                    <Box
                      sx={{
                        background: "#E5E9EB",
                        borderRadius: "4px",
                        padding: "9px 11px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Image
                        src="/images/bulding.svg"
                        alt="icon"
                        width={18}
                        height={18}
                      />
                    </Box>
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontSize: "14px",
                          color: "#181C1E",
                          fontWeight: "800",
                        }}
                      >
                        Entity Registered{" "}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          fontSize: "12px",
                          color: "#424656",
                          fontWeight: "400",
                        }}
                      >
                        CIN: U72900DL2010PTC211432
                      </Typography>
                    </Box>
                  </Box>
                  <Box>
                    <Image
                      src="/images/tick.svg"
                      alt="icon"
                      width={12}
                      height={12}
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default OfficeDetails;
