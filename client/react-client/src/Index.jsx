import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import {
    BrowserRouter as Router,
    Switch,
    Route, Link
  } from "react-router-dom";
import Navbar from "./components/Navbar.jsx"
import Info from "./components/Info.jsx"
import Homepage from "./pages/Homepage.jsx"
import AllMovies from "./pages/AllMovies.jsx"
import Login from "./pages/Login.jsx"
import Sign_in from "./pages/Sign_in.jsx"
import Watch from "./pages/Watch.jsx"
import Img from "./components/Img.jsx"
import Footer from "./components/Footer.jsx"


export default class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {}      
    }

    render() {
        return (
        <>
        <Router>
      <div>
      <div className="top"> 
      <div className="topLeft">
      <img className="topImg"
              src="https://lh3.googleusercontent.com/v_La9fN347Xp4mx5YTP09ifrzdGV-0FO3_MZym9Qimvi1MmCdgGz3gPU72i6nIgRkbjmWsBQ82Hi7AIObAOF9bGfl8zHPoxgLn2ihp2aXFl5WggpmOAScplBcHJvzCxwWeSUZLdrT03_Uszc8n1-2UxCgA53tdICsRS6tN9ZXKZjC-nv5vZ6m95q5fG9kWUy67U8vkgJcOIw8gZNcZJDUAqKF-dnqiEu2Xtwp8XTAzrVUG7RhXChgOilRimKp0KirWeherwyet3dSYUzuA_sfPp_RHizT9S7cuRiLken0ztD05JWogtDdhbHd9vJQVa2isw4Sq6MlwZxsGG1yWYO_DJaAI9uXK8bDpMcY6bVLDMBwiadXuvv5R7h49mw9U1Co8Xhez-Iy03xoSvR6l73yxiia_hlSM-d6vm6lfYg0MJ74TH6rVfDlQPcxtQzQ_6naLB30w74l7CD5EfkwEhmO8DkaL3Iz24R5SQYMP_OKdS6lX4r7RwLg0jyBv_PX_6iyMRMWn8vkF7yvq1xoMwmsfClS2FvJzBRFqurwPPBMg7MRmgXNjN9DAH9Pt2rdrTxxp-gAynS6cM3Ukb57oUDprqKIBlo1mv8_pPobY4LYW1Rl5OgnIy4lX8B0MR9ChGruUT3keIMTIDdbNSnQbcDWyEMwWUym6zDSyUZgHRQUnbs0TaFoLJ41gNC3zMmXYHSGgDHhZcHxleQpCYainqe_60=w317-h238-no?authuser=0"
              alt=""
            />
      </div>
      <nav className="topCenter">
          <ul className="topList">
            <li className="topListItem">
              <Link style={{textDecoration: "none",
  color: "#adad44"}}  to="/">HOME</Link>
            </li>
            <li className="topListItem">
              <Link style={{textDecoration: "none",
  color: "#adad44"}}  to="/Info">MOVIES</Link>
            </li>
            <li className="topListItem">
              <Link style={{textDecoration: "none",
  color: "#adad44"}}  to="/AllMovies">ADMIN</Link>
            </li>
           
            <li className="topListItem">
              <Link style={{textDecoration: "none",
  color: "#adad44"}}  to="/Login">LOGIN</Link>
            </li>
            <li className="topListItem">
              <Link  style={{textDecoration: "none",
  color: "#adad44" }} to="/Sign_in">SIGN_IN</Link>
            </li>
          </ul>
        </nav>
        </div>

        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/Info">
            <Info />
          </Route>
          <Route exact path="/AllMovies">
            <AllMovies />
          </Route>
      

          <Route exact path="/Login">
            <Login />
          </Route>
          <Route exact path="/sign_in">
            <Sign_in />
          </Route>
        </Switch>
        {/* <Img/>
        <Footer/> */}
      </div>
    </Router>
    
          
            
        </>
        )
    }
}

ReactDOM.render(<Index />, document.getElementById('app'));





