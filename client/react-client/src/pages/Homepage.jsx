// import React from 'react';
import React, { Component } from 'react';
import Homepic from '../components/Homepic.jsx'
import Info from '../components/Info.jsx'
import Footer from '../components/Footer.jsx';


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
         <Footer/> 

      </div>
    );
  }
}
export default Homepage; 