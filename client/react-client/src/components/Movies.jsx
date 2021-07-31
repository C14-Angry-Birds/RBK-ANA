import React, { Component } from 'react'
import Details from './Details.jsx'

 class Movies extends Component {
    render() {
        return (
            <>
               
               {
                   this.props.moviesdata.map((movie,index)=>(
                       <Details movie={movie} key={index}/>
                   ))
               }
            </>
        )
    }
}

export default Movies;