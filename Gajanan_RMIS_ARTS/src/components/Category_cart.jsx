import React from 'react'
import Ganesha from '../jsons/Bappa.json'


const Category_cart = () => {
    return (
        <>
            <div className="card" style={{ width: "18rem" }}>
                <img src={ganesha.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-text" style={{ textAlign: 'center' }}>{ganesha.short_desc}</p>
                    <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
                        <a href="#" style={{ width: '100%' }} className="btn btn-danger fw-bold">learn more</a>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Category_cart
