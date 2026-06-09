"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Box } from "@mui/material";

import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";

export default function DashboardLayout({ children }) {
  const router = useRouter();

  useEffect(() => {
    const auth = localStorage.getItem("auth");

    if (!auth) {
      router.replace("/");
    }
  }, [router]);

  return (
    <Box>
      <Navbar />

      <Box sx={{ display: "flex", }}>
        <Sidebar />

        <Box sx={{ flexGrow: 1, p: 3, marginLeft:"260px"  }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
}