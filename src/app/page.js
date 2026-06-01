"use client";

import { useState } from "react";
import { Box, Button, Typography, Card, CardContent } from "@mui/material";

import LoginForm from "@/components/auth/LoginForm";
import SignupForm from "@/components/auth/SignupForm";

export default function Home() {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <Box sx={styles.wrapper}>
      {/* 🌈 Animated Background */}
      <Box sx={styles.bg} />

      <Box sx={styles.blob1} />
      <Box sx={styles.blob2} />
      <Box sx={styles.blob3} />

      {/* 💎 Auth Card */}
      <Card sx={styles.card}>
        <CardContent sx={styles.content}>
          
          <Typography variant="h4" fontWeight="bold">
            {isSignup ? "Create Account" : "Welcome Back"}
          </Typography>

          <Typography variant="body2" sx={{ opacity: 0.7 }}>
            {isSignup
              ? "Start your journey with us today"
              : "Login to continue to your dashboard"}
          </Typography>

          {/* Forms */}
          <Box sx={{ width: "100%" }}>
            {isSignup ? <SignupForm /> : <LoginForm />}
          </Box>

          {/* Toggle Button */}
          <Button onClick={() => setIsSignup(!isSignup)} sx={styles.button}>
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
    borderRadius: 5,
    p: 1,
    backdropFilter: "blur(18px)",
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.15)",
    boxShadow: "0 25px 80px rgba(0,0,0,0.6)",
  },

  content: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
    color: "#fff",
  },

  button: {
    mt: 1,
    py: 1.2,
    borderRadius: 3,
    fontWeight: "bold",
    color: "#fff",
    textTransform: "none",
    background: "linear-gradient(90deg,#4facfe,#00f2fe)",
    transition: "0.3s",
    "&:hover": {
      transform: "scale(1.03)",
      opacity: 0.9,
    },
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