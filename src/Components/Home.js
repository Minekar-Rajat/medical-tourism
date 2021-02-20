import React, { useState } from 'react';
import { Card, CardImg, CardImgOverlay, Carousel, CarouselControl, CarouselIndicators, CarouselItem } from 'reactstrap';

const imgs = [
    [
        {
            src: 'https://assets-global.website-files.com/5c9bd144182ede3d61b04793/5ca36a0d755353a3bcf78355_Burmungrad%20Hospital.svg',
            alt: 'Hospital',
            link: 'https://www.bumrungrad.com/en'
        },
        {
            src: 'https://assets-global.website-files.com/5d8aac42c851d2d6528d50d4/5f953db199671b2204a37c81_5f63bdfb4e5476e47fcbfc97_Vejetani-Logo_1bdc5696b4ea0ed479d41065c6202c29.png',
            alt: 'Hospital',
            link: '#'
        },
        {
            src: 'https://assets-global.website-files.com/5c9bd144182ede3d61b04793/5ca36a1cdb5d2e2b0ce8ee59_ST%20Catherine%20Logo.svg',
            alt: 'Hospital',
            link: '#'
        },
        {
            src: 'https://assets-global.website-files.com/5d8aac42c851d2d6528d50d4/5f953dc662f66d85d5231221_5f63bdb354aa9cec3690cf39_PSCCH-Logo_6abdeb8f61a74821576a8044e5f3fb8c.png',
            alt: 'Hospital',
            link: '#'
        }
    ],
    [
        {
            src: 'https://assets-global.website-files.com/5c9bd144182ede3d61b04793/5ca36a0d755353a3bcf78355_Burmungrad%20Hospital.svg',
            alt: 'Hospital',
            link: 'https://www.bumrungrad.com/en'
        },
        {
            src: 'https://assets-global.website-files.com/5d8aac42c851d2d6528d50d4/5f953db199671b2204a37c81_5f63bdfb4e5476e47fcbfc97_Vejetani-Logo_1bdc5696b4ea0ed479d41065c6202c29.png',
            alt: 'Hospital',
            link: '#'
        },
        {
            src: 'https://assets-global.website-files.com/5c9bd144182ede3d61b04793/5ca36a1cdb5d2e2b0ce8ee59_ST%20Catherine%20Logo.svg',
            alt: 'Hospital',
            link: '#'
        },
        {
            src: 'https://assets-global.website-files.com/5d8aac42c851d2d6528d50d4/5f953dc662f66d85d5231221_5f63bdb354aa9cec3690cf39_PSCCH-Logo_6abdeb8f61a74821576a8044e5f3fb8c.png',
            alt: 'Hospital',
            link: '#'
        }
    ],
    [
        {
            src: 'https://assets-global.website-files.com/5c9bd144182ede3d61b04793/5ca36a0d755353a3bcf78355_Burmungrad%20Hospital.svg',
            alt: 'Hospital',
            link: 'https://www.bumrungrad.com/en'
        },
        {
            src: 'https://assets-global.website-files.com/5d8aac42c851d2d6528d50d4/5f953db199671b2204a37c81_5f63bdfb4e5476e47fcbfc97_Vejetani-Logo_1bdc5696b4ea0ed479d41065c6202c29.png',
            alt: 'Hospital',
            link: '#'
        },
        {
            src: 'https://assets-global.website-files.com/5c9bd144182ede3d61b04793/5ca36a1cdb5d2e2b0ce8ee59_ST%20Catherine%20Logo.svg',
            alt: 'Hospital',
            link: '#'
        },
        {
            src: 'https://assets-global.website-files.com/5d8aac42c851d2d6528d50d4/5f953dc662f66d85d5231221_5f63bdb354aa9cec3690cf39_PSCCH-Logo_6abdeb8f61a74821576a8044e5f3fb8c.png',
            alt: 'Hospital',
            link: '#'
        }
    ]

];




