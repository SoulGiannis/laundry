import React from 'react'
import { NavLink } from "react-router-dom";
export default function AboutHome() {
  return (
      <div>
        <section id="about">
            <div className="container my-4 py-5">
                <div className="row">
                    <div className="col-md-6">
                        <img src="/assets/about1.jpg" alt="AboutHome" className='w-100 mt-5 h-400'/>
                    </div>
                
                <div className="col-md-6">
                    <h3 className='fs-5'>AboutHome Us</h3>
                    <h1 className="display-6"><b>We Provide</b></h1>
                    <hr/>
                    <p className='lead mb-4'> <b className='We'>We</b> provide Commercial laundry services and Door to Door laundry services based on customers need. We have the full portfolio of laundry services in Vadodara – be it laundry for daily home wear, office clothes or even for your woollen clothes, we can take care of it all. (Only washable woollen clothes are processed under woollen laundry service. Dry Clean only clothes can’t be processed under woollen laundry).</p>
                    <NavLink to="/register" className="btn btn-outline-primary ms-2 px-4 rounded-pill" >
    <i className="fa fa-sign-out me-2"></i>Get Started</NavLink>
                </div>
                </div>  
            </div>
        </section>
    </div>
  )
}
