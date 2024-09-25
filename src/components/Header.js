import React from 'react'
import {Link} from "react-router-dom"
function Header() {
  return (
    <>
    {/* <!-- Topbar Start --> */}
    <div className="container-fluid bg-light p-0 wow fadeIn" data-wow-delay="0.1s">
        <div className="row gx-0 d-none d-lg-flex">
            <div className="col-lg-7 px-5 text-start">
                <div className="h-100 d-inline-flex align-items-center py-3 me-4">
                    <small className="fa fa-map-marker-alt text-primary me-2"></small>
                    <small>Deepak Vihar khoda colony (GZB)</small>
                </div>
                <div className="h-100 d-inline-flex align-items-center py-3">
                    <small className="far fa-clock text-primary me-2"></small>
                    <small>Mon - Fri : 09.00 AM - 09.00 PM</small>
                </div>
            </div>
            <div className="col-lg-5 px-5 text-end">
                <div className="h-100 d-inline-flex align-items-center py-3 me-4">
                    <small className="fa fa-phone-alt text-primary me-2"></small>
                    <small>+91 9334690170</small> 
                </div>
                <div className="h-100 d-inline-flex align-items-center">
                   <Link className="btn btn-sm-square rounded-circle bg-white text-primary me-1" to="https://www.facebook.com/md.majeed.7792?mibextid=ZbWKwL"><i className="fab fa-facebook-f"></i></Link>
                   <Link className="btn btn-sm-square rounded-circle bg-white text-primary me-1" to="https://x.com/MDMAJID42250317?t=Hjm6NHS8X9SC2inr2q0fTA&s=09"><i className="fab fa-twitter"></i></Link>
                   <Link className="btn btn-sm-square rounded-circle bg-white text-primary me-1" to="https://www.linkedin.com/in/md-majid-ansari-a0159a289/"><i className="fab fa-linkedin-in"></i></Link>
                   <Link className="btn btn-sm-square rounded-circle bg-white text-primary me-0" to="https://www.instagram.com/majid_ansari__12?igsh=MWVlOHZqZ2gydHI5Mw=="><i className="fab fa-instagram"></i></Link>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Topbar End -->


    <!-- Navbar Start --> */}
    <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0 wow fadeIn" data-wow-delay="0.1s">
       <Link to="/" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
            <h1 className="m-0 text-primary"><i className="far fa-hospital me-3"></i>Wellness  Healthcare</h1>
       </Link>
        <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto p-4 p-lg-0">
               <Link to="/" className="nav-item nav-link active">Home</Link>
               <Link to="/about" className="nav-item nav-link">About</Link>
               <Link to="/service" className="nav-item nav-link">Service</Link>
                <div className="nav-item dropdown">
                   <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</Link>
                    <div className="dropdown-menu rounded-0 rounded-bottom m-0">
                       <Link to="/feature" className="dropdown-item">Feature</Link>
                       <Link to="/team" className="dropdown-item">Our Doctor</Link>
                       <Link to="/appointment" className="dropdown-item">Appointment</Link>
                       <Link to="/testimonial" className="dropdown-item">Testimonial</Link>
                       
                    </div>
                </div>
               <Link to="/contact" className="nav-item nav-link">Contact</Link>
            </div>
           <Link to="#" className="btn btn-primary rounded-0 py-4 px-lg-5 d-none d-lg-block">Appointment<i className="fa fa-arrow-right ms-3"></i></Link>
        </div>
    </nav>


    </>
  )
}

export default Header