import React from 'react'
import Bappa from '../jsons/Bappa.json'
import Lord_Ganesh from '../components/Lord_Ganesh'

const Home = () => {
  return (
    <>
      {/* {
        Bappa.map((bappa) => {
          return <>
            <p>{bappa.name}</p>
            <img src={bappa.image} />
          </>
        })
      } */}
      <Lord_Ganesh/>
    </>
  )
}

export default Home
