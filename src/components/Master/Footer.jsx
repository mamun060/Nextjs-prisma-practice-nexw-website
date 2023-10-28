import React from 'react';
import Link from "next/link";

const Footer = () => {
    return (
        <div>
            <div className="py-5 bg-dark">
                    <div className="container">
                        <div className="row">

                            <div className="col-md-3 col-sm-6 mb-4 mb-md-0">
                                <h4 className="text-white fw-bold"> About Us </h4>
                                <p className="text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>

                                <div className="d-flex justify-content-center justify-content-sm-start">
                                    <div className="d-flex align-items-center me-3">
                                        <Link target="_blank" href="">
                                            <div className="d-flex justify-content-center align-items-center">
                                                <i className=" h3 text-white mx-2 bi bi-facebook"></i>
                                            </div>
                                        </Link>
                                        <Link target="_blank" href="">
                                            <div className="d-flex justify-content-center align-items-center">
                                                <i className="h3 text-white  mx-2 bi bi-youtube"></i>
                                            </div>
                                        </Link>
                                        <Link target="_blank" href="">
                                            <div className="d-flex justify-content-center align-items-center">
                                                <i className=" h3 text-white mx-2 bi bi-twitter"></i>
                                            </div>
                                        </Link>
                                        <Link target="_blank" href="">
                                            <div className="d-flex justify-content-center align-items-center">
                                                <i className=" h3 text-white mx-2 bi bi-linkedin"></i>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>



                            <div className="col-md-3 col-sm-6 mb-4 mb-md-0">
                                <h4 className="text-white fw-bold mb-2 mb-sm-4"> Recommended  </h4>

                            </div>



                            <div className="col-md-3 col-sm-6 mb-4 mb-md-0">
                                <h4 className="text-white fw-bold mb-2 mb-sm-4"> Legal </h4>
                                <ul className="list-unstyled text-white">
                                    <li className="my-2"><Link href="" className="nav-link" > Privacy Policy </Link></li>
                                    <li className="my-2"><Link href=""  className="nav-link"> Terms & Conditions </Link></li>
                                </ul>
                            </div>


                            <div className="col-md-3 text-white p-2 col-sm-6 mb-4 mb-md-0">
                                <h4 className="text-white fw-bold mb-2 mb-sm-4"> Subscribe Now </h4>
                                <p>Hi, thanks for subscribe with us. </p>
                                <div className="d-flex justify-content-center justify-content-sm-start">
                                    <form  className="input-group  d-flex">
                                        <input type="text" className="form-control rounded-0 w-auto" placeholder="Email Address"/>
                                    </form>
                                </div>
                                <div className="mt-3" style={{marginLeft: '-12px'}}>
                                    <img className="d-inline-block" src="" alt="Map Location"/>
                                    <span className="d-inline-block ms-2"> Address </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="my-4"/>
                    <div className="container">
                        <div className="row d-flex justify-content-between align-items-center">
                            <p className="col-12 col-md-8 m-0 fw-bold text-center mb-3 mb-md-0">All Rights Reserved</p>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Footer;