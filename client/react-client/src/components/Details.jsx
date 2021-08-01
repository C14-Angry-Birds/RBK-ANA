import React, { Component } from 'react'
import axios from 'axios'
    


  class Details extends Component {
    constructor(props){
      super(props)
      this.deleteMovie=this.deleteMovie.bind(this)
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


    render() {
    return (
      <>
    <div className="card_movie">
         <img src={this.props.movie.ImageUrl} width="250px" />
         <div className="card_container">
             <h4>
               <b>{this.props.movie.Title}</b>
               <br />
               <span>{this.props.movie.Gender}</span>
             </h4>
             <p>{this.props.movie.Description}</p>
         </div>
       <button onClick={() => this.deleteMovie(this.props.movie._id)}>Delete</button>
      </div>
  
 

    </> 
        )
    }
}

export default Details;


