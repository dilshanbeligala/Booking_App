import React from 'react'
import Featured from '../../components/featured/Featured'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'

import "./home.css"

 const Home = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle">Browse by property type</h1>
        
        </div>
        
    </div>
    

  );
};

export default Home;
