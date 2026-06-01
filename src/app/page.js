"use client";

import { useState } from "react";
import { Box, Button, Typography, Card, CardContent } from "@mui/material";

import LoginForm from "@/components/auth/LoginForm";
import SignupForm from "@/components/auth/SignupForm";

export default function Home() {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <Box sx={styles.wrapper}>
    
      <Box sx={styles.bg} />

      <Box sx={styles.blob1} />
      <Box sx={styles.blob2} />
      <Box sx={styles.blob3} />

      {/* 💎 Auth Card */}
        <Typography variant="h1" sx={{fontSize:"40px", color:"#fff", fontWeight:"600", marginBottom:"30px"}}>Logo</Typography>
      <Card sx={styles.card}>
        <CardContent sx={styles.content}>
          <Box sx={{marginBottom:"20px"}}>
          <Typography variant="h1" sx={{fontWeight:"600", fontSize:"30px"}}>
            {isSignup ? "Create Account" : "Welcome Back"}
          </Typography>

          <Typography variant="body2" sx={{ opacity: 0.7 }}>
            {isSignup
              ? "Start your journey with us today"
              : "Login to continue to your dashboard"}
          </Typography>
</Box>
          {/* Forms */}
          <Box sx={{ width: "100%" }}>
            {isSignup ? <SignupForm /> : <LoginForm />}
          </Box>

          {/* Toggle Button */}
          <Button onClick={() => setIsSignup(!isSignup)} sx={styles.button} >
            {isSignup ? "Already have an account? Login" : "Create new account"}
          </Button>

        </CardContent>
      </Card>
    </Box>
  );
}


const styles = {
  wrapper: {
    height: "100vh",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    background: "#050816",
    flexDirection:"column"
  },

  /* subtle animated gradient layer */
  bg: {
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(circle at 20% 30%, #4facfe33, transparent 40%)," +
      "radial-gradient(circle at 80% 70%, #a855f733, transparent 40%)",
    animation: "pulse 8s infinite alternate",
  },

  card: {
    width: 420,
    zIndex: 10,
    borderRadius: 3,
    p: 2,
    backdropFilter: "blur(18px)",
    background: "rgb(255, 255, 255)",
    border: "1px solid rgba(255,255,255,0.15)",
    boxShadow: "0 25px 80px rgba(0,0,0,0.6)",
  },

  content: {
    display: "flex",
    flexDirection: "column",
    gap: 1,
    color: "#361f5b",
    textAlign:"center",
  },

  button: {
    mt: 1,
    py: 1.2,
    color: "#fff",
    textTransform: "none",
    background: "#455376",
    transition: "0.3s",
  },

  /* blobs */
  blob1: {
    position: "absolute",
    width: 320,
    height: 320,
    background: "#4facfe",
    borderRadius: "50%",
    filter: "blur(140px)",
    top: "10%",
    left: "10%",
    animation: "float1 10s infinite alternate",
  },

  blob2: {
    position: "absolute",
    width: 380,
    height: 380,
    background: "#a855f7",
    borderRadius: "50%",
    filter: "blur(150px)",
    bottom: "10%",
    right: "10%",
    animation: "float2 12s infinite alternate",
  },

  blob3: {
    position: "absolute",
    width: 250,
    height: 250,
    background: "#22c55e",
    borderRadius: "50%",
    filter: "blur(130px)",
    top: "50%",
    left: "50%",
    animation: "float3 14s infinite alternate",
  },
};