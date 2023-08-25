/****************************
* File Name: Home.jsx       *
* Author: Ameen Hamza       *
* Output: User Landing Page *
****************************/

import React from 'react';
import CrouselItem from '../components/CrouselItem';
import '../App.css';
import Badge from 'react-bootstrap/Badge';
import { Link, useParams } from 'react-router-dom';
import HomePage from '../components/HomePage';
import Feature from '../components/Feature';
import Partner from '../components/Partner';
import Button from 'react-bootstrap/Button';


const Home = () => {
  return (
    <>
      {/* Crousel start from here */}
      
      <>
  <div className="main-section">
    <div className="main-content">
      <h4>
        <span className="span">Best Price</span>
      </h4>
      <h1>Incredible Prices</h1>
      <h1>on All Your</h1>
      <h1>Favourite Items</h1>
      <p>Get more for selected brands</p>
      <button>Shop Now</button>
    </div>
  </div>
  
</>

      
      {/* Crousel end */}

      <div className="container">
        <header className="jumbotron mt-5">
          <h1 className="prod-head my-5 shadow-text">Welcome to Mymart</h1>
          <p className="text-center fs-5 fw-2">Discover Your Style, Shop with Ease</p>
          <hr className="my-4" />
          <div className='d-flex justify-content-between align-items-center browse-c'>
            <p className='me-4 browse'>Explore our wide range of high-quality products.</p>
            <Link to="/products"><Button type="button" className='custom-button'>Browse Products</Button></Link>
          </div>
        </header>
      </div>

      {/* Main section starts from here */}

      {/* Another Categories */}
      <HomePage />

      {/* Feature Product */}
      <Feature />

      {/* Partners Section */}
      <Partner />


    </>
  );
};

export default Home;
