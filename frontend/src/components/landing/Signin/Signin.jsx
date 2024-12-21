import { TextField, Button, Typography, Card } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export function Signin() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  return (
    <div
      style={{
        backgroundColor: "white",
        fontFamily: "cursive",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          borderRadius: "10px",
          width: "370px",
          justifyContent: "center",
          color: "white",
          height: "100vh",
          border: "5px solid white",
        }}
      >
        <div
          style={{
            marginTop: "-60px",
          }}
        >
          {" "}
          <img
            src="https://leetcode.com/favicon-96x96.png"
            alt="Practice-Hub"
            style={{ display: "flex", marginLeft: "auto", marginRight: "auto" }}
          />
          <Typography
            onClick={() => {
              navigate("/");
            }}
            variant="h5"
            style={{ color: "black", fontFamily: "cursive", cursor: "pointer" }}
          >
            Practice Hub
          </Typography>
        </div>
        <div
          style={{
            marginTop: "100px",
            marginBottom: "0px",
          }}
        >
          <TextField
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            label="Username"
            variant="outlined"
            fullWidth
            style={{
              backgroundColor: "white",
              borderRadius: "5px",
              marginBottom: "20px",
            }}
          />
          <TextField
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
            style={{
              backgroundColor: "white",
              borderRadius: "5px",
              marginBottom: "20px",
            }}
          />
        </div>
        <Button
          variant="contained"
          fullWidth
          style={{
            backgroundColor: "#4dabf5",
            color: "white",
            padding: "10px",
            borderRadius: "5px",
            fontWeight: "bold",
            width: "50%",
          }}
          onClick={async () => {
            try {
              const res = await axios.post(
                `${import.meta.env.VITE_BACKEND_URL}/signin/`,
                {
                  username: username,
                  password: password,
                },
                {
                  headers: {
                    "Content-type": "application/json",
                  },
                }
              );
              const data = res.data;
              console.log(data);
              alert("Login SuccessFully!");
              navigate("/content");
            } catch (err) {
              if (err) {
                alert("Invalid username or password. Please try again.");
              }
            }
          }}
        >
          Sign in
        </Button>
        <Typography variant="h7" style={{ color: "black", marginTop: "20px" }}>
          Not a User?{" "}
          <Link to="/signup" style={{ color: "#4dabf5" }}>
            Signup
          </Link>
        </Typography>
      </Card>
    </div>
  );
}

<div
  style={{
    backgroundColor: "white",
    fontFamily: "cursive",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }}
>
  <Card
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      borderRadius: "10px",
      width: "370px",
      justifyContent: "center",
      color: "white",
      height: "100vh",
      border: "5px solid white",
    }}
  >
    <div
      style={{
        marginTop: "-60px",
      }}
    >
      <img
        src="https://leetcode.com/favicon-96x96.png"
        alt="Practice-Hub"
        style={{ display: "flex", marginLeft: "auto", marginRight: "auto" }}
      />

      <Typography
        variant="h5"
        style={{ color: "black", fontFamily: "cursive" }}
      >
        Practice Hub{" "}
      </Typography>
    </div>
    <div
      style={{
        marginTop: "100px",
        marginBottom: "0px",
      }}
    >
      <TextField
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        label="Username"
        variant="outlined"
        fullWidth
        style={{
          backgroundColor: "white",
          borderRadius: "5px",
          marginBottom: "20px",
        }}
      />
      <TextField
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        label="Password"
        variant="outlined"
        type="password"
        fullWidth
        style={{
          backgroundColor: "white",
          borderRadius: "5px",
          marginBottom: "20px",
        }}
      />
    </div>

    <Button
      variant="contained"
      fullWidth
      style={{
        backgroundColor: "#4dabf5",
        color: "white",
        padding: "10px",
        borderRadius: "5px",
        width: "50%",
        fontWeight: "bold",
      }}
      onClick={async () => {
        try {
          const res = await axios.post(
            `${import.meta.env.VITE_BACKEND_URL}/signup/`,
            {
              username: username,
              password: password,
            },
            {
              headers: {
                "Content-type": "application/json",
              },
            }
          );

          const data = res.data;
          console.log(data);
          alert("Signup SuccessFully! Click on Signin to login");
        } catch (err) {
          if (err) {
            alert(
              "Username already existed. Please Choose a different username"
            );
          }
        }
      }}
    >
      Signup
    </Button>
    <Typography variant="h7" style={{ color: "black", marginTop: "20px" }}>
      Already a User?{" "}
      <Link to="/signin" style={{ color: "#4dabf5" }}>
        Signin
      </Link>
    </Typography>
  </Card>
</div>;
