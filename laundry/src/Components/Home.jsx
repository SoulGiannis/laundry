import React from 'react'
import About from './About'
import Contact from './Contact'
import Services from './Services'
import { NavLink } from 'react-router-dom'
export default function home() {
  return (
    <div>
        <section id="home">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 mt-5">
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
        <About/>
        <Services/>
        <Contact/>
    </div>
  )
}