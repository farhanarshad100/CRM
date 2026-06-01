"use client";

import {
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import Link from "next/link";
import style from "./style";
import { usePathname } from "next/navigation";
import Image from "next/image";
const drawerWidth = 260;
const menuItems = [
  { 
    label: "Dashboard",
    href: "/dashboard",
     icon: "/images/dashboardicon.svg",
     
  },
  { 
    label: "Attendance",
    href: "/attendance",
    icon: "/images/attendanceicon.svg",

   },
  { 
    label: "Leave",
     href: "/leave",
     icon: "/images/leaveIcon.svg",
  },
  { 
    label: "Payroll",
     href: "/payroll",
     icon: "/images/payrollIcon.svg"
  },
  { 
    label: "Directory",
    href: "/directory",
    icon:"/images/directoryIcon.svg"
  },
  {
     label: "ID Card",
     href: "/id-card",
     icon:"/images/idcardicon.svg",
   },
  { 
    label: "Holidays",
     href: "/holidays",
     icon:"/images/holidayicon.svg",
  },
  { label: "Organization",
    href: "/organization",
      icon:"/images/charticon.svg",
   },
];

const menuItemsBottom = [
  { 
    label: "Settings",
    href: "/settings",
    icon: "/images/settingicon.svg",
  },
    { 
    label: "Support",
    href: "/support",
    icon: "/images/support.svg",
  },
]
export default function Sidebar() {
  const pathname = usePathname();
  return (
    <Drawer
      variant="permanent"
      sx={{
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          position: "sticky",
          top: "65px", // below navbar
          left: 0,
          height: "100vh",
          background: "#fff",
          border: "none",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
        },
      }}
    >
      <Box sx={style.sideNav}>
        <List sx={{ width: "100%", pt: 0 }}>
          {menuItems.map((item) => (
            <ListItem
              key={item.href}
              disablePadding
              className={pathname === item.href ? "active" : ""}
            >
               
              <ListItemButton component={Link} href={item.href}>
                 <Image
          src={item.icon}
          alt={item.label}
          width={18}
          height={18}
        />
                <ListItemText primary={item.label}/>
              </ListItemButton>
            </ListItem>
          ))}
        </List>


  

      </Box>
              <Box sx={style.sideNav} style={{marginBottom:"75px"}}>
                    <List sx={{ width: "100%", pt: 0 }}>
          {menuItemsBottom.map((item) => (
            <ListItem
              key={item.href}
              disablePadding
              className=""
            >
               
              <ListItemButton component={Link} href={item.href}>
                 <Image
          src={item.icon}
          alt={item.label}
          width={18}
          height={18}
        />
                <ListItemText primary={item.label}/>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Button sx={{background:"#004CCA", display:"flex", alignItems:"center", width:"85%", gap:"10px", padding:"8px", color:"#fff", margin:"auto", fontSize:"13px"}}>          <Image
          src="/images/add.svg"
          alt="add"
          width={11}
          height={11}
        />Add Employee</Button>
          </Box>
    </Drawer>
  );
}
