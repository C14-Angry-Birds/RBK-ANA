import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import Navbar from "./components/Navbar.jsx"
import Homepage from "./pages/Homepage.jsx"
import AllMovies from "./pages/AllMovies.jsx"
import Login from "./pages/Login.jsx"
import Sign_in from "./pages/Sign_in.jsx"
import Watch from "./pages/Watch.jsx"


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
                 <Navbar/>
                <AllMovies/>
                    
                    <Switch>
                    <Route exact path="/">
                      <Homepage/>
                    </Route>


                    <Route exact path="/AllMovies">
                        <AllMovies />
                    </Route>


                    <Route exact path="/Watch">
                        <Watch />
                    </Route>

                   

                    <Route exact path="/Sign_in">
                        <Sign_in />
                    </Route>

                    <Route exact path="/Login">
                        <Login />
                    </Route>

                    </Switch>
                </div>
             </Router>
            
        </>
        )
    }
}

ReactDOM.render(<Index />, document.getElementById('app'));

