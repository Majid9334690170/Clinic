import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <>
        <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
            <h1 className="display-3 text-white mb-3 animated slideInDown">About Us</h1>
            <nav aria-label="breadcrumb animated slideInDown">
                <ol className="breadcrumb text-uppercase mb-0">
                    <li className="breadcrumb-item"><Link className="text-white" href="#">Home</Link></li>
                    <li className="breadcrumb-item"><Link className="text-white" href="#">Pages</Link></li>
                    <li className="breadcrumb-item text-primary active" aria-current="page">About</li>
                </ol>
            </nav>
        </div>
    </div>
    {/* <!-- Page Header End -->


    <!-- About Start --> */}
    <div className="container-xxl py-5">
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                    <div className="d-flex flex-column">
                        <img className="img-fluid rounded w-75 align-self-end" src="img/about-1.jpg" alt=""/>
                        <img className="img-fluid rounded w-50 bg-white pt-3 pe-3" src="img/about-2.jpg" alt="" style={{marginTop: "-25%"}}/>
                    </div>
                </div>
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                    <p className="d-inline-block border rounded-pill py-1 px-4">About Us</p>
                    <h1 className="mb-4">Why You Should Trust Us? Get Know About Us!</h1>
                    <p>Our team consists of board-certified doctors and specialists with years of experience in their fields. Their expertise ensures that patients receive the highest standard of medical care tailored to their needs</p>
                    <p className="mb-4">We invest in state-of-the-art medical equipment and technology. This enables us to perform accurate diagnoses and effective treatments, enhancing patient outcomes and safety.</p>
                    <p><i className="far fa-check-circle text-primary me-3"></i>Quality health care</p>
                    <p><i className="far fa-check-circle text-primary me-3"></i>Only Qualified Doctors</p>
                    <p><i className="far fa-check-circle text-primary me-3"></i>Medical Research Professionals</p>
                    <Link className="btn btn-primary rounded-pill py-3 px-5 mt-3" href="">Read More</Link>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- About End -->


    <!-- Feature Start --> */}
    <div className="container-fluid bg-primary overflow-hidden my-5 px-lg-0">
        <div className="container feature px-lg-0">
            <div className="row g-0 mx-lg-0">
                <div className="col-lg-6 feature-text py-5 wow fadeIn" data-wow-delay="0.1s">
                    <div className="p-lg-5 ps-lg-0">
                        <p className="d-inline-block border rounded-pill text-light py-1 px-4">Features</p>
                        <h1 className="text-white mb-4">Why Choose Us</h1>
                        <p className="text-white mb-4 pb-2">Established by Dr Prathap C Reddy in 2003, Wellness Healthcare has a robust presence across the healthcare ecosystem. From routine wellness & preventive health care to innovative life-saving treatments and diagnostic services, Wellness Healthcare Hospitals </p>
                        <div className="row g-4">
                            <div className="col-6">
                                <div className="d-flex align-items-center">
                                    <div className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light" style={{width:"55px",height:"55px"}}>
                                        <i className="fa fa-user-md text-primary"></i>
                                    </div>
                                    <div className="ms-4">
                                        <p className="text-white mb-2">Experience</p>
                                        <h5 className="text-white mb-0">Doctors</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="d-flex align-items-center">
                                    <div className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light" style={{width:"55px",height:"55px"}}>
                                        <i className="fa fa-check text-primary"></i>
                                    </div>
                                    <div className="ms-4">
                                        <p className="text-white mb-2">Quality</p>
                                        <h5 className="text-white mb-0">Services</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="d-flex align-items-center">
                                    <div className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light" style={{width:"55px",height:"55px"}}>
                                        <i className="fa fa-comment-medical text-primary"></i>
                                    </div>
                                    <div className="ms-4">
                                        <p className="text-white mb-2">Positive</p>
                                        <h5 className="text-white mb-0">Consultation</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="d-flex align-items-center">
                                    <div className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light" style={{width:"55px",height:"55px"}}>
                                        <i className="fa fa-headphones text-primary"></i>
                                    </div>
                                    <div className="ms-4">
                                        <p className="text-white mb-2">24 Hours</p>
                                        <h5 className="text-white mb-0">Support</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 pe-lg-0 wow fadeIn" data-wow-delay="0.5s" style={{minHeight: "400px"}}>
                    <div className="position-relative h-100">
                        <img className="position-absolute img-fluid w-100 h-100" src="img/feature.jpg" style={{objectFit: "cover"}} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Feature End -->


    <!-- Team Start --> */}
    <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth:"600px"}}>
                <p className="d-inline-block border rounded-pill py-1 px-4">Doctors</p>
                <h1>Our Experience Doctors</h1>
            </div>
            <div className="row g-4">
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="team-item position-relative rounded overflow-hidden">
                        <div className="overflow-hidden">
                            <img className="img-fluid" src="img/team-1.jpg" alt=""/>
                        </div>
                        <div className="team-text bg-light text-center p-4">
                            <h5>Dr. Bobby Thomas</h5>
                            <p className="text-primary">Department of Cardiology</p>
                            <div className="team-social text-center">
                                <a className="btn btn-square" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-square" href=""><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="team-item position-relative rounded overflow-hidden">
                        <div className="overflow-hidden">
                            <img className="img-fluid" src="img/team-2.jpg" alt=""/>
                        </div>
                        <div className="team-text bg-light text-center p-4">
                            <h5>Dr. Gaurav Bansal</h5>
                            <p className="text-primary">Department of Neurology</p>
                            <div className="team-social text-center">
                                <a className="btn btn-square" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-square" href=""><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="team-item position-relative rounded overflow-hidden">
                        <div className="overflow-hidden">
                            <img className="img-fluid" src="img/team-3.jpg" alt=""/>
                        </div>
                        <div className="team-text bg-light text-center p-4">
                            <h5>Elizabeth Joshi</h5>
                            <p className="text-primary">Department of Orthopedics</p>
                            <div className="team-social text-center">
                                <a className="btn btn-square" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-square" href=""><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                    <div className="team-item position-relative rounded overflow-hidden">
                        <div className="overflow-hidden">
                            <img className="img-fluid" src="img/team-4.jpg" alt=""/>
                        </div>
                        <div className="team-text bg-light text-center p-4">
                            <h5>Dr. Ashish Jain</h5>
                            <p className="text-primary">Department of Pulmonary</p>
                            <div className="team-social text-center">
                                <a className="btn btn-square" href=""><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-square" href=""><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-square" href=""><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default About