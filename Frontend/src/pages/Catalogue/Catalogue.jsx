import React from 'react'
import PropTypes from 'prop-types'
import c1 from '../../images/carousel-1.jpg';
import c2 from '../../images/carousel-2.jpg';
import c3 from '../../images/carousel-3.jpg';
import anatomy from '../../images/song-lesson-pic.png';
import products from './productdata';
import Slide from './Slide';

import './Catalogue.css';
import { useNavigate } from 'react-router';
import CataMonial from '../../components/CataMonial/CataMonial';
import SearchEngine from '../../components/Search/SearchEngine';

const Catalogue = (props) => {
    const navigate = useNavigate();
    const customStyle = {
        height: '800px',
        width: '1500px',
        padding: '10px'
      };

      const customStyle2 = {
        color: 'rgb(255, 255, 255)',
        fontFamily: "'Bruno Ace', cursive"
      };

      const customStyle3 = {
        height: '197px',
        width: '347px',
        // Add other CSS properties as needed
      };

      const customStyle4 = {
        marginBottom : '3rem'
      }
    
  return (
    <div>
       <div className="head-slides">
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={c1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={c2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={c3} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    <CataMonial />

                    {/* <hr/> */}
                    <nav className="navbar bg-fuchsia-200" id="navbar-id" style={{backgroundColor:"white"}}>
                      <div className="container-fluid bg-fuchsia-200">
                        <a className="text-neutral-950" >OUR COURSES</a>
                        <SearchEngine />
              
                      </div>

                    </nav>
                    
                    <div className='home_section p-2 mr-3 bg-fuchsia-200'>
                      <Slide title="MUSIC THEORY" products={products}/>

                      <Slide title="MUSIC THEORY" products={products}/>

                      <Slide title="MUSIC THEORY" products={products}/>
                    </div>
                    <hr />
                    <div className="bg-fuchsia-200">
                      <h1 className="text-black text-5xl">ANATOMY OF SONG LESSONS</h1>
                      <img src={anatomy} style={customStyle} />
                    </div>

    </div>
  )
}

Catalogue.propTypes = {

}

export default Catalogue


