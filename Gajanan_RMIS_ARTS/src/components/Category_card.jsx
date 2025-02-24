import React from 'react'
import Ganesha from '../jsons/Bappa.json'


const Category_card = (props) => {
    return (
        <>
            <div className="card" style={{ width: "18rem" }}>
                <img src={props.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-text" style={{ textAlign: 'center', height: '7rem' }}>{props.short_desc}</p>
                    <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
                        <a href="#" style={{ width: '100%' }} className="btn btn-danger fw-bold">learn more</a>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Category_card
