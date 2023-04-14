
import React, { useEffect, useState } from 'react'
import { NavLink } from "react-router-dom";

const StaffHome = () => {
  
  const [admin, setAdmin] = useState();
  const [userData, setUserData] = useState([]);
  const [userStaffMsgData, setUserStaffMsgData] = useState([]);
  const [message, setMessage] = useState(" ");
  const [staff, setStaff] = useState([]);
  const [collection, setCollection] = useState([]);

  useEffect(() => { getStaffUser() }, []);
  useEffect(() => { getStaffMsg() }, []);


  //set reply form details
  const replyMessage = (e) => {
    setMessage(e.target.value);
  }

  //get details of user's appointment
  const getStaffUser = () => {
    fetch("/getUserStaff", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        setUserData(data.data);
        setCollection(data.data);
      });
  }

  //get details of user's contactus (messsage)
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

  //send approval message
 const sendApprovalMail = (mail) => {
  if (window.confirm(`Approve Appointment for ${mail}`)) {
    fetch("/mailapp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: mail,
        subject: "Approved Appointment",
        text: "Your appointment with rajeshwari laundry is approved on given time.",
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
        getStaffUser();
      })
      .catch((error) => {
        console.error(error);
        alert(error.message);
      });
    
    //delete user from staff site
    fetch("/deleteUserStaff", {
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
        getStaffUser();
      });
  }
};
  
  //send rejection mail
 const sendRejectMail = (mail) => {
  if (window.confirm(`Reject Appointment for ${mail}`)) {
    fetch("/mailrej", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to: mail,
        subject: "Rejected Appointment",
        text: "Your appointment with rajeshwari laundry is rejected on given time.",
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
        getStaffUser();
      })
      .catch((error) => {
        console.error(error);
        alert(error.message);
      });
    
    //delete user from staff site
     fetch("/deleteUserStaff", {
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
        getStaffUser();
      });
  }
};
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
        getStaffUser();
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
    <div className='center'>
         
      <table className='size' style={{border:"1px solid black"}}>
        <thead>
          <tr style={{border:"2px solid black"}}>
            <th className='heading' style={{border:"2px solid black"}}>name</th>
            <th className='heading' style={{border:"2px solid black"}}>phone</th>
            <th className='heading' style={{border:"2px solid black"}}>email</th>
            <th className='heading' style={{border:"2px solid black"}}>pickupDate</th>
            <th className='heading' style={{border:"2px solid black"}}>deliveryDate</th>
            <th className='heading' style={{border:"2px solid black"}}>pickupAddress</th>
            <th className='heading' style={{border:"2px solid black"}}>deliveryAddress</th>
            <th className='heading' style={{border:"2px solid black"}}>Services</th>
            <th className='heading' style={{border:"2px solid black"}}>Comment</th>
            <th className='heading' style={{border:"2px solid black"}}>Approve</th>
            <th className='heading' style={{border:"2px solid black"}}>Reject</th>
          </tr>
        </thead>

        <tbody>
          {userData.map((i, key) => {
            return (
              <tr key={key}>
                <td style={{ border: "2px solid black" }}>{i.name}</td>
                <td style={{ border: "2px solid black" }}>{i.phone}</td>
                <td style={{ border: "2px solid black" }}>{i.email}</td>
                <td style={{ border: "2px solid black" }}>{i.pickupDate}</td>
                <td style={{ border: "2px solid black" }}>{i.deliveryDate}</td>
                <td style={{ border: "2px solid black" }}>{i.pickupAddress}</td>
                <td style={{ border: "2px solid black" }}>{i.deliveryAddress}</td>
                <td style={{ border: "2px solid black" }}>{i.service}</td>
                <td style={{ border: "2px solid black" }}>{i.additionalComment}</td>
                <td style={{ border: "2px solid black",cursor:"pointer" }} onClick={() => { sendApprovalMail(i.email) }} className='approve'>Approve</td>
                <td style={{ border: "2px solid black", cursor: "pointer" }} onClick={() => { sendRejectMail(i.email) }} className='reject'>Reject</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      </div>

      <h1>Customer Query</h1>
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
                <td style={{ border: "2px solid black" }}><input onChange={replyMessage} type="text" name="reply"/></td>
                <td style={{ border: "2px solid black",cursor:"pointer" }} onClick={() => { sendMessageMail(i.email, i.message) }} className='approve'>Reply</td>
              </tr>
            )
          })} 
        </tbody>
      </table>
      
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
            </>
  )
}

export default StaffHome;