const Home = () => {


    const [activeIndex, setactiveIndex] = useState(0);
    const [animating, setanimating] = useState(false);

    const next = () => {
        if (animating)
            return;
        const nextIndex = (activeIndex === (imgs.length - 1) ? 0 : activeIndex + 1);
        setactiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating)
            return;
        const prevIndex = (activeIndex === 0 ? imgs.length - 1 : activeIndex - 1);
        setactiveIndex(prevIndex);
    }



    const slides = imgs.map((img) => {
        return (
            <CarouselItem onExiting={() => setanimating(true)} onExited={() => setanimating(false)} key={img.src}>
                <center>

                    <a href={img[0].link} ><img src={img[0].src} alt={img[0].alt} width='200' height='150' className='hosp-logo m-5 rounded bg-white' /></a>
                    <a href={img[1].link}><img src={img[1].src} alt={img[1].alt} width='200' height='150' className='hosp-logo m-5 rounded bg-white' /></a>
                    <a href={img[2].link}><img src={img[2].src} alt={img[2].alt} width='200' height='150' className='hosp-logo m-5 rounded bg-white' /></a>
                    <a href={img[3].link}><img src={img[3].src} alt={img[3].alt} width='200' height='150' className='hosp-logo m-5 rounded bg-white' /></a>

                </center>
            </CarouselItem>
        );
    });

    return (
        <div className='home' style={{ backgroundImage: `url("../images/medtour.jpg")`, backgroundRepeat: 'no-repeat' }}>
            <div className='row'>
                <div className='col-12 first-div' >
                    <div className='row h-100'>
                        <div className='col-6 '>
                            <center>
                                <u className='white'><h1 className='main-txt text-fluid'>Travel Safely with <br /> Confidence </h1></u>
                            </center>
                        </div>
                        <div className='col-6'>

                        </div>
                    </div>
                </div>

                <div className='col-12 second-div'>
                    <div className='mt-5 pt-5 white'>
                        <center>
                            <p>FOR PATITENTS</p>
                            <br />
                            <h1><b>The Easiest Way to Find HealthCare Abroad</b></h1>
                            <br />
                            <p>We will guide you in Medical Tourism Journey</p>
                        </center>
                    </div>
                    <div className='row mt-5 '>
                        <div className='col-12 col-sm-6 col-md-3 p-2 '>
                            <center>
                                <a href='/destination' className='text-decoration-none white '><img src='../images/hills.png' height='180' width='180' className='rounded-circle icon' />
                                    <h2>Destinations</h2></a>

                                <p className='white px-3'>Search top Destinations and Hospitals WorldWide</p>
                            </center>
                        </div>
                        <div className='col-12 col-sm-6 col-md-3 p-2 '>
                            <center>
                                <a href='/treatment' className='text-decoration-none white '><img src='../images/treatment.jpg' height='180' width='180' className='rounded-circle icon bg-white' />
                                    <h2>Treatements</h2></a>

                                <p className='white px-3'>Finalize your Treatment with the hospital/provider of your choice</p>
                            </center>
                        </div>
                        <div className='col-12 col-sm-6 col-md-3 p-2 '>
                            <center>
                                <a href='/doctors' className='text-decoration-none white '><img src='../images/doctor.jpg' height='180' width='180' className='rounded-circle icon bg-white' />
                                    <h2>Doctors</h2></a>

                                <p className='white px-3'>You can Search Experts of perticular treatment of your choice</p>
                            </center>
                        </div>
                        <div className='col-12 col-sm-6 col-md-3 p-2 '>
                            <center>
                                <a href='/centers' className='text-decoration-none white '><img src='../images/center.jpg' height='180' width='180' className='rounded-circle icon bg-white' />
                                    <h2>Medical Centers</h2></a>

                                <p className='white px-3'>Based on your criteria,we recommend the best Medical Centers</p>
                            </center>
                        </div>
                    </div>

                    <br />

                </div>
                <div className='col-12 third-div'>
                    <div className='mt-5 pt-5 '>
                        <center>
                            <p className='dest-text-1'>DESTINATIONS WORLD WIDE</p>
                            <br />
                            <p><h1 className='dest-text-2'><b>Other Popular Destinations</b></h1></p>
                        </center>
                    </div>
                    <div className='mt-5 pt-5 row '>
                        <Card className='col-sm-6 col-lg-3 p-0' >
                            <a href='#'>
                                <CardImg src='../images/country/abudhabi.jpg' className='img-fluid ' />

                                <CardImgOverlay id='dest-img'>
                                    <center>
                                        <h4 className='white dest-text-3'><u>ABU DHABI</u></h4>
                                    </center>
                                </CardImgOverlay>
                            </a>
                        </Card>

                        <Card className='col-sm-6 col-lg-3 p-0'>
                            <a href='#'>
                                <CardImg src='../images/country/costarica.jpg' className='img-fluid ' />

                                <CardImgOverlay id='dest-img'>
                                    <center>
                                        <h4 className='white dest-text-3'><u>COSTA RICA</u></h4>
                                    </center>
                                </CardImgOverlay>
                            </a>
                        </Card>

                        <Card className='col-sm-6 col-lg-3 p-0'>
                            <a href='#'>
                                <CardImg src='../images/country/singapore.jpg' className='img-fluid ' />

                                <CardImgOverlay id='dest-img'>
                                    <center>
                                        <h4 className='white dest-text-3'><u>SINGAPORE</u></h4>
                                    </center>
                                </CardImgOverlay>
                            </a>
                        </Card>

                        <Card className='col-sm-6 col-lg-3  p-0' >
                            <a href='/destination'>
                                <CardImg src='../images/country/combine.png' className='img-fluid ' />

                                <CardImgOverlay id='dest-img'>
                                    <center>
                                        <h4 className='white dest-text-3'><u>EXPLORE MORE</u></h4>
                                    </center>
                                </CardImgOverlay>
                            </a>
                        </Card>



                    </div>
                    <div className='mt-5 pt-5'>
                        <center>
                            <p className='dest-text-1'>Find a Destination for Your Medical Needs</p>
                        </center>
                    </div>
                </div>

                <div className='col-12 fourth-div'>
                    <div className='pt-5 '>
                        <center>
                            <p className='centers-text-1 black'>HEALTHCARE PROVIDERS</p>
                            <img src='../images/gha.png' alt='GHA' className='img-fluid' width='500' />
                            <p className='text-fluid'><h2>Global HealthCare Accreditation <br /> Trusted Providers</h2></p>
                        </center>
                    </div>
                    <div className='pt-5 '>
                        <Carousel activeIndex={activeIndex} next={next} previous={previous} className=''>
                            {slides}
                            <CarouselControl direction='prev' directionText='Previous' onClickHandler={previous} />
                            <CarouselControl direction='next' directionText='Next' onClickHandler={next} />
                        </Carousel>
                    </div>
                </div>
            </div >
        </div>
    );

}

export default Home;