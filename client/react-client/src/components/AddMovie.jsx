import React, { Component } from 'react';
import axios from 'axios';



 class AddMovie extends Component {
    constructor(props){
        super(props)
            this.state={
                Title:"",
                Gender:"",
                ImageUrl:"",
                Description:""
            }
            this.handleChange= this.handleChange.bind(this)
    }


handleChange(e){
    this.setState({[e.target.name]:e.target.value})
}
add(){
axios.post('/movie', this.state).then(({data})=>{
   this.props.addMovie(data)
}).catch((err)=>{
    console.log(err);
})
}

    render() {
        return (
            
           <div className="movie-card">
                <h1> AddMovie</h1>
                <div className="container-card">
                <h3 className="title1">Title:</h3> 
                <input className="inp" type="text" name="Title" value={this.state.Title} onChange={this.handleChange}/>           
                <h3>Gender: </h3>
                <input className="inp" type="text" name="Gender" value={this.state.Gender} onChange={this.handleChange}/>
                <h3>Img Url:  </h3>
                <input  className="inp" type="text" name="ImageUrl" value={this.state.ImageUrl} onChange={this.handleChange}/>
                <h3>Description: </h3>
                <input className="inp" type="text" name="Description" value={this.state.Description} onChange={this.handleChange}/>
                <br/>
                <button onClick={this.add.bind(this)}>Add Movie</button>
                </div>
            </div>
        )
    }
}

export default AddMovie;