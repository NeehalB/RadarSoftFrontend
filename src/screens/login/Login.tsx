import {
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
  Box,
  Snackbar,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { login } from "../../store/users/User.Action";
import { useNavigate } from "react-router-dom";

interface loginData {
  email: string;
  password: string;
}

const Login = () => {
  const [loginData, setLoginData] = useState<loginData>({
    email: "",
    password: "",
  });
  const [open, setOpen] = useState<boolean>(false);
  const userDispatch = useAppDispatch();
  const navigate = useNavigate();

  const userData = useAppSelector((state: any) => state.user);

  const handleOnSubmit = (event: any) => {
    event.preventDefault();
    userDispatch(login(loginData));
  };

  useEffect(() => {
    if (userData?.user?.message) {
      setOpen(true);
    }

    if (userData?.loginStatus) {
      localStorage.setItem("token", userData?.token);
      navigate("/");
    }
  }, [userData]);

  const onClose = () => {
    setOpen(false);
  };

  return (
    <Container maxWidth="sm" sx={{ height: "100vh" }}>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        sx={{ height: "100%" }}
      >
        <Box alignItems="center" justifyContent="center">
          <Paper sx={{ padding: "10px" }}>
            <Typography textAlign={"center"} variant="h4" mb={2}>
              Login
            </Typography>
            <form autoComplete="off" onSubmit={handleOnSubmit}>
              <TextField
                label="Email"
                onChange={(e) =>
                  setLoginData({ ...loginData, email: e.target.value })
                }
                required
                type="email"
                sx={{ mb: 3 }}
                fullWidth
                value={loginData.email}
              />
              <TextField
                label="Password"
                onChange={(e) =>
                  setLoginData({ ...loginData, password: e.target.value })
                }
                required
                type="password"
                sx={{ mb: 3 }}
                fullWidth
                value={loginData.password}
              />
              <Button
                variant="contained"
                type="submit"
                disabled={userData.isLoading}
              >
                Submit
              </Button>
            </form>
          </Paper>
        </Box>
      </Grid>
      <Snackbar
        open={open}
        autoHideDuration={5000}
        message={userData?.user?.message}
        onClose={onClose}
      />
    </Container>
  );
};

export default Login;
