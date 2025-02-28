import React, { useState } from 'react'
import Ganesha from '../../jsons/Bappa.json'
import Pop_up_card from './Pop_up_card'

const Category_card = (props) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    return (
        <>
            <div className="card" style={{ width: "13rem", margin: "1rem" }}>
                <img src={props.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-text text-center" style={{ height: '11rem' }}>{props.short_desc}</p>
                    <div className="d-flex justify-content-center w-100">
                        <button 
                            className="btn btn-danger fw-bold w-100"
                            onClick={() => setIsPopupOpen(true)}
                        >
                            learn more
                        </button>
                    </div>
                </div>
            </div>
            
            <Pop_up_card 
                image={props.image}
                long_desc={props.long_desc}
                title={props.title}
                name={props.name}
                isOpen={isPopupOpen}
                onClose={() => setIsPopupOpen(false)}
            />
        </>
    )
}

export default Category_card
