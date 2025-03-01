import React from 'react';
import './D_abcontactus.css';  
import contactusimg from '../../assets/contactusimg.jpg';

const ContactSection = () => {
    return (
        <>
        <div className="container-fluid contact-section">
            <div className="row align-items-center m-0">
                
                <div className="col-lg-6 col-md-12 d-flex flex-column justify-content-center align-items-center text-orange px-4">
                    <h2>HAVE QUESTIONS OR NEED ASSISTANCE?</h2>
                    <p className="mt-2 fs-6" style={{ color: '#D77025' }}>
                            We're Here To Help You Find The Perfect Divine Creation For Your Space.<br />
                            Reach Out To Us Today!
                        </p>
                        <button className="btn mt-3 text-white w-auto px-4 btn-orange" >
                            Contact Us Now!
                        </button>
                    </div>
                    <div className="col-md-6 img-lay">
                        <img src={contactusimg} className="img-fluid ms-4 contact-img" alt="Contact Us" />
                    </div>
                </div>
            </div>

        </>
    );
};

export default ContactSection;