import React from 'react'
import Hero from '../Components/Hero/Hero'
import Category from '../Components/Category/Category'
import Service from '../Components/Service/Service'
import Blog from '../Components/Blog/Blog'
import Brands from '../Components/Brands/Brands'
import Footer from '../Components/Footer/Footer'

const Home = () => {
  return (
    <div>
      <Hero />
      <Category />      
      <Service />
      <Blog />
      <Brands />
      <Footer />
    </div>
  )
}

export default Home
