import React from "react";
import card from "../assets/card.jpg";
// import "bootstrap/dist/css/bootstrap.min.css";
 import "./D_review.css";

 
 const D_review = () => {
     return (
         <div className="Review text-center container-fluid">
             <div className="head">
                 <h1>BLESSED WORDS FROM OUR CUSTOMERS</h1>
             </div>
             <div className="marquee-container">
                 <div className="marquee-content">
                     <img src={card} className="img-fluid" alt="Customer Review" />
                     <img src={card} className="img-fluid" alt="Customer Review" />
                     <img src={card} className="img-fluid" alt="Customer Review" />
                     <img src={card} className="img-fluid" alt="Customer Review" />
                 </div>
             </div>
         </div>
     );
 };
 
 export default D_review;