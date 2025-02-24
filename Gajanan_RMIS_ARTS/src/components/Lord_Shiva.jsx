import React from 'react'
import Bhole from '../jsons/Bhole.json'
import Category_card from './Category_card'


const Lord_Shiva = () => {
  return (
    <>
    <div style={{ backgroundColor: 'orange', color: 'white', height: '4rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p style={{ fontSize: '2rem', display: 'flex', alignItems: 'center', marginTop: '0.5rem', fontWeight: '700' }}>LORD SHIVA</p>
      </div>
      <div style={{ display: 'flex' }}>
        {
          Bhole.map((bhole) => {
            return (
              <Category_card image={bhole.image} short_desc={bhole.short_desc} />
            )
          })
        }
      </div>

      
    </>
  )
}

export default Lord_Shiva
