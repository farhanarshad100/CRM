"use client"

import { Padding } from "@mui/icons-material";
import { Box } from "@mui/material";
import react, { useState } from "react";
const Login = () => {

const [email, setEmail] = useState("");
const [password, setPassword]= useState ("");



const handleLogin = (e) =>{
e.preventDefault();
console.log("Email", email);
console.log("Password", password)

};


  return (
    <>
      <h1 style={{ marginBottom: "30px" }}>Login</h1>
<form onSubmit={handleLogin}>
<Box sx={{marginBottom:"20px"}}>
  <label style={{display:"block", marginBottom:"10px"}}>Please enter your email Id</label>
  <input type="email" value={email} placeholder="Email" style={{border:"1px solid #000", padding:"10px"}}
  onChange={(e) =>setEmail(e.target.value)}
  />
</Box>

<Box>
  <label style={{display:"block", marginBottom:"10px"}}>Please enter your email Id</label>
  <input onChange={(e) => setPassword(e.target.value)} type="password" value={password} placeholder="Email" style={{border:"1px solid #000", padding:"10px"}} />
</Box>

    <button type="submit">Login</button>
</form>
    </>
  );
};
export default Login;
