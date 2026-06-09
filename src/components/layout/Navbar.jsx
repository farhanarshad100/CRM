"use client";

import { Box, Typography } from "@mui/material";
import style from "./style";
import Image from "next/image";

export default function Navbar() {
  return (
    <Box
     
      sx={{
        background: "#FFFFFF",
        boxShadow: "1px 1px 1px #e9e9e9",
        minHeight: "64px",
        padding: "11px 20px",
        position: "sticky",
        top: "0",
        zIndex: "99999",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <Box>  <Image
            src="/images/logo.svg"
            alt="Search"
            width={40}
            height={40}
            style={{ display: "block" }}
          /> </Box>
          <Typography
            sx={{ fontSize: "20px", color: "#004cca", fontWeight: "bold" }}
          >
            Precision Corp
          </Typography>
        </Box>
        <Box sx={style.searchBar}>
          <input type="text" placeholder="Search" />
          <span>

            <Image
              src="/images/search.svg"
              alt="Search"
              width={14}
              height={14}
            />
          </span>
        </Box>
        <Box
          sx={{
            display: "flex",
            marginLeft: "auto",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <Box>
            <Image
              src="/images/notification.svg"
              width={16}
              height={20}
              alt="notification"
            />
          </Box>
          <Box>
            <Image
              src="/images/question.svg"
              width={16}
              height={20}
              alt="notification"
            />
          </Box>
          <Box
            sx={{ height: "42px", background: "#e3e3e3", width: "1px" }}
          ></Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <Box>
              <Typography variant="h5" sx={{ fontSize: "14px", fontWeight: "600", color: "#0F172A", lineHeight: "9px" }}>Amit</Typography>
              <Typography variant="p" sx={{ fontSize: "12px", fontWeight: "600", color: "#424656" }}>PROFILE SETTINGS</Typography>
            </Box>
            <Image
              src="/images/EmployeeAvatar.png"
              width={40}
              height={40}
              alt="notification"
              style={{ borderRadius: "100px" }} />
          </Box>

        </Box>
      </Box>
    </Box>
  );
}
