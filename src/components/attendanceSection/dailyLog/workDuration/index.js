import React from 'react'
import style from './style'
import { Box, Grid, Typography } from '@mui/material'
import Image from 'next/image'

const WorkDuration = () => {
    return (
        <Box>
            <Grid container spacing={3}>
                <Grid size={3}>
                    <Box sx={style.attendance}>
                        <Typography variant='body1'>WORK DURATION</Typography>
                        <Typography variant='h3'>08:42</Typography>
                        <Typography variant='h6'>Goal: 01:30 hrs</Typography>
                    </Box>
                </Grid>
                <Grid size={3}>
                    <Box sx={{ ...style.attendance, ...style.attendanceUpdate }}>
                        <Typography variant='body1'>BREAK DURATION</Typography>
                        <Box sx={style.innerAttendance}>
                            <Box>
                                <Typography variant='h3'>00:30</Typography>
                                <Typography variant='h6'>Goal: 08:30 hrs</Typography>
                            </Box>
                            <span>
                                <Image
                                    src="/images/coffee-svgrepo-com.svg"
                                    alt="Search"
                                    width={35}
                                    height={35}
                                    style={{ display: "block" }}
                                />
                            </span>
                        </Box>
                    </Box>
                </Grid>
                <Grid size={3}>
                    <Box sx={{ ...style.attendance, ...style.attendanceUpdate }}>
                        <Typography variant='body1'>OVERTIME</Typography>
                        <Box sx={style.innerAttendance}>
                            <Box>
                                <Typography variant='h3'>00:12</Typography>
                                <Typography variant='h6'>Extra earning active</Typography>
                            </Box>
                            <span>
                                <Image
                                    src="/images/clock-plus-svgrepo-com.svg"
                                    alt="Search"
                                    width={35}
                                    height={35}
                                    style={{ display: "block" }}
                                />
                            </span>
                        </Box>
                    </Box>
                </Grid>

                <Grid size={3}>
                    <Box sx={{ ...style.attendance, ...style.attendanceUpdate }}>
                        <Typography variant='body1' sx={{ color: "#a12d01 !important" }}>ANOMALIES FOUND</Typography>
                        <Box sx={style.innerAttendance}>
                            <Box>
                                <Typography variant='h3' >02</Typography>
                                <Typography variant='h6' sx={{ color: "#a12d01 !important" }} >Needs verification</Typography>
                            </Box>
                            <span style={{ background: "#ffdbd0" }}>
                                <Image
                                    src="/images/alert-triangle.svg"
                                    alt="Search"
                                    width={35}
                                    height={35}
                                    style={{ display: "block" }}
                                />
                            </span>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default WorkDuration
