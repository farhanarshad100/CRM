'use client'

import { Box, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material'
import React, { useState } from 'react'
import style from './style'

const FeedFilter = () => {
    const [active, setActive] = useState("All Feed")

    const menuItems = [
        "All Feed",
        "Announcements",
        "Events",
        "Teams"
    ];






  return (
  <Box sx={style.feedUpdate}>
    <Typography variant='h6'>FEED FILTERS</Typography>
    <List>
        {menuItems.map((items) =>(
        <ListItemButton key={items}
        selected ={active === items}
        onClick={()=> setActive(items)}
       sx={{
            borderRadius: "8px",
            "&.Mui-selected": {
              backgroundColor: "#e3f2fd",
              color: "#1976d2",
            },
            "&.Mui-selected:hover": {
              backgroundColor: "#bbdefb",
            },
          }} >
          <ListItemText primary={items} />
        </ListItemButton>
        ))}
       

    </List>
  </Box>
  )
}

export default FeedFilter
