import React from 'react'

function Service() {
  return (
    <>
    <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
            <h1 className="display-3 text-white mb-3 animated slideInDown">Services</h1>
            <nav aria-label="breadcrumb animated slideInDown">
                <ol className="breadcrumb text-uppercase mb-0">
                    <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
                    <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
                    <li className="breadcrumb-item text-primary active" aria-current="page">Services</li>
                </ol>
            </nav>
        </div>
    </div>

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
    </>
  )
}

export default Service;