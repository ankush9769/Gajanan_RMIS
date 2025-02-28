import React from 'react'
import Category_card from './Category_card'
import Kanha from '../../jsons/kanha.json'

export default function Lord_Kanha() {
  return (
    <>
      <div className="bg-warning text-white py-3 d-flex align-items-center justify-content-center mt-5">
        <p className="fs-1 d-flex align-items-center  fw-bold mb-0">LORD KRISHNA</p>
      </div>
      <div className="d-flex flex-wrap justify-content-center">
        {
          Kanha.map((kanha) => {
            return (
              <Category_card name={kanha.name} title={kanha.title} image={kanha.image} short_desc={kanha.short_desc} long_desc={kanha.long_desc} />
            )
          })
        }
      </div>
    </>
  )
}
