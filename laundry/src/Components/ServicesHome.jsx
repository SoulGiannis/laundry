import React from "react";
export default function Services() {    
  return (
    <div>
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
