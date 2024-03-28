import React from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Banner from './Banner';
import NavbarTwo from './NavbarTwo';
import CategoriesBanner from './CategoriesBanner';
const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <NavbarTwo/>
      <Banner/>
      <CategoriesBanner/>
    </div>
  )
}

export default Home
