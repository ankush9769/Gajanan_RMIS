import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const TermsAndConditions = () => {
  return (
    <div style={{ backgroundColor: "#f8f8e5", minHeight: "100vh" }}>
      {/* Header Section */}
      <div className="text-center text-white py-4 px-4" style={{ backgroundColor: "#6c4828", fontWeight: "bold" }}>
        TERMS & CONDITIONS FOR SHREE GAJANAN ARTS LLP
      </div>

      {/* Navigation Bar */}
      <nav className="nav justify-content-center py-3 px-4" style={{ fontFamily: "Times New Roman", fontSize: "18px" }}>
        <a className="nav-link" href="#" style={{ color: "#ca9c40", fontWeight: "bold" }}>
          Home
        </a>
        <a className="nav-link" href="#" style={{ color: "#ca9c40", fontWeight: "bold" }}>
          About Us
        </a>
        <a className="nav-link" href="#" style={{ color: "#ca9c40", fontWeight: "bold" }}>
          Categories
        </a>
        <a className="nav-link" href="#" style={{ color: "#ca9c40", fontWeight: "bold" }}>
          Contact Us
        </a>
      </nav>

      {/* Main Content */}
      <div className="container py-4 text-start">
        <p className="text-dark">Welcome To <strong>Shree Gajanan Arts LLP</strong>. By Accessing And Using This Website, You Agree To Comply With The Following Terms And Conditions. If You Do Not Agree With Any Part Of These Terms, Please Refrain From Using The Website.</p>
        <br/>

        <hr />

        {/* Section 1 */}
        <br/>

        <h5><strong>1. Website Usage</strong></h5>
        <ul>
          <li>This Website Is Designed For Informational And Display Purposes Only. No Transactions, Purchases, Or Sales Take Place On This Platform.</li>
          <li>Users Are Allowed To Browse, View Content, And Contact Us For Inquiries Related To Our Displayed Products.</li>
          <li>Any Unauthorized Use Of The Website, Including Attempts To Hack, Disrupt, Or Misuse Content, Is Strictly Prohibited.</li>
        </ul>
        <br/>

        <hr />

        {/* Section 2 */}
        <br/>
        <h5><strong>2. Intellectual Property Rights</strong></h5>
        <ul>
          <li>All Content, Including Images, Text, Designs, And Logos Displayed On This Website, Is Owned By Shree Gajanan Arts LLP Or Used With Permission.</li>
          <li>You May Not Copy, Reproduce, Distribute, Or Modify Any Content From This Website Without Prior Written Consent From Us.</li>
        </ul>
        <br/>

        <hr />

        {/* Section 3 */}
        <br/>
        <h5><strong>3. User Conduct</strong></h5>
        <span style={{ fontSize: "16px" }}>By Using This Website, You Agree:</span>
        <ul>
          <li>Not To Misuse Or Interfere With The Functionality Of The Website.</li>
          <li>Not To Use Automated Means (Such As Bots Or Scrapers) To Collect Data From This Site.</li>
          <li>Not To Submit False Or Misleading Inquiries Through The Contact Form.</li>
          <li>We Reserve The Right To Restrict Access To Users Who Violate These Terms.</li>
        </ul>
        <br/>

        <hr />

        {/* Section 4 */}
        <br/>
        <h5><strong>4. Disclaimer Of Warranties</strong></h5>
        <ul>
          <li>The Information On This Website Is Provided "As Is" Without Any Warranties Of Accuracy, Completeness, Or Reliability.</li>
          <li>We Do Not Guarantee That The Website Will Be Error-Free, Uninterrupted, Or Secure At All Times.</li>
          <li>Any Reliance You Place On The Information Provided Is At Your Own Risk.</li>
        </ul>
        <br/>

        <hr />
      </div>
    </div>
  );
};

export default TermsAndConditions;
