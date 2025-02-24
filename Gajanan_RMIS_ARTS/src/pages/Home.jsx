import React from 'react'
import Bappa from '../jsons/Bappa.json'
import Lord_Ganesh from '../components/Lord_Ganesh'
import Lord_Shiva from '../components/Lord_Shiva'

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
      <Lord_Shiva/>
    </>
  )
}

export default Home
