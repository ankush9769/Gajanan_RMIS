import React from 'react'
import Ganesha from '../jsons/Bappa.json'


const Category_card = (props) => {
    return (
        <>
            <div className="card" style={{ width: "12rem" ,margin:"1rem" }}>
                <img src={props.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-text text-center" style={{ height: '11rem' }}>{props.short_desc}</p>
                    <div className="d-flex justify-content-center w-100">
                        <a href="#" className="btn btn-danger fw-bold w-100">learn more</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Category_card
