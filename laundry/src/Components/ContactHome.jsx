import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Contact() {
  const [msg, setMsg] = useState({
    name : "",
    email : "",
    message : ""
  });

  //Handle Inputs
  const handleChange = (event)=>{
    let name = event.target.name;
    let value = event.target.value;

    setMsg({...msg, [name]:value})
  }

   //Handle Submit
   const handleSubmit = async (event)=>{
    event.preventDefault();
    //Object Destrucring
    //Store Object into Variables
    const {name, email, message} = msg;
    try {
    const res = await fetch('/message', {
      method : "POST",
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify({
        name,email,message
      })
    })

    if (res.status === 400 || !res) {
      window.alert("Message Not Sent. Try Again Later");
    }else{
      window.alert("Message Sent");
      setMsg({
        name : "",
        email : "",
        message : ""
      })
    }
  }catch(error){
      console.log(error);
    }
  }


  return (
    <div>
      <section id="contact">
        <div className="container my-5 py-5">
          <div className="row mb-5">
            <div className="col-12">
              <h3 className="fs-5 text-center mb-0">Contact Us</h3>
              <h1 className="display-6 text-center mb-4">
                Have Some <b>Questions?</b>
              </h1>
              <hr className="w-25 mx-auto " />
              <div className="row">
                <div className="col-md-6">
                  <img
                    src="https://5.imimg.com/data5/SELLER/Default/2022/9/OL/IV/WY/1600630/call-center-solutions-500x500.jpg"
                    alt="Contact"
                    className="w-75"
                  />
                </div>
                <div className="col-md-6">
                  <form onSubmit={handleSubmit} method="POST">
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Enter your Name"
                        name="name"
                        value={msg.name}
                        onChange={handleChange}
                        minlength="2" maxlength="50"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="exampleFormControlInput1" className="form-label">
                        Email address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="name@example.com"
                        name="email"
                        value={msg.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleFormControlTextarea1"
                        className="form-label">
                        Your Message
                      </label>
                      <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="5"
                        name="message"
                        value={msg.message}
                        onChange={handleChange}
                        required
                        minlength="5" maxlength="100"
                      ></textarea>
                    </div>
                    <button type="submit" className="btn btn-outline-primary rounded-pill px-4">Send Message <i className="fa fa-paper-plane ms-2"></i></button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
