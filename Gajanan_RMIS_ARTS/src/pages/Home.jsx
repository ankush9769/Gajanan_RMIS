import React from 'react'
import Bappa from '../jsons/Bappa.json'

const Home = () => {
  return (
    <div>
      {
        Bappa.map((bappa) => {
          return <>
            <p>{bappa.name}</p>
            <img src={bappa.image} />
          </>
        })
      }
    </div>
  )
}

export default Home
