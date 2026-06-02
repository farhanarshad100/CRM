import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";

const ExportReport = () => {
  const [value, setValue] = React.useState(dayjs());
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Typography variant="h5" sx={{ fontSize: "24px", fontWeight: "700" }}>
          Attendance Log
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontSize: "16px", color: "#424656", fontWeight: "400" }}
        >
          Review and manage employee hours for the current billing cycle.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          background: "#fff",
          border: "1px solid rgba(226, 232, 240, 0.1)",
          boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
          padding: "10px",
          gap: "10px",
        }}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            sx={{
              background: "#e5e9eb",
              borderRadius: "5px",

              "& .MuiPickersOutlinedInput-notchedOutline": {
                border: "none",
              },
              "& .MuiPickersInputBase-sectionsContainer": {
                padding: "10px 0",
              },
            }}
            value={value}
            onChange={(newValue) => setValue(newValue)}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        <Button
          variant="contained"
          sx={{
            background: "#dbe1ff",
            color: "#003ec8",
            padding: "10px 18px",
            boxShadow: "none",
            display: "flex",
            lineHeight: "0",
            fontSize: "15px",
            alignContent: "center",
            gap: "7px",
            "&:hover": {
              boxShadow: "none",
            },
          }}
        >
          <Image
            src="/images/download-minimalistic.svg"
            alt="Export"
            width={20}
            height={20}
          />
         Export Report
        </Button>
      </Box>
    </Box>
  );
};

export default ExportReport;
