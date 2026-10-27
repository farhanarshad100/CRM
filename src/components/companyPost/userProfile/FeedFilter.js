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
    { id: 2, title: "Announcements", icon: "/images/add.svg" },
    { id: 3, title: "Events", icon: "/images/add.svg" },
    { id: 4, title: "Teams", icon: "/images/add.svg" },
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
                backgroundColor: "#e3f2fd",
                color: "#1976d2",
              },
              "&.Mui-selected:hover": {
                backgroundColor: "#bbdefb",
              },
            }}
          >
                  <ListItemIcon sx={style.iconSection}>
            <Image src={items.icon} width={15} height={15}   alt={items.title}/>
        </ListItemIcon>
            <ListItemText primary={items.title} />

          </ListItemButton>
        ))}
      </List>
    </Box>
  );
};

export default FeedFilter;
