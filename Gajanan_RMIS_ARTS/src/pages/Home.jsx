import React from 'react'
import Bappa from '../jsons/Bappa.json'
import Category from '../components/Category_cart'

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
      <Category></Category>
    </>
  )
}

export default Home
