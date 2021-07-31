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
            <>
              <h1>List to AddMovie</h1>
              <div className="box">
               <h1>Title:</h1> 
               <input type="text" name="Title" value={this.state.Title} onChange={this.handleChange}/>           
               <h1>Gender: </h1>
                <input type="text" name="Gender" value={this.state.Gender} onChange={this.handleChange}/>
               <h1>Img Url:  </h1>
                <input type="text" name="ImageUrl" value={this.state.ImageUrl} onChange={this.handleChange}/>
               <h1>Description: </h1>
                <input type="text" name="Description" value={this.state.Description} onChange={this.handleChange}/>
            </div> 
            <button onClick={this.add.bind(this)}>Add Movie</button>

            {/* <button onClick={this.Up.bind(this)}>UpDate Movie</button>
            <button onClick={this.Del.bind(this)}>Delete Movie</button> */}

            </>
        )
    }
}

export default AddMovie;