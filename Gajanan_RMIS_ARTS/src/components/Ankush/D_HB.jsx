import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css"
import Black from "/public/home_images/Black.jpeg"

const D_HB = () => {
  return (
    <section className="position-relative text-white text-center">
      <div className="hero-overlay position-absolute w-100 h-100" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}></div>
      <img
        src={Black}
        alt="Black"
        className="img-fluid w-100"x
        style={{ 
          objectFit: "cover",
          height: "auto",
          minHeight: "300px",
          maxHeight: "400px"
        }}
      />
      <div className="position-absolute top-50 start-50 translate-middle px-3 container ">
        <h2 className="fw-bold animate__animated animate__fadeInDown mb-4 display-4 display-md-3"
            style={{
              fontSize: "clamp(1.5rem, 4vw, 2.5rem)"
            }}>
          A VISIONARY BEGINNING
        </h2>
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            <p className="fw-light animate__animated animate__fadeInUp animate__delay-1s mb-3 fs-6 fs-md-5"
               style={{
                 fontSize: "clamp(0.875rem, 2vw, 1.25rem)"
               }}>
              Founded In 2000 By Two Visionary Brothers, Shri Gajanan Arts LLP
              Started With Just A Handful Of Artisans, Aiming To Preserve India's
              Spiritual Essence Through Divine Art.
            </p>
            <p className="fw-light animate__animated animate__fadeInUp animate__delay-2s mb-3 fs-6 fs-md-5"
               style={{
                 fontSize: "clamp(0.875rem, 2vw, 1.25rem)"
               }}>
              We Specialise In Fibre-Assorted God Figures That Blend Tradition With
              Artistry, Ensuring Each Creation Reflects Authenticity And Handmade
              Excellence.
            </p>
            <p className="fw-light animate__animated animate__fadeInUp animate__delay-3s mb-3 fs-6 fs-md-5"
               style={{
                 fontSize: "clamp(0.875rem, 2vw, 1.25rem)"
               }}>
              Our Mission Is To Provide Not Only Exceptional Products But An
              Unforgettable Experience, Inviting Everyone To Join Us In Celebrating
              The Rich Heritage Of Divine Craftsmanship.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default D_HB;