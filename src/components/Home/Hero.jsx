"use client";
import React, {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Fade } from "react-awesome-reveal";
import Link from 'next/link';
const Hero = () => {


    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };


    return (
        <div className="container section-top">
            <div className="row">
                <div className="col-md-8 col-lg-8 col-sm-12 p-1 col-12">

                    <Carousel id="carouselHero" activeIndex={index} onSelect={handleSelect} controls={false}>

                        <Carousel.Item>
                            <Link  href="">
                                <img className="w-100" src="https://zamzam.com/blog/wp-content/uploads/2021/08/shutterstock_1745937893.jpg" text="First slide" />
                                <Carousel.Caption className="caption" >
                                    <Fade>
                                        <h4>Lorem Ipsum is simply dummy text</h4>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                                    </Fade>
                                </Carousel.Caption>
                            </Link>
                        </Carousel.Item>

                        <Carousel.Item>
                            <Link  href="">
                                <img className="w-100" src="https://zamzam.com/blog/wp-content/uploads/2021/08/shutterstock_1745937893.jpg" text="First slide" />
                                <Carousel.Caption className="caption" >
                                    <Fade>
                                        <h4>Lorem Ipsum is simply dummy text</h4>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                                    </Fade>
                                </Carousel.Caption>
                            </Link>
                        </Carousel.Item>


                    </Carousel>

                </div>
                <div className="col-md-4 col-lg-4 col-sm-6 p-1 col-6">
                    <Link href=""  id='Hero' className="card h-100">
                        <img className="card-img-top w-100 rounded-2" src="https://cloudfront-us-east-2.images.arcpublishing.com/reuters/KDEK7BZYWFLIXERLI4QH3EZB2Y.jpg"/>
                        <div className="card-img-overlay d-flex align-items-end">
                            <div className="caption">
                                <Fade>
                                    <h4>Lorem Ipsum is simply dummy</h4>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                                </Fade>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;