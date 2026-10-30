"use client";

import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
const Post = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [like, setLike] = useState([]);
  const [dislike, setDislike] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/posts?limit=5")
      .then((res) => res.json())
      .then((data) => setAnnouncements(data.posts));
  }, []);
  return (
    <>
      {announcements.map((item) => (
        <Box
          key={item.id}
          sx={{
            background: "#fff",
            border: "1px solid rgba(194, 198, 217, 0.15)",
            boxShadow: "0px 4px 24px -2px rgba(24, 28, 30, 0.04)",
            borderRadius: "8px",
            padding: "24px",
            marginTop: "24px",
          }}
        >
          <Box sx={{ display: "flex", gap: "20px" }}>
            <Box>
              {" "}
              <img
                src={`https://picsum.photos/seed/hr${item.id}/700/350`}
                alt="Announcement"
                style={{
                  width: "48px",
                  height: "48px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
            </Box>
            <Box>
              <Typography
                variant="h3"
                sx={{ fontSize: "14px", fontWeight: "bold" }}
              >
                HR Department
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontSize: "11px", color: "#424656" }}
              >
                2 hours ago
              </Typography>
            </Box>
          </Box>
          <Box>
            <Typography variant="body1" sx={{ margin: "15px 0" }}>
              {" "}
              {item.body}
            </Typography>
            <img
              src={`https://picsum.photos/seed/hr${item.id}/700/350`}
              alt="Announcement"
              style={{
                width: "100%",
                height: "400px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "24px",
              marginTop: "10px",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: "3px" }}>
              <FavoriteBorderIcon
                onClick={() => {
                  setLike((prev) =>
                    prev.includes(item.id)
                      ? prev.filter((id) => id !== item.id)
                      : [...prev, item.id],
                  );
                }}
                sx={{
                  color: like.includes(item.id) ? "red" : "gray",
                  cursor: "pointer",
                }}
              />
              <Typography variant="body1">
                {item.reactions.likes + (like.includes(item.id) ? 1 : 0)}
              </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: "3px" }}>
              <ThumbDownIcon
                onClick={() => {
                  setDislike((prev) =>
                    prev.includes(item.id)
                      ? prev.filter((id) => id !== item.id)
                      : [...prev, item.id],
                  );
                }}
                sx={{
                    color: dislike.includes(item.id) ? "red" : "gray",
                    cursor: "pointer"
                }}
              />
              <Typography variant="body1">{item.reactions.dislikes - (dislike.includes(item.id)? 1:0)}</Typography>
            </Box>
          </Box>
        </Box>
      ))}
    </>
  );
};
export default Post;
