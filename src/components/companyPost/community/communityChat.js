import { Box, List, ListItem, Typography } from "@mui/material";
import React from "react";
import style from "./style";
import Image from "next/image";
import Button from "@/components/ui/Button";
const CommunityChat = () => {
  return (
    <>
      <Box sx={style.mainHeading}>
        <Typography variant="h1">Konnect</Typography>
        <Typography variant="body1">
          Stay updated with the Precision Corp community.
        </Typography>
      </Box>
      <Box sx={style.chatBox}>
        <Box sx={style.topSection}>
          <Box sx={style.adminProfile}>
            <Image
              src="/images/profile.jpg"
              alt="admin profile"
              width={40}
              height={40}
            />
          </Box>
          <Box sx={style.chatInput}>
            <textarea
              placeholder="Share something with your colleagues..."
              rows={3}
              style={{
                width: "100%",
                background: "#F1F4F6",
                border: "none",
                padding: "16px",
                height: "100px",
                paddingBottom: "64px",
                resize: "none",
                overflowY: "auto",
                overflowX: "hidden",
                whiteSpace: "pre-wrap",
                overflowWrap: "break-word",
                boxSizing: "border-box",
                outline: "none",
                borderRadius: "8px",
              }}
            />
          </Box>
        </Box>
        <Box sx={style.attachement}>
          <Box sx={style.innerSectionAttachement}>
            <Box sx={style.attachementIcon}>
              <List>
                <ListItem> <Image src="/images/gallery.svg" width={34} height={36}     alt="admin profile"/> </ListItem>
                <ListItem> <Image src="/images/attachment.svg" width={28} height={36}     alt="admin profile"/> </ListItem>
                <ListItem><Image src="/images/emoji.svg" width={36} height={36}     alt="admin profile"/></ListItem>
              </List>
            </Box>
            <Box>
                <Button sx={{padding:"7px 22px", fontSize:"14px"}}>Post Konnect</Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default CommunityChat;
