"use client";

import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import style from "./style";
import Image from "next/image";

const FeedFilter = () => {


  const menuItems = [
    { id: 1, title: "All Feed", icon: "/images/allfeed.svg" },
    { id: 2, title: "Announcements", icon: "/images/announcement.svg" },
    { id: 3, title: "Events", icon: "/images/event.svg" },
    { id: 4, title: "Teams", icon: "/images/team.svg" },
  ];
    const [active, setActive] = useState(menuItems[0]?.id);

  return (
    <Box sx={style.feedUpdate}>
      <Typography variant="h6">FEED FILTERS</Typography>
      <List>
        {menuItems.map((items) => (
          <ListItemButton
            key={items.id}
            selected={active === items.id}
            onClick={() => setActive(items.id)}
            sx={{
              borderRadius: "8px",
              "&.Mui-selected": {
                backgroundColor: "#DBE1FF",
                color: "#004CCA",
                fontWeight:"800",
              },
              "&.Mui-selected:hover": {
                backgroundColor: "#bbdefb",
              },
            }}
          >
                  <ListItemIcon sx={style.iconSection}>
            <Image src={items.icon} width={16} height={16}   alt={items.title}/>
        </ListItemIcon>
            <ListItemText primary={items.title} slotProps={{primary:{sx:{fontWeight: active === items.id ? "800" : "500", fontSize:"14px"}}}} />

          </ListItemButton>
        ))}
      </List>
    </Box>
  );
};

export default FeedFilter;
