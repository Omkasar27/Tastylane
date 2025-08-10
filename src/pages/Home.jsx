import React from 'react'
import Hero from '../components/Hero'

import Categories from '../components/Categories'
import Populardishes from '../components/Populardishes'

const Home = () => {
  return (
    <div>
      <Hero />
      <Categories/>
      <Populardishes/>
      
    </div>
  )
}

export default Home