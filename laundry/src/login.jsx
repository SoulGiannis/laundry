import * as React from "react";
import { useState } from "react";
import { useContext } from 'react';
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { Link, useHistory } from "react-router-dom";
import {UserContext} from "../App"
export default function MultiActionAreaCard() {

  const {state ,dispatch} = useContext(UserContext);
  console.log(state);
  const [password, setpassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useHistory();
  const loginuser = async (e) => {
    e.preventDefault();
    
    const data = {
      email: email,
      password: password,
    };
    const response = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const user = await response.json();
    if (response.status === 400 || !user) {
      alert("invalid credentials");
    } else {
      dispatch({ type: "USER", payload: true });
      alert("successfully logged in");
      navigate.push("/");
    }
  };
  return (
    <div className="container d-flex justify-content-center my-5 logn">
      <Card sx={{ maxWidth: 345 }} className="card m-2 p-2">
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          className="logn text-center px-4"
        >
          login
        </Typography>
        <iframe
          src="https://embed.lottiefiles.com/animation/38435"
          title="hhgj"
          style={{ pointerEvents: "none" }}
        ></iframe>

        <form method="POST">
          <div className="form-group">
            <input
              type="email"
              name="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={email}
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <br />
          <div className="form-group">
            <input
              name="password"
              type="password"
              value={password}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              onChange={(e) => setpassword(e.target.value)}
            />
          </div>
          <Link className="m-2" to="/signin">
            <small> new user</small>
          </Link>
          <br />

          <button
            type="submit"
            className="btn btn-primary btn-sm m-2"
            onClick={loginuser}
          >
            login
          </button>
        </form>
      </Card>
      <div className="d-block d-sm-none">
        <br /> <br /> <br /> <br />
      </div>
      <br />
      <br />
    </div>
  );
}
