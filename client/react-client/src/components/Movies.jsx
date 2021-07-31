import React, { Component } from 'react'
import Details from './Details.jsx'
import data from '../../../../data.json';
 class Movies extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataSeed:data
        }
              
            }
    render() {
        return (
            <>
               
               {
                   this.state.dataSeed.map((movie,index)=>(
                       <Details deleteMovie={this.props.deleteMovie} movie={movie} key={index}/>

                   ))
               }
            </>
        )
    }
}

export default Movies;