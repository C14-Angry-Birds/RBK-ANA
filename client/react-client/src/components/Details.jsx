import React, { Component } from 'react'
import axios from 'axios'


  class Details extends Component {
    constructor(props){
      super(props)
      this.state={
        
      }
      this.deleteMovie=this.deleteMovie.bind(this)
      this.update=this.update.bind(this)
    }

  componentDidMount(){
    console.log(this.props.movie)
  }

  deleteMovie(id){
   console.log(id)
axios.delete(`/movie/${id}`) .then(({data})=>{
   alert('deleted')
   location.reload()   
})
}
update(movie){
  
    this.props.changeMovie(movie)
}


    render() {
    return (
        <div className="card1">
         
        <div className="card-container">
            <div id="final">
        <img src={this.props.movie.ImageUrl} width="250px" />
          <h4>
            <b>{this.props.movie.Title}</b>
            <br />
            <span>{this.props.movie.Gender}</span>
          </h4>
          <p>{this.props.movie.Description}</p>
          <button onClick={() => this.deleteMovie(this.props.movie._id)}>Delete</button>
          <button onClick={() => this.update(this.props.movie)}>UpdateMovie</button> 
        </div>
      </div>
      
    </div>  
    
    
        )
    }
}

export default Details;


