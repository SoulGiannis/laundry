import React from "react";
import { NavLink } from "react-router-dom";

export default function Dashboard() {
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
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
      <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF"/>
      <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="dashboard">
          <h2>Welcome to Dashboard</h2>
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Orders</h5>
                  <p className="card-text">View and manage your orders</p>
                  <NavLink to="/order" className="btn btn-outline-primary">View Orders</NavLink>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Inventory</h5>
                  <p className="card-text">View and manage your inventory</p>
                  <NavLink to="/supplies" className="btn btn-outline-primary rounded">View Inventory</NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Report</h5>
                  <p className="card-text">View and generate reports</p>
                  <NavLink to="/reports" className="btn btn-outline-primary rounded">Reports</NavLink>
                  {/* <a href="#" className="btn btn-outline-primary">View Reports</a> */}
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Billing</h5>
                  <p className="card-text">View and manage your billing information</p>
                  <NavLink to="/billing" className="btn btn-outline-primary rounded">Billing Page</NavLink>
                  {/* <a href="#" className="btn btn-outline-primary">View Billing</a> */}
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Query</h5>
                  <p className="card-text">View and manage your Query form user</p>
                  <NavLink to="/query" className="btn btn-outline-primary rounded">query</NavLink>
                  {/* <a href="#" className="btn btn-outline-primary">View Billing</a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
</div>
  );
}
