import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";

export default function Register() {

  const history = useHistory()
  const [user, setuser] = useState({
    username : "",
    email : "",
    password : ""
  });

  //Handle Inputs
  const handleInput = (event)=>{
    let name = event.target.name;
    let value = event.target.value;

    setuser({...user, [name]:value})
  }

  //Handle Submit
  const handleSubmit = async (event)=>{
    event.preventDefault();
    //Object Destrucring
    //Store Object into Variables
    const {username, email, password} = user;
    try {
      //
    const res = await fetch('/register', {
      method : "POST",
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify({
        username,email,password
      })
    })

    if (res.status === 400 || !res) {
      window.alert("Already Used Details");
    }else{
      window.alert("Registered Successfully");
      history.pushState('/Login'); //history.pushState();
    }
  }catch(error){
      console.log(error);
    }
  }

  return (
    <div>
      <div className="container shadow my-5">
        <div className="row justify-content-center">
          <div className="col-md-5 d-flex flex-column align-items-center text-white justify-content-center order-2 form">
            <h1 className="display-4 fw-bolder">Hello </h1>
            <p className="lead text-center">Enter your Details to Register</p>
            <h5 className="mb-4">OR</h5>
            <NavLink to="/login" className="btn btn-outline-light rounded-pill pb-2 w-50">
              LOGIN
            </NavLink>
          </div>
          <div className="col-md-6 p-5">
            <h1 className="display-6 fw-bolder m-5">REGISTER</h1>
            <form action="" onSubmit={handleSubmit} method="POST">
              <div className="mb-3">
                <label htmlfor="exampleInputEmail1" className="form-label" id="username">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="username"
                  value={user.username}
                  onChange={handleInput}
                />
              </div>
              <div className="mb-3">
                <label htmlfor="exampleInputEmail1" className="form-label" id="email">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="email"
                  value={user.email}
                  onChange={handleInput}
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label htmlfor="exampleInputPassword1" className="form-label" id="password">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  name="password"
                  value={user.password}
                  onChange={handleInput}
                />
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" htmlfor="exampleCheck1">
                  I Agree Terms and Conditions
                </label>
              </div>
              <button type="submit" className="btn btn-primary w-100 mt-4">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
