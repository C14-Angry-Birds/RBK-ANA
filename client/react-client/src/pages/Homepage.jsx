// import React from 'react';
import React, { Component } from 'react';
import Homepic from '../components/Homepic.jsx'
import Info from '../components/Info.jsx'
import Footer from '../components/Footer.jsx';
import Img from '../components/Img.jsx'


class Homepage extends React.Component {
  constructor() {
    super();
    this.state = {
      
    }
  }

  render() {
    return (
      <div className="imagehome"> 
          <Homepic/>
          <Info/>
          <Img/>
         <Footer/> 

      </div>
    );
  }
}
export default Homepage; 