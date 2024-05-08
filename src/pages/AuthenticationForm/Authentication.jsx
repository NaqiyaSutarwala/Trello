import React, { useState } from "react";
import Card from "@mui/material/Card";
import logo from "../../assets/images/logo.png";
import googleLogo from "../../assets/images/googleLogo.png";
import { Button, InputAdornment, TextField } from "@mui/material";
import Paragraph from "../../components/Paragraph";
import styles from "./Authentication.module.css";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { Navigate, useNavigate } from "react-router-dom";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useDispatch } from "react-redux";
import { logIn } from "../../ListsSlice";

const Authentication = ({ type }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginDispatch = () => {
    if (type === "login" && showPassword) {
      dispatch(logIn({ username: userName, password: password }));
      navigate("/workspace");
    }
  };

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
          onBlur={(e) => {
            setUserName(e.target.value);
          }}
          disabled={showPassword}
          InputProps={{
            endAdornment: showPassword && (
              <InputAdornment
                position="end"
                onClick={() => {
                  setShowPassword(false);
                }}
              >
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

        {(type === "signup" || showPassword) && (
          <TextField
            onBlur={(e) => {
              setPassword(e.target.value);
            }}
            InputProps={{
              endAdornment: passwordVisible ? (
                <InputAdornment
                  style={{ cursor: "pointer" }}
                  position="end"
                  onClick={() => {
                    setPasswordVisible((passwordVisible) => !passwordVisible);
                  }}
                >
                  <VisibilityIcon />
                </InputAdornment>
              ) : (
                <InputAdornment
                  style={{ cursor: "pointer" }}
                  position="end"
                  onClick={() => {
                    setPasswordVisible((passwordVisible) => !passwordVisible);
                  }}
                >
                  <VisibilityOffIcon />
                </InputAdornment>
              ),
            }}
            type={passwordVisible ? "text" : "password"}
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

        {!(type === "login") && (
          <Paragraph style={styles.signInText}>
            By signing up, I accept the Atlassian Cloud Terms of Service and
            acknowledge the Privacy Policy.
          </Paragraph>
        )}

        <Button
          variant="contained"
          sx={{
            marginTop: "25px",
          }}
          className={styles.button}
          onClick={() => {
            type === "login" && setShowPassword(true); //TODO Else condition
            loginDispatch();
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
          {type === "login" ? (
            <>
              Cant Log in?
              <span
                onClick={() => {
                  setShowPassword(false);
                  navigate("/signup");
                }}
                style={{ cursor: "pointer", marginLeft: "5px" }}
              >
                Create an account
              </span>
            </>
          ) : (
            <span
              onClick={() => {
                navigate("/login");
              }}
              style={{ cursor: "pointer", marginLeft: "5px" }}
            >
              Already have an Atlassian account? Log in
            </span>
          )}
        </Paragraph>
      </Card>
    </div>
  );
};
export default Authentication;
