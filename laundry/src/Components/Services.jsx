import React from "react";
import { NavLink } from "react-router-dom";
export default function Services() {
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
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">Contact US</NavLink>
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
      <section id="service">
        <div className="container my-5 py-5">
          <div className="row">
            <div className="col-12">
              <h3 className="fs-5 text-center mb-0">Our Services</h3>
              <h1 className="display-6 text-center mb-4">
                Our <b>Awesome</b> Services
              </h1>
              <hr className="w-25 mx-auto " />
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-4">
              <div className="card p-3" id="connection">
                <div className="card-body text-center">
                <img src="https://cdn.xxl.thumbs.canstockphoto.com/people-try-to-connect-electronics-and-technologies-metaphor-isolated-on-white-drawing_csp16197706.jpg" className="card-img-top" alt="card-1 image"/>
                  <h5 className="card-title">Connection</h5>
                  <p className="card-text lead">
                  We connect you to our nearest stores.
                  </p>
                  {/* <a href="#" className="btn btn-primary">
                   Click Here
                  </a> */}
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-3" id="prices">
                <div className="card-body text-center">
                <img src="https://media.istockphoto.com/id/1318399310/photo/laundry-detergents-and-dirty-clothes.jpg?b=1&s=170667a&w=0&k=20&c=Y_YqOi3SuAx35-ap2T0nVIN9D3tkyFLNhUJPzQVPwN8=" className="card-img-top" alt="card-1 image"/>
                  <h5 className="card-title">Low Prices</h5>
                  <p className="card-text lead">
                  We provide good services at best affordable price.
                  </p>
                  {/* <a href="#" className="btn btn-primary">
                   Click Here
                  </a> */}
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-3" id="delivery">
                <div className="card-body text-center">
                <img src="https://www.telcomyanmargroup.com/web/image/product.template/795/image_1024?unique=8a3a482" className="card-img-top" alt="card-1 image"/>
                  <h5 className="card-title">Delivery</h5>
                  <p className="card-text lead">
                    We help you with delivery problems.
                  </p>
                  {/* <a href="#" className="btn btn-primary">
                   Click Here
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
