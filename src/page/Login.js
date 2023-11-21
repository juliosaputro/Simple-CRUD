import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  FormControlLabel,
  Button,
  Checkbox,
} from "@mui/material";
import AlertInfo from "../components/AlertInfo";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigation = useNavigate();
  const [errorAlert, setErrorAlert] = useState("none");
  const [successAlert, setSuccessAlert] = useState("none");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    if (
      data.get("username") === "username" &&
      data.get("password") === "password"
    ) {
      setSuccessAlert("flex");
      setTimeout(() => {
        setSuccessAlert("none");
        navigation("/Home");
      }, 1000);
    } else {
      setErrorAlert("flex");
      setTimeout(() => {
        setErrorAlert("none");
      }, 1000);
    }
  };
  return (
    <Container component={"main"} maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box sx={{ position:'absolute'}}>
        <AlertInfo
          severity="success"
          title="Login Sukses!"
          displayed={successAlert}
        />
        <AlertInfo
          severity="error"
          title="Username atau Password Salah!"
          displayed={errorAlert}
        />
        </Box>
        <Typography component="h1" variant="h5" fontWeight={"bold"}>
          Sign in
        </Typography>
        <Box
          component={"form"}
          onSubmit={handleSubmit}
          noValidate
          sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            type="password"
            id="password"
            label="Password"
            name="password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
