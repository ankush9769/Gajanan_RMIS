import React from 'react'
import Category_card from './Category_card'
import Kanha from '../jsons/kanha.json'

export default function Lord_Kanha() {
  return (
    <>
      <div style={{ backgroundColor: 'orange', color: 'white', height: '4rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p style={{ fontSize: '2rem', display: 'flex', alignItems: 'center', marginTop: '0.5rem', fontWeight: '700' }}>LORD KRISHNA</p>
      </div>
      <div style={{ display: 'flex' }}>
        {
          Kanha.map((kanha) => {
            return (

              <Category_card image={kanha.image} short_desc={kanha.short_desc} />

            )
          })
        }
      </div>
    </>
  )
}
