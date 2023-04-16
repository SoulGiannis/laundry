  import React,{useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom';
import { Table } from 'react-bootstrap';

export default function Query() {


  const [userStaffMsgData, setUserStaffMsgData] = useState([]);
  useEffect(() => { getStaffMsg() }, []);
  const getStaffMsg = () => {
    fetch("/getUserMsg", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        setUserStaffMsgData(data.data);
      });
    }
    
    
  //send messageReply mail
  const sendMessageMail = (mail, message) => {
    
  if (window.confirm(`Send Reply to ${mail} via mail`)) {
    fetch("/sendMailMsg", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: mail,
        subject: message,
        text: "hello world",
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Failed to send mail");
        }
      })
      .then((data) => {
        alert(data.data);
        getStaffMsg();
      })
      .catch((error) => {
        console.error(error);
        alert(error.message);
      });
    
    //delete user from staff site
     fetch("/deleteUserMessage", {
      method: "POST",
      crossDomain: true,
      headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        userEmail:mail,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        alert(data.data);
        getStaffMsg();
      });
  }
};
    return (
        <>
      <div>
          <div>
          <nav className="navbar navbar-expand-lg shadow">
    <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <NavLink className="navbar-brand fs-4 mx-auto fw-bolder text-center" to="/">Rajeshwari Laundry</NavLink>
      <NavLink to="/logout" className="btn btn-outline-primary ms-2 px-4 rounded-pill" >
      <i className="fa fa-sign-out me-2"></i>Logout</NavLink>
      </div>
    </div>
  </nav>
      </div>
        <h1 style={{ textAlign: "center" }}>Customer Query</h1>
           <table className='size' style={{border:"1px solid black"}}>
        <thead>
          <tr style={{border:"2px solid black"}}>
            <th className='heading' style={{border:"2px solid black"}}>name</th>
            <th className='heading' style={{border:"2px solid black"}}>email</th>
            <th className='heading' style={{border:"2px solid black"}}>Message</th>
            <th className='heading' style={{border:"2px solid black"}}>Reply to user</th>
            <th className='heading' style={{border:"2px solid black"}}>Send</th>
          </tr>
        </thead>

        <tbody>
          {userStaffMsgData.map((i, key) => {
            return (
              <tr key={key}>
                <td style={{ border: "2px solid black" }}>{i.name}</td>
                <td style={{ border: "2px solid black" }}>{i.email}</td>
                <td style={{ border: "2px solid black" }}>{i.message}</td>  
                <td style={{ border: "2px solid black" }}><input type="text" name="reply"/></td>
                <td style={{ border: "2px solid black",cursor:"pointer" }} onClick={() => { sendMessageMail(i.email, i.message) }} className='approve'>Reply</td>
              </tr>
            )
          })} 
        </tbody>
      </table>
      </div>
          </>
    );
  }
