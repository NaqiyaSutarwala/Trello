import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import logo from "../../assets/images/logo.png";
import googleLogo from "../../assets/images/googleLogo.png";
import { Button, InputAdornment, TextField } from "@mui/material";
import Paragraph from "../../components/Paragraph";
import styles from "./Authentication.module.css";
import ModeEditIcon from "@mui/icons-material/ModeEdit";

const Authentication = ({ type }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={styles.mainDiv}>
      {/* Illustrator Images */}
      <div className={styles.imageLeft} />
      <div className={styles.imageRight} />
      <Card className={styles.card}>
        {/* Main Card */}
        <img src={logo} alt="logo" className={styles.logoImg} />
        <h5 className={styles.signUpTitle}>
          {type === "login" ? "Login" : "Signup"} to continue
        </h5>
        <TextField
          InputProps={{
            endAdornment: showPassword && (
              <InputAdornment position="end">
                <ModeEditIcon />
              </InputAdornment>
            ),
          }}
          id="outlined-basic"
          label="Enter your email"
          variant="outlined"
          sx={{
            height: "35px",
            margin: "10px",
            width: "100%",
          }}
        />

        {!(type === "login") && (
          <Paragraph style={styles.signInText}>
            By signing up, I accept the Atlassian Cloud Terms of Service and
            acknowledge the Privacy Policy.
          </Paragraph>
        )}

        {showPassword && (
          <TextField
            id="outlined-basic"
            label="Enter your password"
            variant="outlined"
            sx={{
              margin: "20px",
              height: "35px",
              width: "100%",
            }}
          />
        )}

        <Button
          variant="contained"
          sx={{
            marginTop: "25px",
          }}
          className={styles.button}
          onClick={() => {
            type === "login" && setShowPassword(true); //TODO Else condition
          }}
        >
          {type === "login" ? "Continue" : "Sign up"}
        </Button>

        <Paragraph style={styles.text}>Or continue with:</Paragraph>

        <Button variant="outlined" className={styles.button}>
          <img src={googleLogo} alt="google Logo" className={styles.authLogo} />
          <span className={styles.authText}>Google</span>
        </Button>

        <Paragraph style={styles.signUpParagraph}>
          {/* TODO: Add links */}
          {type === "login"
            ? "Cant Log in? Create an account"
            : "Already have an Atlassian account? Log in"}
        </Paragraph>
      </Card>
    </div>
  );
};
export default Authentication;
