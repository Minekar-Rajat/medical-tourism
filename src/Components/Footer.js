import React from 'react';
import '../App.css';

const Footer = () => {

    return (
        <div className=''>

            <div className='row py-3 '>
                <div className='col-12 col-sm-4  '>
                    <center>
                        <p className='addr text-fluid '><i className='fa fa-map-marker mr-2'> </i>
                        SCTR'S Pune Institute of Computer Technology , Survey No. 27, Near, Trimurti Chowk, Bharati Vidyapeeth Campus , Dhankawadi, Pune , Maharashtra , 411043.
                        </p>
                    </center>
                </div>

                <div className='col-12 col-sm-8'>
                    <center>

                        <a target='_blank' href="https://www.google.co.in/maps/place/SCTR'S+Pune+Institute+of+Computer+Technology/@18.457629,73.8505684,457m/data=!3m1!1e3!4m5!3m4!1s0x3bc2eac85230ba47:0x871eddd0a8a0a108!8m2!3d18.4575421!4d73.8508336?hl=en-GB&authuser=0">
                            <img src='./images/location2.png' className='p-5 img-fluid' alt='Address' />
                        </a>
                    </center>
                </div>
            </div>


            <div className="row bg-footer white py-4 px-2">
                <div className="col-6 col-sm-3  py-5">
                    <center>
                        <b className='logo-name white'><a href='/home' className='white' id='links'>medical tourism </a></b>
                    </center>

                </div>
                <div className="col-6 col-sm-3">
                    <center>
                        <h6>Links :</h6>



                        <a href='/home' className='white  ' id='links'>Home</a><br />
                        <a href='/destination' className='white  ' id='links'>Destination</a><br />
                        <a href='/treatment' className='white  ' id='links'>Treatment</a><br />
                        <a href='/doctors' className='white  ' id='links'>Doctors</a><br />
                        <a href='/centers' className='white  ' id='links'>Medical Centers</a>






                    </center>
                </div>
                <div className="col-6 col-sm-4">
                    <center>
                        <h5 className='pt-3'>Connect with us</h5> <br />

                        <a href='mailto:medicaltourism@gmail.com' className='white px-2' id='icons' target='_blank' ><i className='fa fa-envelope' title='Mail'></i></a>
                        <a href='https://www.facebook.com/medicaltourismassociation/' className='white px-2' id='icons' target='_blank'><i className='fa fa-facebook-square' title='Facebook'></i></a>
                        <a href='https://twitter.com/med_travel?lang=en' className='white px-2' id='icons' target='_blank' ><i className='fa fa-twitter-square' title='Twitter'></i></a>
                        <a href='https://www.linkedin.com/company/medical-tourism-association/' className='white px-2' id='icons' target='_blank'><i className='fa fa-linkedin-square' title='Linkedin'></i></a>
                    </center>
                </div>
                <div className='col-6 col-sm-2 '>
                    <center>
                        <a href='#nav' className='white ' title='Go Up'><img src='../images/arrow.png' className='mt-5' height='30' width='30' alt='Up' /></a>
                    </center>
                </div>
            </div>
        </div>

    );

}

export default Footer;