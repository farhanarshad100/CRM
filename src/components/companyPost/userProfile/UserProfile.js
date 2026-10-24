import { Box } from '@mui/material'
import React from 'react'
import style from './style'
import Image from 'next/image'

const UserProfile = () => {
  return (
<>
<Box sx={style.userProfile}>


<Image
src="/images/profile.jpg"
alt="Search"
width={80}
 height={80}
 priority
style={{ display: "block" }}
/>
<Box sx={style.userProfileDetails}>
    <h4>Alex Sterling</h4>
    <p>Senior UI/UX Designer</p>
</Box>
<Box sx={style.postAndLike}>
    <Box sx={style.postLikeInner}>
        <h5>24</h5>
        <p>POSTS</p>
    </Box>
    <Box sx={style.postLikeInner}>
        <h5>1.2k</h5>
        <p>REACH</p>
    </Box>
</Box>
</Box>
</>
  )
}

export default UserProfile
