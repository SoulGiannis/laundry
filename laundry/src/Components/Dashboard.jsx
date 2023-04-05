import React from "react";
import { NavLink } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
      <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF"/>
      <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="dashboard">
          <h2>Welcome to Dashboard</h2>
          <div class="row">
            <div class="col-md-6">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Orders</h5>
                  <p class="card-text">View and manage your orders</p>
                  <NavLink to="/order" class="btn btn-outline-primary">View Orders</NavLink>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Inventory</h5>
                  <p class="card-text">View and manage your inventory</p>
                  <NavLink to="/supplies" class="btn btn-outline-primary rounded">View Inventory</NavLink>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Report</h5>
                  <p class="card-text">View and generate reports</p>
                  <NavLink to="/reports" class="btn btn-outline-primary rounded">Reports</NavLink>
                  {/* <a href="#" class="btn btn-outline-primary">View Reports</a> */}
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Billing</h5>
                  <p class="card-text">View and manage your billing information</p>
                  <NavLink to="/billing" class="btn btn-outline-primary rounded">Billing Page</NavLink>
                  {/* <a href="#" class="btn btn-outline-primary">View Billing</a> */}
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
</div>
  );
}
