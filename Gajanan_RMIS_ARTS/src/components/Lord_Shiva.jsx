import React from 'react'
import Bhole from '../jsons/Bhole.json'
import Category_card from './Category_card'


const Lord_Shiva = () => {
  return (
    <>
      <div className="bg-warning text-white py-3 d-flex align-items-center justify-content-center mt-5">
        <p className="fs-1 d-flex align-items-center fw-bold mb-0">LORD SHIVA</p>
      </div>
      <div className="d-flex flex-wrap justify-content-center">
        {
          Bhole.map((bhole) => {
            return (
              <Category_card name={bhole.name} title={bhole.title} image={bhole.image} short_desc={bhole.short_desc} long_desc={bhole.long_desc} />
            )
          })
        }
      </div>
    </>
  )
}

export default Lord_Shiva
