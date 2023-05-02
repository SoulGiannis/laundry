  import React from 'react'
  import AboutHome from './AboutHome'
  import ContactHome from './ContactHome'
  import ServicesHome from './ServicesHome'
  import { NavLink } from 'react-router-dom'
  export default function Home(props) {
      const { username } = props;
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
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/services">Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">Contact US</NavLink>
        </li>
      </ul>
      <NavLink className="navbar-brand fs-4 mx-auto fw-bolder text-center" to="/home">Rajeshwari Laundry</NavLink>
    <NavLink to="/appointment" className="btn btn-outline-primary ms-2 px-4 rounded-pill" >
    <i className="fa fa-calendar me-2"></i>Appointment</NavLink>
    <NavLink to="/logout" className="btn btn-outline-primary ms-2 px-4 rounded-pill" >
    <i className="fa fa-sign-out me-2"></i>Logout</NavLink>
    </div>
  </div>
</nav>
    </div>
          <section id="home">
              <div className="container">
                  <div className="row justify-content-center">
                        <div className="col-md-8 mt-5">
                          <h1 className='display-4 fw-bolder mb-4 text-center text-white'> Welcome {username}</h1>
                          <h1 className='display-4 fw-bolder mb-4 text-center text-white'> We Provide Professional Laundry Services</h1>
                          <p className='lead text-center fs-4 mb-5 text-white'>We provide best Laundry services in whole town. Rajeshwari Laundry focus on customer satisfaction. We care for your clothes as much as you do.     </p>
                          <div className="buttons d-flex justify-content-center">
                              <NavLink to="/contact" className="btn btn-outline-light me-4 rounded-pill px-4 py-2">Details</NavLink>
                              <NavLink to="/services" className="btn btn-outline-light  rounded-pill px-4 py-2">Our Services</NavLink>
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
  