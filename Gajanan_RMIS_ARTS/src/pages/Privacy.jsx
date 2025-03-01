import React from 'react';

const Privacy = () => {
  return (
    <div>
      {/* Header Section */}
      <div 
        className="text-center p-3 text-white" 
        style={{ backgroundColor: '#6c4828' }}
      >
        <h1>Privacy Policy for Shree Gajanan Arts LLP</h1>
      </div>

      {/* Main Content */}
      <div className="container mt-4">
        <p className="lead">
          Welcome To <strong>Shree Gajanan Arts LLP</strong>. This privacy policy explains how we collect, use, disclose, and safeguard
          your information when you visit our website.
        </p>
        <hr className="my-4" />

        <section className="mb-5">
          <h5 className="mb-3">1. Information We Collect</h5>
          <p>
            As this website is for display purposes only and does not involve transactions or user accounts, the personal
            information we collect is limited.
          </p>
          <h6 className="mt-3">Types of Information We May Collect:</h6>
          <ul>
            <li >Voluntary information when you contact us via the contact form, such as your name, email, and message.</li>
            <li >Non-personal data, including browser type, access times, and pages viewed for analytics.</li>
          </ul>
        </section>l

        <section className="mb-5">
          <h5 className="mb-3">2. How We Use Your Information</h5>
          <p>We use the information collected for the following purposes:</p>
          <ul>
            <li>To respond to inquiries via the contact form.</li>
            <li >To improve the website's content and functionality.</li>
            <li >To monitor website performance and user behavior for analytics.</li>
          </ul>
        </section>

        <section className="mb-5">
          <h5 className="mb-3">3. Sharing of Information</h5>
          <p>We respect your privacy and do not sell or trade personal information. However, information may be shared in the following cases:</p>
          <ul>
            <li >Service Providers: With third-party Vendors Or Service Providers Assisting in website analytics Or Hosting.</li>
            <li >Legal Obligations: If required by law to comply with regulations.</li>
          </ul>
        </section>

        <section className="mb-5">
          <h5 className="mb-3">4. Cookies and Tracking Technologies</h5>
          <p>
            Our website may use cookies and similar tracking technologies to enhance user experience and analyze traffic. By
            using our website, you agree to our use of cookies.
          </p>
          <h6 className="mt-3">How to Manage Cookies:</h6>
          <p className="mb-0">
            You can control cookies through your browser settings to reject or delete them. However, this may impact
            website functionality.
            
          </p>
        </section>
      </div>
    </div>
  );
};

export default Privacy;