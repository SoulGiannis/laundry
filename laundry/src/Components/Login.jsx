import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";

export default function Login() {
  const history = useHistory();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  //Handle Input
  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    setUser({ ...user, [name]: value });
  };

  //Handle Login
  const handleSubmit = async (event) => { 
    event.preventDefault();
    const { email, password } = user;
    try {
      const res = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      if (res.status === 400 || !res) {
        window.alert("Invalid Credentials");
      } else {
        window.alert("successfull")
        history.push('/');
      }
    } catch (error) {
      console.log(error);
    }
  }
    return (
      <div>
        <div className="container shadow my-5">
          <div className="row">
            <div className="col-md-5 d-flex flex-column align-items-center text-white justify-content-center form">
              <h1 className="display-4 fw-bolder">Welcome</h1>
              <p className="lead text-center">Enter Your Credntials</p>
              <h5 className="mb-4">OR</h5>
              <NavLink
                to="/register"
                className="btn btn-outline-light rounded-pill pb-2 w-50"
              >
                Register
              </NavLink>
            </div>
            <div className="col-md-6 p-5">
              <h1 className="display-6 fw-bolder m-5">LOGIN</h1>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label
                    htmlfor="exampleInputEmail1"
                    className="form-label"
                    id="email"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <label
                    htmlfor="exampleInputPassword1"
                    className="form-label"
                    id=""
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" htmlfor="exampleCheck1">
                    Remember me
                  </label>
                </div>
                <button type="submit" className="btn btn-primary w-100 mt-4">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );

};

