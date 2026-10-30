
'use client'
import { Box, Chip, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import style from "./style";

const Tag = () => {

    const [tags, setTags] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/posts?limit=5")
            .then((res) => res.json())
            .then((data) => setTags(data.posts));
    }, []);

    return (
        <Box sx={style.userProfile}>

            <Typography variant="h6" sx={{color:"#424656", fontSize:"13px", fontWeight:"bold", marginBottom:"10px"}}>
                TRENDING TAGS
            </Typography>
            {tags.map((item) => (
                <Box key={item.id}>

                    {item.tags.map((tag, index) => (
                        <Chip
                            key={index}
                            label={tag}
                            variant="outlined"

                            sx={{
                                margin:"2px",
                                fontSize:"12px"
                            }}
                        />
                    ))}

                </Box>
            ))}

        </Box>
    );
};

export default Tag;
