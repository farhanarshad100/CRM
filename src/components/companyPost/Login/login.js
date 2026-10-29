"use client"

import { Padding } from "@mui/icons-material";
import { Box } from "@mui/material";
import react, { useState } from "react";
const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
const [message, setMessage] = useState ("");

const handleLogin = async (e) => {
    e.preventDefault();
    setMessage("loading...");

    try {
      const response = await fetch(
        "https://dummyjson.com/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: username,
            password: password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      setMessage("Login successful!");
      console.log("User:", data);
      console.log("Access Token:", data.accessToken);

    } catch (error) {
      setMessage(error.message);
    }
  };






  return (
    <>
      <h1 style={{ marginBottom: "30px" }}>Login</h1>
<form onSubmit={handleLogin}>
  <input
    type="text"
    placeholder="Enter username"
    value={username}
    onChange={(e) => setUsername(e.target.value)}
    required
  />

  <input
    type="password"
    placeholder="Enter password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    required
  />

  <button type="submit">Login</button>
</form>
    </>
  );
};
export default Login;
