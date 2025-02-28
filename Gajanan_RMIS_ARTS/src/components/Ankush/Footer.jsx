import React from "react";
import logo from "/public/home_images/logo.png";

const Footer = () => {
  return (
    <footer className="bg-danger text-white py-5">
      <div className="container">
        <div className="row">

          {/* Left Section - Logo & Address */}
          <div className="col-md-4 text-center text-md-start">
            <img src={logo} alt="Logo" width={120} />
            <h5 className="fw-bold mt-3">LOCATE US</h5>
            <p className="mb-1">Shri Gajanan Arts LLP</p>
            <p className="mb-1">106/1, Richard Compound</p>
            <p className="mb-1">Manickh Pada, Near Bhanashi Techno</p>
            <p>Vasai East - 401208</p>
          </div>

          {/* Middle Section - Contact Info */}
          <div className="col-md-4 text-center">
            <h5 className="fw-bold">CONNECT WITH US</h5>
            <p className="mb-1">
              <i className="bi bi-envelope"></i> shrigajananarts07@gmail.com
            </p>
            <p>
              <i className="bi bi-telephone"></i> 9898288747
            </p>
          </div>

          {/* Right Section - Quick Links */}
          <div className="col-md-4 text-center text-md-end">
            <h5 className="fw-bold">QUICK LINKS</h5>
            <div className="d-flex justify-content-center justify-content-md-end gap-4">
              <ul className="list-unstyled">
                <li><a href="#" className="text-white text-decoration-none">Home</a></li>
                <li><a href="#" className="text-white text-decoration-none">Categories</a></li>
                <li><a href="#" className="text-white text-decoration-none">About Us</a></li>
              </ul>
              <ul className="list-unstyled">
                <li><a href="#" className="text-white text-decoration-none">Contact</a></li>
                <li><a href="#" className="text-white text-decoration-none">Location</a></li>
                <li><a href="#" className="text-white text-decoration-none">Newsletter</a></li>
              </ul>
              <ul className="list-unstyled">
                <li><a href="#" className="text-white text-decoration-none">FAQs</a></li>
                <li><a href="#" className="text-white text-decoration-none">Privacy Policy</a></li>
                <li><a href="#" className="text-white text-decoration-none">Terms & Conditions</a></li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="text-center mt-4">
          <p className="mb-0">© 2025 Shree Gajanan Arts LLP, India. All Rights Reserved.</p>
          <p className="mb-0">Crafted with ❤️ by Reeya T. Pimpale</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;