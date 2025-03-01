import React from "react";
import './D_Form.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Main = () => {
  return (
    <div className=" news-letter container">
      {/* Heading */}
      <div className="text-center mt-5">
        <h3 className="fw-bold text-dark">NEVER MISS A DIVINE UPDATE</h3>
      </div>

      <div className="sub-upd text-center mt-4">
        <p className="fs-4 text-dark">Subscribe for updates on our handcrafted idols, special collections, and more.</p>
      </div>

      <form className="letter-form d-flex justify-content-center  gap-3 mt-5 w-85 mx-auto gap-3">
        <input type="text" className="one-form form-control  px-2 py-2 border border-dark" placeholder="Name" />
        <input type="email" className="one-form form-control  px-2 py-2 border border-dark" placeholder="Email" />
      </form>

      <div className="d-flex justify-content-center align-items-center mt-3">
        <div className="form-check me-5 d-flex ">
          <div className="icon "><span className="material-symbols-outlined w-50 h-50 me-3">select_check_box</span></div>
          <p className="daily-newsletter mb-0 text-dark fw-light fs-5 ">Daily Newsletter</p>
        </div>
        <button type="submit" className="btn-letter mt-3 rounded d-flex justify-content-center text-center w-25">Subscribe</button>
      </div>
    </div>
  );
};

export default Main;