import React from "react";
import { AppBar, Box, Typography, Toolbar } from "@mui/material";
import ButtonPrimary from "./ButtonPrimary";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import { IsMobile } from "../helper/responsive";

export default function TopBar({ children }) {
  const navigate = useNavigate();
  return (
    <>
      {IsMobile ? (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar
            sx={{
              backgroundColor: "#16ABF8",
              height: "64px",
              boxShadow: "inherit",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Toolbar
              style={{
                flex: 1,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography
                style={{
                  fontSize: 18,
                  fontWeight: "700",
                  lineHeight: 27,
                }}
              >
                {" "}
                Test FE{" "}
              </Typography>
              <ButtonPrimary
                tittle="Log Out"
                color="#c60000"
                icon={<LogoutIcon style={{ width: "24px", height: "24px" }} />}
                onClick={() => navigate("/")}
              />
            </Toolbar>
          </AppBar>
          <Box component="main" sx={{ p: 3 }}>
            <Toolbar />
            {children}
          </Box>
        </Box>
      ) : (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar
            position="sticky"
            sx={{
              backgroundColor: "#16ABF8",
              height: "8vh",
              boxShadow: "inherit",
              display: "flex",
              justifyContent: "center",
              paddingInline: "220px",
              position: "absolute",
            }}
          >
            <Toolbar
              style={{
                flex: 1,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography
                style={{
                  fontSize: 32,
                  fontWeight: "700",
                  lineHeight: 36,
                }}
              >
                Test FE{" "}
              </Typography>
              <ButtonPrimary
                tittle="Log Out"
                color="#c60000"
                icon={<LogoutIcon style={{ width: "24px", height: "24px" }} />}
                onClick={() => navigate("/")}
              />
            </Toolbar>
          </AppBar>
          <Box component="main" sx={{ p: 3 }}>
            <Toolbar />
            {children}
          </Box>
        </Box>
      )}
    </>
  );
}
