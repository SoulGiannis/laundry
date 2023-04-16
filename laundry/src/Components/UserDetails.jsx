import React, { useEffect, useState } from "react";
import AdminHome from "./AdminHome";
import StaffHome from "./StaffHome";

import Home from "./Home";

export default function UserDetails() {
    const [userData, setUserData] = useState("");
  const [admin, setAdmin] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
  fetch("/userData", {
    method: "POST",
    crossDomain: true,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      token: window.localStorage.getItem("token"),
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data, "userData");
      if (data.data.userType === "staff") {
        window.location.href = "/dashboard";
      }
      if (data.data.userType === "admin") {
        setAdmin(true);
      } else {
        setUserData(data.data);
        setUsername(data.data.username);
        setEmail(data.data.email);
      }
      if (data.data === "token expired") {
        alert("Token expired login again");
        window.localStorage.clear();
        window.location.href = "/login";
      }
    });
}, []);

    return admin ? <AdminHome /> : <Home username={username}/>;
}
