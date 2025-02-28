import React from 'react'

const Pop_up_card = ({ image, title, name, long_desc, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center" 
         style={{ backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1000 }}
         onClick={onClose}>
      <div className="card position-relative shadow" 
           style={{ width: '600px', height: '400px', borderRadius: '10%', padding: '20px' }}
           onClick={e => e.stopPropagation()}>
        <button 
          className="btn-close position-absolute top-0 end-0 m-3" 
          style={{zIndex: 10}}
          onClick={onClose}
        />
        <img 
          src={image} 
          alt="Deity Image" 
          className="position-absolute bottom-0 end-0" 
          style={{ 
            width: '50%', 
            height: '80%',
            borderRadius: '15%',
            clipPath: 'ellipse(53% 63% at 54% 63%)'
          }}
        />
        <div className="w-50 p-1">
          <p className="card-text ankush-popup fs-4" style={{position: 'absolute', zIndex: 1}}>{title}</p>
        </div>
        <div className="w-50 p-1" style={{marginTop: '4rem'}}>
          <p className="card-text fw-bold fs-4">{name}</p>
        </div>
        <div className="w-50 p-1">
          <p className="card-text" style={{fontSize: '0.72rem'}}>{long_desc}</p>
        </div>
      </div>
    </div>
  )
}

export default Pop_up_card