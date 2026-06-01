"use client";

import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import Link from "next/link";

export default function Sidebar() {
  return (
   <Drawer
  variant="permanent"
  sx={{
    "& .MuiDrawer-paper": {
      width: "260px",
      position: "fixed",
      top: "64px", // below navbar
      left: 0,
      height: "calc(100% - 64px)",
    },
  }}
>
      <List sx={{ width: 200 }}>
        <ListItem disablePadding>
          <ListItemButton component={Link} href="/dashboard">
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component={Link} href="/dashboard/users">
            <ListItemText primary="Users" />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
}