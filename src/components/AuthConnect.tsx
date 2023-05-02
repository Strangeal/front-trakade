import {
  Box,
  Button,
  Divider,
  IconButton,
  Typography,
  dividerClasses,
} from "@mui/material";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import styles from "../styles/AuthConnect.module.css";
import {
  IResolveParams,
  LoginSocialFacebook,
  objectType,
} from "reactjs-social-login";

import React, { useEffect, useState } from "react";
import { handleAuthResponse } from "../helpers/handleAuthResponse";
import axios from "axios";

type Props = {};

const AuthConnect = (props: Props) => {
  const [profile, setProfile] = useState<any>("");
  const [provider, setProvider] = useState<any>("");

  const handleLogin = ({ provider, data }: IResolveParams) => {
    localStorage.setItem("userData", JSON.stringify(data));
    setProfile(data);
    setProvider(provider);
    createUser();
  };

  useEffect(() => {
    const userData = localStorage.getItem("userData");
    console.log(userData);
    if (userData) {
      setProfile(JSON.parse(userData));
    }
  }, []);

  const createUser = async () => {
    try {
      const res = await fetch("http://localhost:3000/users/tokens/sign_up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(profile),
      });

      if (res.ok) {
        const resData = await res.json();
        console.log(resData);
      } else {
        console.log("Error: " + res.statusText);
      }
    } catch (err) {
      console.log("ErrorCatch:", err);
    }
  };

  return (
    <>
      <Box className={styles.authIconContainer}>
        <Button className={styles.authBtnIcons}>
          <FcGoogle className={styles.authIcons} />
        </Button>
        <>
          {profile ? (
            <div>Welcome</div>
          ) : (
            <LoginSocialFacebook
              appId="152987260824893"
              onResolve={handleLogin}
              onReject={(error) => {
                console.log(error);
              }}
            >
              <Button className={`${styles.authBtnIcons} ${styles.authIconFb}`}>
                <FaFacebookF className={styles.authIcons} />
              </Button>
            </LoginSocialFacebook>
          )}

          {profile ? (
            <div>
              <h3>{profile.name}</h3>
              <img src={profile.picture.data.url} alt="" />
            </div>
          ) : (
            "No user profile found"
          )}
        </>

        <Button className={`${styles.authBtnIcons} ${styles.authIconTw}`}>
          <FaTwitter className={styles.authIcons} />
        </Button>
      </Box>

      <Divider
        sx={{
          my: 3,
          color: "#7e7e7e",
        }}
      >
        OR
      </Divider>
    </>
  );
};

export default AuthConnect;
