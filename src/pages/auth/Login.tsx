import { useTheme } from "@mui/material/styles";
import { CheckBox } from "@mui/icons-material";
import {
  Box,
  Button,
  Checkbox,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthConnect from "../../components/AuthConnect";
import { useAppDispatch } from "../../helpers/useRedux";
import { loginUser } from "../../redux/authen/authSlice";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import handleToastr from "../../helpers/handleToastr";
import { DevTool } from "@hookform/devtools";
import { LoginSocialFacebook } from "reactjs-social-login";
// import { FacebookLoginButton } from "reactjs-social-login"
type LoginValueProp = {
  email: string;
  password: string;
  remember: boolean;
};

// [theme.breakpoints.up("sm")]: {}

const Login = () => {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const form = useForm<LoginValueProp>();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = form;

  let validateMessage = "";
  const onSubmit = (data: LoginValueProp) => {
    dispatch(loginUser(data)).then((res) => {
      console.log(res);
      if (res.meta.requestStatus === "fulfilled") {
        const message = "Logged in successfully😊";
        const icon = "success";
        handleToastr(message, icon);
        navigate("/");
      }
      if (res.meta.requestStatus === "rejected") {
        const message = "Invalid emal or password🥺";
        const icon = "error";
        handleToastr(message, icon);
      }
    });
  };

  return (
    <>
      <Grid container>
        <Grid
          item
          xs={12}
          md={5}
          lg={3}
          sx={{
            [theme.breakpoints.up("md")]: {
              boxShadow: 3,
              borderRadius: 4,
              my: 3,
              ml: 5,
            },
          }}
        >
          <Typography variant="h3" sx={{ textAlign: "center" }}>
            Brand logo
          </Typography>
          <Box sx={{ [theme.breakpoints.down("md")]: { display: "none" } }}>
            <img src="https://res.cloudinary.com/dxsom7jmx/image/upload/v1682044390/Trakade/Authen/3d-girl-character_cxpgxz.png" />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          lg={8}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Box sx={{ mx: 2 }}>
            <AuthConnect />
            <Box sx={{}}>
              <Typography variant="h5"> Sign in to brand</Typography>
              <Typography>Enter your details below</Typography>
            </Box>
            <Box
              component="form"
              autoComplete="off"
              onSubmit={handleSubmit(onSubmit)}
              noValidate
            >
              <TextField
                sx={{ my: 1.3 }}
                fullWidth
                label="Email Address"
                type="email"
                {...register("email", {
                  required: "Invalid email format",
                })}
                error={!!errors.email}
                helperText={errors.email?.message}
              />
              <TextField
                sx={{ my: 1.3 }}
                fullWidth
                label="Password"
                type="password"
                {...register("password", { required: "Wrong password" })}
                error={!!errors.password}
                helperText={errors.password?.message}
              />
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <FormControlLabel
                  control={<Checkbox {...register("remember")} />}
                  label="Remember me"
                />
                <Typography sx={{ color: "#4CBB17" }}>
                  <Link to="">Forgot password?</Link>
                </Typography>
              </Box>
              <Button
                type="submit"
                size="large"
                fullWidth
                sx={{ bgcolor: "#4CBB17", color: "#fff", my: 2.3 }}
              >
                Login
              </Button>
              <Typography sx={{ textAlign: "center" }}>
                Don't have an account?
                <Typography component="span" sx={{ color: "#4CBB17" }}>
                  <Link to=""> Get started</Link>
                </Typography>
              </Typography>
              <DevTool control={control} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
