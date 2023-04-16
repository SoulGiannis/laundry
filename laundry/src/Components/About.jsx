import React from 'react'
import { NavLink } from "react-router-dom";

export default function About() {
  return (
      <div>
          <div>
        <nav className="navbar navbar-expand-lg shadow">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/home">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">Contact US</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/services">Services</NavLink>
        </li>
      </ul>
      <NavLink className="navbar-brand fs-4 mx-auto fw-bolder text-center" to="/">Rajeshwari Laundry</NavLink>
    <NavLink to="/appointment" className="btn btn-outline-primary ms-2 px-4 rounded-pill" >
    <i className="fa fa-calendar me-2"></i>Appointment</NavLink>
    <NavLink to="/logout" className="btn btn-outline-primary ms-2 px-4 rounded-pill" >
    <i className="fa fa-sign-out me-2"></i>Logout</NavLink>
    </div>
  </div>
</nav>
    </div>
        <section id="about">
            <div className="container my-4 py-5">
                <div className="row">
                    <div className="col-md-6">
                        <img src="/assets/about1.jpg" alt="About" className='w-100 mt-5 h-400'/>
                    </div>
                
                <div className="col-md-6">
                    <h3 className='fs-5'>About Us</h3>
                    <h1 className="display-6"><b>We Provide</b></h1>
                    <hr/>
                    <p className='lead mb-4'> <b className='We'>We</b> provide Commercial laundry services and Door to Door laundry services based on customers need. We have the full portfolio of laundry services in Vadodara – be it laundry for daily home wear, office clothes or even for your woollen clothes, we can take care of it all. (Only washable woollen clothes are processed under woollen laundry service. Dry Clean only clothes can’t be processed under woollen laundry).</p>
                    <button className="btn btn-primary rounded-pill px-4 py-2">Get Started</button>
                    <button className="btn btn-outline-primary rounded-pill px-4 py-2 ms-2">Contact US</button>
                </div>
                </div>  
            </div>
          </section>
          <br/>
          <br/>
          <br/>
    </div>  
  )
}
