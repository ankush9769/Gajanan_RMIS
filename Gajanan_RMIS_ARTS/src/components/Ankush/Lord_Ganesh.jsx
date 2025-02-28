import React from 'react'
import Category_card from './Category_card'
import Ganesha from '../../jsons/Bappa.json'

export default function Lord_Ganesh() {
  return (
    <>
      <div className="bg-warning text-white py-3 d-flex align-items-center justify-content-center">
        <p className="fs-1 d-flex align-items-center  fw-bold mb-0">LORD GANESHA</p>
      </div>
      <div className="d-flex flex-wrap justify-content-center">
        {
          Ganesha.map((ganesha) => {
            return (
              <Category_card name={ganesha.name} title={ganesha.title} image={ganesha.image} short_desc={ganesha.short_desc} long_desc={ganesha.long_desc} />
            )
          })
        }
      </div>
    </>
  )
}
