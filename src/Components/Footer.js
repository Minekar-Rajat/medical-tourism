import React from 'react';
import '../App.css';
import GoogleMapReact from 'google-map-react';

const Footer = () => {

    return (

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
            <div className="col-12 col-sm-6">
                <center>
                    <h5 className='pt-3'>Connect with us</h5> <br />

                    <a href='mailto:medicaltourism@gmail.com' className='white px-2' id='icons' target='_blank' ><i className='fa fa-envelope' title='Mail'></i></a>
                    <a href='https://www.facebook.com/medicaltourismassociation/' className='white px-2' id='icons' target='_blank'><i className='fa fa-facebook-square' title='Facebook'></i></a>
                    <a href='https://twitter.com/med_travel?lang=en' className='white px-2' id='icons' target='_blank' ><i className='fa fa-twitter-square' title='Twitter'></i></a>
                    <a href='https://www.linkedin.com/company/medical-tourism-association/' className='white px-2' id='icons' target='_blank'><i className='fa fa-linkedin-square' title='Linkedin'></i></a>
                </center>
            </div>
        </div>
    );

}

export default Footer;