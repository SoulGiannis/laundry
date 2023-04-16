  import React,{useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom';
import { Table } from 'react-bootstrap';

export default function Order() {

  const [appiontment, setAppointment] = useState([]);
  useEffect(()=>{ getAppointment()},[])
      //get details of user's orders
  const getAppointment = () => {
    fetch("/getAppointmentOrders", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        setAppointment(data.data);
      });
  }


  //mail functions
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
        getAppointment();
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
        getAppointment();
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
        getAppointment();
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
        getAppointment();
      });
  }
};

    return (
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
        <h1 style={{ textAlign: "center" }}>Your Appointments</h1>
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
                <th className='heading' style={{ border: "2px solid black" }}>Comment</th>
                <th className='heading' style={{border:"2px solid black"}}>Approve</th>
            <th className='heading' style={{border:"2px solid black"}}>Reject</th>
          </tr>
        </thead>

        <tbody>
          {appiontment.map((i, key) => {
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
      </div>
    );
  }
