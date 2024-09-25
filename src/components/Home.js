import React from 'react'

function Home() {
  return (
    <>
     {/* <!-- Header Start --> */}
    <div className="container-fluid header bg-primary p-0 mb-5">
        <div className="row g-0 align-items-center flex-column-reverse flex-lg-row">
            <div className="col-lg-6 p-5 wow fadeIn" data-wow-delay="0.1s">
                <h1 className="display-4 text-white mb-5">Good Health Is The Root Of All Heppiness</h1>
                <div className="row g-4">
                    <div className="col-sm-4">
                        <div className="border-start border-light ps-4">
                            <h2 className="text-white mb-1" data-toggle="counter-up">123</h2>
                            <p className="text-light mb-0">Expert Doctors</p>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="border-start border-light ps-4">
                            <h2 className="text-white mb-1" data-toggle="counter-up">1234</h2>
                            <p className="text-light mb-0">Medical Stuff</p>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="border-start border-light ps-4">
                            <h2 className="text-white mb-1" data-toggle="counter-up">12345</h2>
                            <p className="text-light mb-0">Total Patients</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                <div className="owl-carousel header-carousel">
                    <div className="owl-carousel-item position-relative">
                        <img className="img-fluid" src="img/carousel-1.jpg" alt=""/>
                        <div className="owl-carousel-text">
                            <h1 className="display-1 text-white mb-0">Cardiology</h1>
                        </div>
                    </div>
                    <div className="owl-carousel-item position-relative">
                        <img className="img-fluid" src="img/carousel-2.jpg" alt=""/>
                        <div className="owl-carousel-text">
                            <h1 className="display-1 text-white mb-0">Neurology</h1>
                        </div>
                    </div>
                    
                    <div className="owl-carousel-item position-relative">
                        <img className="img-fluid" src="img/carousel-3.jpg" alt=""/>
                        <div className="owl-carousel-text">
                            <h1 className="display-1 text-white mb-0">Pulmonary</h1>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Header End -->


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
                    <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                    <p className="mb-4">Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam rebum amet diam ipsum. Clita clita labore, dolor duo nonumy clita sit at, sed sit sanctus dolor eos.</p>
                    <p><i className="far fa-check-circle text-primary me-3"></i>Quality health care</p>
                    <p><i className="far fa-check-circle text-primary me-3"></i>Only Qualified Doctors</p>
                    <p><i className="far fa-check-circle text-primary me-3"></i>Medical Research Professionals</p>
                    <a className="btn btn-primary rounded-pill py-3 px-5 mt-3" href="">Read More</a>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- About End -->


    <!-- Service Start --> */}
    <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: "600px"}}>
                <p className="d-inline-block border rounded-pill py-1 px-4">Services</p>
                <h1>Health Care Solutions</h1>
            </div>
            <div className="row g-4">
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="service-item bg-light rounded h-100 p-5">
                        <div className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4" style={{width: "65px", height: "65px"}}>
                            <i className="fa fa-heartbeat text-primary fs-4"></i>
                        </div>
                        <h4 className="mb-3">Cardiology</h4>
                        <p className="mb-4">Cardiology is a medical specialty that deals with the diagnosis and treatment of heart and blood vessel conditions. Cardiologists treat a variety of conditions, including.</p>
                        <a className="btn" href=""><i className="fa fa-plus text-primary me-3"></i>Read More</a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="service-item bg-light rounded h-100 p-5">
                        <div className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4" style={{width: "65px", height: "65px"}}>
                            <i className="fa fa-x-ray text-primary fs-4"></i>
                        </div>
                        <h4 className="mb-3">Pulmonary</h4>
                        <p className="mb-4">Pulmonary refers to the lungs and the conditions that affect them. Here's some information about pulmonary function, pulmonary diseases, and pulmonary arteries.</p>
                        <a className="btn" href=""><i className="fa fa-plus text-primary me-3"></i>Read More</a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="service-item bg-light rounded h-100 p-5">
                        <div className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4" style={{width: "65px", height: "65px"}}>
                            <i className="fa fa-brain text-primary fs-4"></i>
                        </div>
                        <h4 className="mb-3">Neurology</h4>
                        <p className="mb-4">A neurologist is a medical doctor who diagnoses, treats and manages disorders of the brain and nervous system (brain, spinal cord and nerves). A neurologist knows the anatomy, function and conditions that affect your nerves and nervous system.</p>
                        <a className="btn" href=""><i className="fa fa-plus text-primary me-3"></i>Read More</a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="service-item bg-light rounded h-100 p-5">
                        <div className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4" style={{width: "65px", height: "65px"}}>
                            <i className="fa fa-wheelchair text-primary fs-4"></i>
                        </div>
                        <h4 className="mb-3">Orthopedics</h4>
                        <p className="mb-4">Orthopaedic surgeons are devoted to the prevention, diagnosis, and treatment of disorders of the bones, joints, ligaments, tendons and muscles. Some orthopaedists are generalists, while others specialize in certain areas of the body.</p>
                        <a className="btn" href=""><i className="fa fa-plus text-primary me-3"></i>Read More</a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="service-item bg-light rounded h-100 p-5">
                        <div className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4" style={{width: "65px", height: "65px"}}>
                            <i className="fa fa-tooth text-primary fs-4"></i>
                        </div>
                        <h4 className="mb-3">Dental Surgery</h4>
                        <p className="mb-4">Oral surgery is a broad term for any operation performed on your teeth, gums, jaw or surrounding oral and facial structures. It includes a wide range of procedures, including teeth extractions, dental bone grafts, periodontal (gum) grafts and corrective jaw surgery.</p>
                        <a className="btn" href=""><i className="fa fa-plus text-primary me-3"></i>Read More</a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="service-item bg-light rounded h-100 p-5">
                        <div className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4" style={{width: "65px", height: "65px"}}>
                            <i className="fa fa-vials text-primary fs-4"></i>
                        </div>
                        <h4 className="mb-3">Laboratory</h4>
                        <p className="mb-4">A laboratory, or lab, is a place where scientific research, experiments, and analysis are conducted in a controlled environment. Laboratories are equipped with specialized tools and measuring devices to facilitate experiments.</p>
                        <a className="btn" href=""><i className="fa fa-plus text-primary me-3"></i>Read More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Service End -->


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
    {/* <!-- Team End -->


    <!-- Appointment Start --> */}
    <div className="container-xxl py-5">
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                    <p className="d-inline-block border rounded-pill py-1 px-4">Appointment</p>
                    <h1 className="mb-4">Make An Appointment To Visit Our Doctor</h1>
                    <p className="mb-4"> Felix Hospital provides World Class Medical Treatment Using The Latest & Best Technologies. Book an appointment with best General Physician in Noida at Felix Hospital Noida. Call Now. Pre & Post Surgery Care. Experienced Surgeons. Free Online Consultatio</p>
                    <div className="bg-light rounded d-flex align-items-center p-5 mb-4">
                        <div className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-white" style={{width:"55px",height:"55px"}}>
                            <i className="fa fa-phone-alt text-primary"></i>
                        </div>
                        <div className="ms-4">
                            <p className="mb-2">Call Us Now</p>
                            <h5 className="mb-0">+91 9334690170</h5>
                        </div>
                    </div>
                    <div className="bg-light rounded d-flex align-items-center p-5">
                        <div className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-white" style={{width:"55px",height:"55px"}}>
                            <i className="fa fa-envelope-open text-primary"></i>
                        </div>
                        <div className="ms-4">
                            <p className="mb-2">Mail Us Now</p>
                            <h5 className="mb-0">majid98@gmail.com</h5>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="bg-light rounded h-100 d-flex align-items-center p-5">
                        <form>
                            <div className="row g-3">
                                <div className="col-12 col-sm-6">
                                    <input type="text" className="form-control border-0" placeholder="Your Name" style={{height:"55px"}}/>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <input type="email" className="form-control border-0" placeholder="Your Email" style={{height:"55px"}}/>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <input type="text" className="form-control border-0" placeholder="Your Mobile" style={{height:"55px"}}/>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <select className="form-select border-0" style={{height:"55px"}}>
                                        <option value="">Choose Doctor</option>
                                        <option value="1">Cardiology</option>
                                        <option value="2">Neurology</option>
                                        <option value="3">Orthopedics</option>
                                        <option value="3">Pulmonary</option>
                                        <option value="3">Dental Surgery</option>
                                        <option value="3">Laboratory</option>
                                    </select>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <div className="date" id="date" data-target-input="nearest">
                                        <input type="text"
                                            className="form-control border-0 datetimepicker-input"
                                            placeholder="Choose Date" data-target="#date" data-toggle="datetimepicker" style={{height:"55px"}}/>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <select className="form-select border-0" style={{height:"55px"}}>
                                        <option value="">Choose State</option>
                                        <option value="">Delhi</option>
                                        <option value="1">Haryana</option>
                                        <option value="2">Punjab</option>
                                        <option value="3">Bihar</option>
                                        <option value="3">West Bengal</option>
                                        <option value="3">Madhya Pradesh</option>
                                        <option value="3">Rajasthan</option>
                                        <option value="3">Himachal Pradesh</option>
                                        <option value="3">Uttar Pradesh</option>
                                        <option value="3">Jammu & Kashmir </option>
                                        
                                    </select>
                                </div>
                                <div className="col-12">
                                    <textarea className="form-control border-0" rows="5" placeholder="Describe your problem"></textarea>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-primary w-100 py-3" type="submit">Book Appointment</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Appointment End -->


    <!-- Testimonial Start --> */}
    <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth:"600px"}}>
                <p className="d-inline-block border rounded-pill py-1 px-4">Testimonial</p>
                <h1>What Say Our Patients!</h1>
            </div>
            <div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
                <div className="testimonial-item text-center">
                    <img className="img-fluid bg-light rounded-circle p-2 mx-auto mb-4" src="img/testimonial-1.jpg" style={{width: "100px", height: "100px"}}/>
                    <div className="testimonial-text rounded text-center p-4">
                        <p>The physical therapy team was encouraging and bright,
                            They helped me regain my strength with all their might.
                            My doctor’s expertise gave me hope for my health,
                            I left the hospital feeling much better than myself..</p>
                        <h5 className="mb-1">Olivia</h5>
                        <span className="fst-italic">Neurology</span>
                    </div>
                </div>
                <div className="testimonial-item text-center">
                    <img className="img-fluid bg-light rounded-circle p-2 mx-auto mb-4" src="img/testimonial-2.jpg" style={{width: "100px", height: "100px"}}/>
                    <div className="testimonial-text rounded text-center p-4">
                        <p>Thanks to their guidance, I'm on the mend,
                        Every visit felt like a step to transcend.
                        They explained each process, made it all clear,
                        Now I'm back to my life, full of cheer.</p>
                        <h5 className="mb-1">Henry</h5>
                        <span className="fst-italic">Cardiology</span>
                    </div>
                </div>
                <div className="testimonial-item text-center">
                    <img className="img-fluid bg-light rounded-circle p-2 mx-auto mb-4" src="img/testimonial-3.jpg" style={{width: "100px", height: "100px"}}/>
                    <div className="testimonial-text rounded text-center p-4">
                        <p>My symptoms improved, I’m feeling alive,
                            Thanks to the treatments that helped me thrive.
                            They tailored my plan, and it worked like a charm,
                            ’m back to my passions, no more alarm.</p>
                        <h5 className="mb-1">Jack Marien</h5>
                        <span className="fst-italic">Pulmonary</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Testimonial End --> */}

    </>
  )
}

export default Home