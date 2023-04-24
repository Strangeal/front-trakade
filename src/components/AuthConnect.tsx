import { Box, Button, Divider, IconButton, Typography } from "@mui/material";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import styles from "../styles/AuthConnect.module.css";

import React from "react";

type Props = {};

const AuthConnect = (props: Props) => {
  return (
    <>
      <Box className={styles.authIconContainer}>
        <Button className={styles.authBtnIcons}>
          <FcGoogle className={styles.authIcons} />
        </Button>
        <Button className={`${styles.authBtnIcons} ${styles.authIconFb}`}>
          <FaFacebookF className={styles.authIcons} />
        </Button>
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
