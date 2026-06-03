import { Box, Grid, List, ListItem, Typography } from "@mui/material";
import React from "react";
import style from "./style";
import Image from "next/image";
import Link from "next/link";

const CompanyOverview = () => {
  return (
    <Grid container spacing={2}>
      <Grid size={9}>
        <Box sx={style.companyInfo}>
          <Box sx={style.overviewDetails}>
            <Typography variant="h1" sx={{ fontSize: "20px" }}>
              Overview
            </Typography>
            <span>
              <Image
                src="/images/overview.svg"
                alt="overview"
                width={20}
                height={20}
              />
            </span>
          </Box>
          <Box sx={style.overviewInner}>
            <Box sx={style.innerDetails}>
              <Typography variant="h5">BRAND NAME</Typography>
              <Typography variant="h4">knowbuild</Typography>
              <span>&nbsp;</span>
            </Box>
            <Box sx={style.innerDetails}>
              <Typography variant="h5">OFFICIAL EMAIL</Typography>
              <Typography variant="h4">sales@trikuta.com</Typography>
              <span>&nbsp;</span>
            </Box>
          </Box>
          <Box sx={style.overviewInner}>
            <Box sx={style.innerDetails}>
              <Typography variant="h5">CONTACT NUMBER</Typography>
              <Typography variant="h4">8800739927</Typography>
              <span>&nbsp;</span>
            </Box>
            <Box sx={style.innerDetails}>
              <Typography variant="h5">WEBSITE</Typography>
              <Typography variant="h4">
                <Link
                  style={{ color: "#004CCA" }}
                  href="https://trikutaglobal.com/"
                >
                  
                  https://trikutaglobal.com/
                </Link>
              </Typography>
              <span>&nbsp;</span>
            </Box>
          </Box>
          <Box sx={style.overviewInner}>
            <Box sx={style.innerDetails}>
              <Typography variant="h5">DOMAIN NAME </Typography>
              <Typography variant="h4">trikutaglobal</Typography>
              <span>&nbsp;</span>
            </Box>
            <Box sx={style.innerDetails}>
              <Typography variant="h5">INDUSTRY TYPE</Typography>
              <Typography variant="h4">Information Technology (IT)</Typography>
              <span>&nbsp;</span>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid size={3}>
        <Box sx={style.companyInfo}>
          <Typography variant="h1" sx={{ fontSize: "20px" }}>
            Social Presence
          </Typography>
          <Box sx={style.socialBtn}>
            <List>
              <ListItem>
                <Link href="/">
                  <span>
                    <Image
                      src="/images/LinkedIn.png"
                      alt="LinkedIn"
                      width={20}
                      height={20}
                    />
                  </span>
                  LinkedIn
                  <Image
                    src="/images/clip.svg"
                    alt="clip"
                    width={20}
                    height={20}
                  />
                </Link>
              </ListItem>
               <ListItem>
                <Link href="/">
                  <span>
                    <Image
                      src="/images/LinkedIn.png"
                      alt="LinkedIn"
                      width={20}
                      height={20}
                    />
                  </span>
                  Facebook
                  <Image
                    src="/images/clip.svg"
                    alt="clip"
                    width={20}
                    height={20}
                  />
                </Link>
              </ListItem>
               <ListItem>
                <Link href="/">
                  <span>
                    <Image
                      src="/images/x.png"
                      alt="LinkedIn"
                      width={20}
                      height={20}
                    />
                  </span>
                  Twitter / X
                  <Image
                    src="/images/clip.svg"
                    alt="clip"
                    width={20}
                    height={20}
                  />
                </Link>
              </ListItem>
            </List>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default CompanyOverview;
