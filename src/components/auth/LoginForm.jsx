"use client";

import { useRouter } from "next/navigation";
import { Box, TextField, Button } from "@mui/material";

export default function LoginForm() {
  const router = useRouter();

const handleLogin = () => {
  console.log("Login clicked");

  localStorage.setItem("auth", "true");

  router.push("/dashboard");

  console.log("Navigation called");
};

  return (
    <Box
      sx={{
        width: 350,
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <TextField label="Email" fullWidth />
      <TextField label="Password" type="password" fullWidth />

      <Button
        variant="contained"
        onClick={handleLogin}
      >
        Login
      </Button>
    </Box>
  );
}