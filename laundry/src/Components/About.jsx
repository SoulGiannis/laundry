import React from 'react'

export default function About() {
  return (
    <div>
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
    </div>
  )
}
