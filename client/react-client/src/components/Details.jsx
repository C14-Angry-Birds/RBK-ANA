import React, { Component } from 'react'
import axios from 'axios';

 class Details extends Component {
         
    render() {
        return (
            
    <div>

    <div className="card">
     
      <div className="card-container">
      <img src={this.props.movie.ImageUrl} width="250px" />
        <h4>
          <b>{this.props.movie.Title}</b>
          <br />
          <span>{this.props.movie.Gender}</span>
        </h4>
        <p>{this.props.movie.Description}</p>
        <button onClick={() => this.props.deleteMovie(this.props.movie._id)}>Delete</button>
        
      </div>
    
    </div>
    
    {/* <button onClick={() => props.setMovieToUpdate(props.movie)}>Update</button> */}
  </div>  
            
        )
    }
}

export default Details; 
