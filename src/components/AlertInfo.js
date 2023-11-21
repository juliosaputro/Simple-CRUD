import React from "react";
import { Box, Alert } from "@mui/material";

export default function AlertInfo({ title = "", severity = "", displayed }) {
  return (
    <Box sx={{ flex: 1, display: displayed }}>
      <Alert severity={severity} sx={{ width: "100%" }}>
        {title}
      </Alert>
    </Box>
  );
}
