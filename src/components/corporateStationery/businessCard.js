import { Box, List, ListItem, Typography } from "@mui/material";
import React from "react";
import style from "./style";
import Image from "next/image";

const BusinessCard = () => {
  return (
    <Box sx={style.businessHeading}>
      <Typography variant="h2">Business Card Preview</Typography>

      <Box sx={style.innerDetailsBusiness}>
        <Box sx={style.innerCard}>
          <Box sx={style.cardCompnayName}>
            <Typography variant="h1">knowbuild</Typography>
            <Typography variant="body1">BUSINESS SOFTWARE</Typography>
          </Box>

          <Box sx={style.cardOnName}>
            <Box sx={style.nameInnerDetails}>
              <Typography variant="h3">Mohd Ansari</Typography>
              <Typography variant="body1">Senior Backend Engineer</Typography>
            </Box>
            <Box sx={style.nameInnerDetails}>
              <List>
                <ListItem>
                  +91 88007 39927{" "}
                  <span>
                    {" "}
                    <Image
                      src="/images/phoneblack.svg"
                      alt="download"
                      width={13}
                      height={13}
                    />
                  </span>
                </ListItem>
                <ListItem>
                  +91 88007 39927{" "}
                  <span>
                    <Image
                      src="/images/mailblack.svg"
                      alt="download"
                      width={13}
                      height={13}
                    />
                  </span>
                </ListItem>
              </List>
            </Box>
          </Box>
        </Box>
        <Box sx={style.companyCardFront}>
          <Image
            src="/images/cardlogo.svg"
            alt="download"
            width={120}
            height={120}
          />
          <Box sx={style.brandName}>
            <h4>knowbuild</h4>
            <p>BUSINESS SOFTWARE PVT LTD</p>
          </Box>
             <Box sx={style.website}>
          <p>WWW.KNOWBUILD.COM</p>
        </Box>
        </Box>
     
      </Box>
    </Box>
  );
};

export default BusinessCard;
