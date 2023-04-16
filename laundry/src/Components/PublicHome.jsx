  import React from 'react'
  import AboutHome from './AboutHome'
  import ContactHome from './ContactHome'
  import ServicesHome from './ServicesHome'
  import { NavLink } from 'react-router-dom'
  export default function PublicHome() {
      
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
                                <NavLink to="/register" className="btn btn-outline-primary ms-2 px-4 rounded-pill" >
                                <i className="fa fa-sign-out me-2"></i>Register</NavLink>
                                <NavLink to="/login" className="btn btn-outline-primary ms-2 px-4 rounded-pill" >
    <i className="fa fa-sign-out me-2"></i>Login</NavLink>
    </div>
  </div>
</nav>
    </div>
          <section id="home">
              <div className="container">
                  <div className="row justify-content-center">
                        <div className="col-md-8 mt-5">
                          <h1 className='display-4 fw-bolder mb-4 text-center text-white'> Welcome</h1>
                          <h1 className='display-4 fw-bolder mb-4 text-center text-white'> We Provide Professional Laundry Services</h1>
                          <p className='lead text-center fs-4 mb-5 text-white'>We provide best Laundry services in whole town. Rajeshwari Laundry focus on customer satisfaction. We care for your clothes as much as you do.     </p>
                          <div className="buttons d-flex justify-content-center">
                            </div>
                      </div>
                  </div>
              </div>
          </section>
          <AboutHome/>
          <ServicesHome/>
          <ContactHome/>
      </div>
    )
  }