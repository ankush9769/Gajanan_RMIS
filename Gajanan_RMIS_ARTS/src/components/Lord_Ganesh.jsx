import React from 'react'
import Category_card from './Category_card'
import Ganesha from '../jsons/Bappa.json'

export default function Lord_Ganesh() {
  return (
    <>
      <div style={{ backgroundColor: 'orange', color: 'white', height: '4rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p style={{ fontSize: '2rem', display: 'flex', alignItems: 'center', marginTop: '0.5rem', fontWeight: '700' }}>LORD GANESHA</p>
      </div>
      <div style={{ display: 'flex' }}>
        {
          Ganesha.map((ganesha) => {
            return (

              <Category_card image={ganesha.image} short_desc={ganesha.short_desc} />

            )
          })
        }
      </div>
    </>
  )
}
