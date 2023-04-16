
import React, { useEffect, useState } from 'react'
import { NavLink } from "react-router-dom";

const StaffHome = () => {
  
  const [admin, setAdmin] = useState();
  const [userData, setUserData] = useState([]);
  const [userStaffMsgData, setUserStaffMsgData] = useState([]);
  const [userSaffReportData, setUserSaffReportData] = useState([]);
  const [userStaffBillingData, setUserStaffBillingData] = useState([]);
  const [userStaffOrderData, setUserStaffOrderData] = useState([]);
  const [userStaffInventoryData, setUserStaffInventoryData] = useState([]);
  const [message, setMessage] = useState(" ");
  const [staff, setStaff] = useState([]);
  const [collection, setCollection] = useState([]);

  useEffect(() => { getStaffUser() }, []);
  useEffect(() => { getStaffMsg() }, []);
  useEffect(() => { getStaffOrder() }, []);
  useEffect(() => { getStaffReport() }, []);
  useEffect(() => { getStaffInventory() }, []);
  useEffect(() => { getStaffBilling() }, []);


  //set f form details
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
  const getStaffOrder = () => {
    fetch("/getStaffOrder", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        setUserStaffOrderData(data.data);
      });
  }
  //get details of user's contactus (messsage)
  const getStaffReport = () => {
    fetch("/getStaffReport", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        setUserSaffReportData(data.data);
      });
  }
  //get details of user's contactus (messsage)
  const getStaffInventory = () => {
    fetch("/getStaffInventory", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        setUserStaffInventoryData(data.data);
      });
  }
  //get details of user's contactus (messsage)
  const getStaffBilling = () => {
    fetch("/getStaffBilling", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        setUserStaffBillingData(data.data);
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
        getStaffOrder()
        getStaffInventory()
        getStaffBilling()
        getStaffReport()
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
      <h1>Customer Appointments</h1>   
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

    {/* message of contactus */}
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

    {/* message of Inventory */}
      <h1>Customer Inventory</h1>
           <table className='size' style={{border:"1px solid black"}}>
        <thead>
          <tr style={{border:"2px solid black"}}>
            <th className='heading' style={{border:"2px solid black"}}>name</th>
            <th className='heading' style={{border:"2px solid black"}}>Date</th>
            <th className='heading' style={{border:"2px solid black"}}>Quantity</th>
            <th className='heading' style={{border:"2px solid black"}}>Price</th>
          </tr>
        </thead>

        <tbody>
          {userStaffInventoryData.map((i, key) => {
            return (
              <tr key={key}>
                <td style={{ border: "2px solid black" }}>{i.supplyName}</td>
                <td style={{ border: "2px solid black" }}>{i.dateofSupply}</td>
                <td style={{ border: "2px solid black" }}>{i.quantity}</td>  
                <td style={{ border: "2px solid black" }}>{i.price}</td>  
              </tr>
            )
          })} 
        </tbody>
      </table>

    {/* message of Order */}
      <h1>Customer Order</h1>
           <table className='size' style={{border:"1px solid black"}}>
        <thead>
          <tr style={{border:"2px solid black"}}>
            <th className='heading' style={{border:"2px solid black"}}>name</th>
            <th className='heading' style={{border:"2px solid black"}}>email</th>
            <th className='heading' style={{border:"2px solid black"}}>phone</th>
            <th className='heading' style={{border:"2px solid black"}}>services</th>
            <th className='heading' style={{border:"2px solid black"}}>weight</th>
            <th className='heading' style={{border:"2px solid black"}}>pickup date</th>
            <th className='heading' style={{border:"2px solid black"}}>pickup time</th>
            <th className='heading' style={{border:"2px solid black"}}>delivery date</th>
            <th className='heading' style={{border:"2px solid black"}}>delivery time</th>
          </tr>
        </thead>

        <tbody>
          {userStaffOrderData.map((i, key) => {
            return (
              <tr key={key}>
                <td style={{ border: "2px solid black" }}>{i.name}</td>
                <td style={{ border: "2px solid black" }}>{i.email}</td>
                <td style={{ border: "2px solid black" }}>{i.phone}</td>  
                <td style={{ border: "2px solid black" }}>{i.services}</td>  
                <td style={{ border: "2px solid black" }}>{i.weight}</td>  
                <td style={{ border: "2px solid black" }}>{i.pickupDate}</td>  
                <td style={{ border: "2px solid black" }}>{i.pickupTime}</td>  
                <td style={{ border: "2px solid black" }}>{i.deliveryDate}</td>  
                <td style={{ border: "2px solid black" }}>{i.deliveryTime}</td>  
              </tr>
            )
          })} 
        </tbody>
      </table>

    {/* message of Billing */}
      <h1>Customer Billing</h1>
           <table className='size' style={{border:"1px solid black"}}>
        <thead>
          <tr style={{border:"2px solid black"}}>
            <th className='heading' style={{border:"2px solid black"}}>name</th>
            <th className='heading' style={{border:"2px solid black"}}>quantity</th>
            <th className='heading' style={{border:"2px solid black"}}>price</th>
          </tr>
        </thead>

        <tbody>
          {userStaffBillingData.map((i, key) => {
            return (
              <tr key={key}>
                <td style={{ border: "2px solid black" }}>{i.itemName}</td>
                <td style={{ border: "2px solid black" }}>{i.quantity}</td>
                <td style={{ border: "2px solid black" }}>{i.price}</td>  
              </tr>
            )
          })} 
        </tbody>
      </table>
      
    {/* message of Report */}
      <h1>Customer Report</h1>
           <table className='size' style={{border:"1px solid black"}}>
        <thead>
          <tr style={{border:"2px solid black"}}>
            <th className='heading' style={{border:"2px solid black"}}>date</th>
            <th className='heading' style={{border:"2px solid black"}}>machineId</th>
            <th className='heading' style={{border:"2px solid black"}}>total loads</th>
            <th className='heading' style={{border:"2px solid black"}}>total weight</th>
            <th className='heading' style={{border:"2px solid black"}}>total costs</th>
          </tr>
        </thead>

        <tbody>
          {userSaffReportData.map((i, key) => {
            return (
              <tr key={key}>
                <td style={{ border: "2px solid black" }}>{i.date}</td>
                <td style={{ border: "2px solid black" }}>{i.machineId}</td>
                <td style={{ border: "2px solid black" }}>{i.totalLoads}</td>  
                <td style={{ border: "2px solid black" }}>{i.totalWeight}</td>  
                <td style={{ border: "2px solid black" }}>{i.totalCosts}</td>  
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
