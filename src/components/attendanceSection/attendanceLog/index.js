"use client";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";
import style from "./style";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";
import WorkDuration from "../dailyLog/workDuration";
import LogDetails from "../dailyLog/logdetails";
import DailyData from "../dailyLog/dailydata";
import ExportReport from "../monthlylog/exportreport";
import EmployeeHours from "../monthlylog/employeehours";
import DailyBreakdown from "../monthlylog/dailybreakdown";
import DailyBreakDowndata from "../monthlylog/dailybreakdowndata";
import MonthlyEfficiency from "../monthlylog/monthlyEfficiency";

const AttendanceLog = () => {
    const [value, setValue] = React.useState(dayjs());
    const [tabValue, setTabValue] = useState(0);
    return (
        <Box sx={style.attendanceLog}>
            <Typography variant="h3">Attendance Log</Typography>
            <Box sx={style.attendanceTabSection}>
                <Box sx={style.tabsDetails}>
                    <Tabs
                        value={tabValue}
                        onChange={(e, newValue) => setTabValue(newValue)}
                        sx={{ minHeight: "35px" }}
                    >
                        <Tab label="DailyLog" />
                        <Tab label="Monthly Log" />
                    </Tabs>
                </Box>

           
            </Box>

            {tabValue === 0 && (
                <Box sx={style.innerBox}>
                    <WorkDuration />
                    <LogDetails />
                    <DailyData />
                </Box>
            )}
            {tabValue === 1 && <Box sx={style.innerBox}>
              <ExportReport/>  
            <EmployeeHours/>
            <DailyBreakdown/>
            <DailyBreakDowndata/>
            <MonthlyEfficiency/>
                </Box>}
        </Box>
    );
};

export default AttendanceLog;
