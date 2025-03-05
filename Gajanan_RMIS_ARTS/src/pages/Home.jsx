import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="/home_images/Home Page.png" alt="Shri Gajanan Arts LLP" style={{ height: "50px" }} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Categories
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="text-center text-white py-5" style={{ background: "url('/hero-image.jpg') center/cover", minHeight: "300px" }}>
        <div className="container">
          <h1 className="fw-bold">OUR JOURNEY, YOUR EXPERIENCE</h1>
          <p className="lead">
            Every creation at Shri Gajanan Arts LLP tells a story. Dive into
            our history, how we transformed from a humble start to a revered
            name in divine artistry.
          </p>
          <button className="btn btn-primary">Discover Our Journey</button>
        </div>
      </header>

      {/* Categories Section */}
      <section className="text-center text-white py-5" style={{ backgroundColor: "#f8a14b" }}>
        <div className="container">
          <h2 className="fw-bold">CELEBRATE SPIRITUALITY</h2>
          <p>Where Craftsmanship Meets Devotion</p>
          <input type="text" className="form-control mx-auto w-50 my-3" placeholder="Looking for a specific type? Type here..." />
          <div className="row mt-4">
            <div className="col-md-3">
              <img src="/home_images/Idol Icon 1.png" alt="Shree Ganesh" className="img-fluid rounded-circle mb-2" style={{ width: "100px" }} />
              <p>Shree Ganesh</p>
            </div>
            <div className="col-md-3">
              <img src="/home_images/Idol Icon 2.png" alt="Radha Krishna" className="img-fluid rounded-circle mb-2" style={{ width: "100px" }} />
              <p>Radha Krishna</p>
            </div>
            <div className="col-md-3">
              <img src="/home_images/Idol Icon 3.png" alt="Shiva" className="img-fluid rounded-circle mb-2" style={{ width: "100px" }} />
              <p>Shiva and Parvati</p>
            </div>
            <div className="col-md-3">
              <img src="/home_images/Idol Icon 4.png" alt="Ram Laxman" className="img-fluid rounded-circle mb-2" style={{ width: "100px" }} />
              <p>Ram Laxman</p>
            </div>
            <div className="col-md-3">
              <img src="/home_images/Idol Icon 5.png" alt="Ram Laxman" className="img-fluid rounded-circle mb-2" style={{ width: "100px" }} />
              <p>Ram Laxman</p>
            </div>
            <div className="col-md-3">
              <img src="/home_images/Idol Icon 6.png" alt="Ram Laxman" className="img-fluid rounded-circle mb-2" style={{ width: "100px" }} />
              <p>Ram Laxman</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
