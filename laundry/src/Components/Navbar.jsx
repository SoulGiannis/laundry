    import React from 'react'
    import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg shadow">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        {/* <li className="nav-item dropdown">
          <NavLink className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Laundry Services
          </NavLink>
          <ul className="dropdown-menu">
            <li><NavLink className="dropdown-item" to="#">Action</NavLink></li>
            <li><NavLink className="dropdown-item" to="#">Another action</NavLink></li>
            <li><hr className="dropdown-divider" /></li>
            <li><NavLink className="dropdown-item" to="#">Something else here</NavLink></li>
          </ul>
        </li> */}
        <li className="nav-item">
          <NavLink className="nav-link" to="/services">Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">Contact US</NavLink>
        </li>
      </ul>
      <NavLink className="navbar-brand fs-4 mx-auto fw-bolder text-center" to="/">Rajeshwari Laundry</NavLink>
      <NavLink to="/login" className="btn btn-outline-primary ms-auto px-4 rounded-pill" >
        <i className="fa fa-sign-in me-2" action="Login.jsx"></i>Login</NavLink>
    <NavLink to="/register" className="btn btn-outline-primary ms-2 px-4 rounded-pill" >
    <i className="fa fa-user-plus me-2"></i>Register</NavLink>
    <NavLink to="/dashboard" className="btn btn-outline-primary ms-2 px-4 rounded-pill" >
    <i className="fa fa-user-plus me-2"></i>Dashboard</NavLink>
    <NavLink to="/logout" className="btn btn-outline-primary ms-2 px-4 rounded-pill" >
    <i className="fa fa-sign-out me-2"></i>Logout</NavLink>
    <NavLink to="/appointment" className="btn btn-outline-primary ms-2 px-4 rounded-pill" >
    <i className="fa fa-calendar me-2"></i>Appointment</NavLink>
    </div>
  </div>
</nav>
    </div>
  )
}