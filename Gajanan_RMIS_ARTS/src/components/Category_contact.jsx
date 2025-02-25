import React from 'react'
import ContactImage from '/Contact Us Card Image.jpg' // Adjust the import path as needed

const Category_contact = () => {
  return (
    <section className="bg-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="text-center py-5">
              <h2 className="fw-bold" style={{ color: '#D17A43' }}>
                HAVE QUESTIONS OR NEED ASSISTANCE?
              </h2>
              <p className="text-secondary">
                We're Here To Help You Find The Perfect Divine Creation For Your Space. Reach Out To Us Today!
              </p>
              <button 
                className="btn px-4 py-3 fs-5 rounded"
                style={{ 
                  backgroundColor: '#E87E39',
                  color: 'white',
                  transition: '0.3s'
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#c5692c'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#E87E39'}
              >
                Contact Us Now!
              </button>
            </div>
          </div>
          <div className="col-md-6 bg-white">
            <div className="d-flex align-items-center justify-content-center">
              <img 
                src={ContactImage} 
                alt="Contact Us" 
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Category_contact