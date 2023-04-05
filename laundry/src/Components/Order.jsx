import React from 'react'
import { NavLink } from 'react-router-dom';
export default function Order() {
  return (
    <div>
        <div class="container">
            <div class="row">
                <div class="col-md-12 order-form">
                    <form />
                    <h2>Laundry Services Order Form</h2>
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" class="form-control" id="name" name="name" placeholder="Enter your name" />
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" class="form-control" id="email" name="email" placeholder="Enter your email" />
                    </div>
                    <div class="form-group">
                        <label for="phone">Phone</label>
                        <input type="tel" class="form-control" id="phone" name="phone" placeholder="Enter your phone number" />
                    </div>
                    <div class="form-group">
                        <label for="service">Service</label>
                        <select class="form-control" id="service" name="service">
                        <option>Wash and Fold</option>
                        <option>Wash and Iron</option>
                        <option>Dry Cleaning</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="weight">Weight</label>
                        <input type="number" class="form-control" id="weight" name="weight" placeholder="Enter the weight of your laundry in pounds" />
                    </div>
                    <div class="form-group">
                        <label for="pickup-date">Pickup Date</label>
                        <input type="date" class="form-control" id="pickup-date" name="pickup-date" />
                    </div>
                    <div class="form-group">
                        <label for="pickup-time">Pickup Time</label>
                        <input type="time" class="form-control" id="pickup-time" name="pickup-time"/>
                    </div>
                    <div class="form-group">
                        <label for="delivery-date">Delivery Date</label>
                        <input type="date" class="form-control" id="delivery-date" name="delivery-date" />
                    </div>
                    <div class="form-group">
                        <label for="delivery-time">Delivery Time</label>
                        <input type="time" class="form-control" id="delivery-time" name="delivery-time" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
