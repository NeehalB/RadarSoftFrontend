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
import { addUser } from "../../store/users/User.Action";
import { useNavigate } from "react-router-dom";

interface signUpData {
  name: string;
  email: string;
  password: string;
}

const SignUp = () => {
  const [signUpData, setSignUpData] = useState<signUpData>({
    name: "",
    email: "",
    password: "",
  });
  const [open, setOpen] = useState<boolean>(false);
  const userDispatch = useAppDispatch();
  const navigate = useNavigate();

  const userData = useAppSelector((state: any) => state.user);

  const handleOnSubmit = (event: any) => {
    event.preventDefault();
    userDispatch(addUser(signUpData));
    navigate("/login");
  };

  useEffect(() => {
    if (userData?.user?.message) {
      setOpen(true);
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
              Sign Up
            </Typography>
            <form autoComplete="off" onSubmit={handleOnSubmit}>
              <TextField
                label="Fullname"
                onChange={(e) =>
                  setSignUpData({ ...signUpData, name: e.target.value })
                }
                required
                type="text"
                sx={{ mb: 3 }}
                fullWidth
                value={signUpData.name}
              />
              <TextField
                label="Email"
                onChange={(e) =>
                  setSignUpData({ ...signUpData, email: e.target.value })
                }
                required
                type="email"
                sx={{ mb: 3 }}
                fullWidth
                value={signUpData.email}
              />
              <TextField
                label="Password"
                onChange={(e) =>
                  setSignUpData({ ...signUpData, password: e.target.value })
                }
                required
                type="password"
                sx={{ mb: 3 }}
                fullWidth
                value={signUpData.password}
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

export default SignUp;
