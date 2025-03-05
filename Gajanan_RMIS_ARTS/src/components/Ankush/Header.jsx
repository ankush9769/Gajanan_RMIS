import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap

const Header = () => {
  return (
    <div>
      {/* Header with Logo */}
      <header className="bg-light py-3 text-center">
        <div className="container">
          <img src="/home_images/Home Hero Banner.png" alt="Shri Gajanan Arts LLP" className="img-fluid" style={{ height: "60px" }} />
          <h1 className="fw-bold mt-2">Shri Gajanan Arts LLP</h1>
        </div>
      </header>

      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#6B4A23" }}>
        <div className="container">
          <span className="fw-bold text-warning fs-4">卐</span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active text-white fw-semibold mx-3" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white fw-semibold mx-3" href="#">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white fw-semibold mx-3" href="#">Categories</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white fw-semibold mx-3" href="#">Contact Us</a>
              </li>
            </ul>
          </div>
          <span className="fw-bold text-warning fs-4">卐</span>
        </div>
      </nav>
    </div>
  );
};

export default Header;
