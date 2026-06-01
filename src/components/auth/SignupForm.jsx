"use client";

import { Box, TextField, Button } from "@mui/material";

export default function SignupForm() {
  const handleSignup = () => {
    alert("Account created!");
  };

  return (
    <Box sx={{ width: "100%", display: "flex", flexDirection: "column", gap: 2 }}>
      <TextField label="Name" />
      <TextField label="Email" />
      <TextField label="Password" type="password" />

      <Button variant="contained" onClick={handleSignup} sx={{background:"#4d397b", padding:"10px 20px"}} >
        Sign Up
      </Button>
    </Box>
  );
}