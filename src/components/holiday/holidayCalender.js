"use client";

import dayjs from "dayjs";
import { Box, Card, List, ListItem, Typography } from "@mui/material";

const holidays = [
  {
    id: 1,
    title: "Good Friday",
    date: "2026-04-03",
    type: "mandatory",
  },
  {
    id: 2,
    title: "Vaisakhi",
    date: "2026-04-13",
    type: "optional",
  },
  {
    id: 3,
    title: "Eid-al-Fitr",
    date: "2026-04-22",
    type: "mandatory",
  },
];

export default function HolidayCalendar() {
  const currentMonth = dayjs("2026-04-01");

  const daysInMonth = currentMonth.daysInMonth();
  const firstDay = currentMonth.startOf("month").day();

  const calendarDays = [];

  for (let i = 0; i < firstDay; i++) {
    calendarDays.push(null);
  }

  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push(i);
  }

  return (
    <Card sx={{ p: 0, borderRadius: "8px", height:"100%", border: "1px solid rgba(194, 198, 217, 0.15)",
    boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)", }}>
      <Box sx={{display:"flex", justifyContent:"space-between", p:3, alignItems:"center"}}>
      <Typography variant="h5" fontWeight={700} mb={3} sx={{fontSize:"16px"}}>
        April 2026
      </Typography>
      <List sx={{display:"flex", gap:"10px"}}>
        <ListItem sx={{padding:"0"}}><span style={{background:"#0062FF", height:"12px", width:"12px", borderRadius:"10px", marginRight:"10px" }}></span>Mandatory</ListItem>
           <ListItem sx={{padding:"0"}}><span style={{background:"#D3E1F6", height:"12px", width:"12px", borderRadius:"10px", marginRight:"10px" }}></span>Optional</ListItem>
      </List>

</Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          borderTop: "1px solid #e5e7eb",
          borderLeft: "1px solid #e5e7eb",
             "&:last-child":{
                  borderLeft: "none",
              }
        }}
      >
        {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map((day, index) => (
          <Box
            key={day}
            sx={{
              p: 1.5,
              textAlign: "center",
              fontWeight: 700,
              fontSize:"14px",
              borderRight: 
              index === 6 ? "none" :
              "1px solid #e5e7eb",
              borderBottom: "1px solid #e5e7eb",
              background:"#f9f9f9"
            }}
          >
            {day}
          </Box>
        ))}

        {calendarDays.map((day, index) => {
          const date = day
            ? currentMonth.date(day).format("YYYY-MM-DD")
            : null;

          const holiday = holidays.find((h) => h.date === date);

          return (
        <Box
  key={index}
  sx={{
    minHeight: 114,
    p: 1,
    borderRight:
      (index + 1) % 7 === 0
        ? "none"
        : "1px solid #e5e7eb",
    borderBottom: "1px solid #e5e7eb",
    bgcolor: holiday ? "#f8fafc" : "#fff",
  }}
>
              {day && (
                <>
                  <Typography fontWeight={700}>{day}</Typography>

                  {holiday && (
                    <Box
                      sx={{
                        mt: 2,
                        px: 1,
                        py: 0.5,
                        borderRadius: 1,
                        width: "fit-content",
                        bgcolor:
                          holiday.type === "mandatory"
                            ? "#0052cc"
                            : "#dbeafe",
                        color:
                          holiday.type === "mandatory"
                            ? "#fff"
                            : "#64748b",
                        fontSize: 12,
                        fontWeight: 600,
                      }}
                    >
                      {holiday.title}
                    </Box>
                  )}
                </>
              )}
            </Box>
          );
        })}
      </Box>
    </Card>
  );
}