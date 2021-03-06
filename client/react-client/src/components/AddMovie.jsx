import React, { Component } from 'react'
import axios from 'axios';
class AddMovie extends Component {
  constructor(props){
      super(props)
          this.state={
              Title:"",
              Gender:"",
              ImageUrl:"",
              Description:"",
              
              
              NewTitle:"",
              NewGender:"",
              NewImageUrl:"",
              NewDescription:""
          }
          this.handleChange= this.handleChange.bind(this)
          this.confirmUpdate=this.confirmUpdate.bind(this);
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
confirmUpdate(e){
  e.preventDefault()
  console.log(this.state)
  axios.put('/movie/'+this.props.selectedMovie._id,{
    Title:this.state.NewTitle,
    Gender:this.state.NewGender,
    ImageUrl:this.state.NewImageUrl,
    Description:this.state.NewDescription})
    .then((data)=>{
      location.reload()
    })
}

    render() {
        return (
            <div >
           <div className="movie-card">
                <h1> AddMovie</h1>
                <div className="container-card">
                <h3 className="title1">Title:</h3> 
                <input className="inp" type="text" name="Title" value={this.state.Title} onChange={this.handleChange}/>                    
                <h3>Gender: </h3>
                <input className="inp" type="text" name="Gender"  onChange={this.handleChange}/>
                <h3>Img Url:  </h3>
                <input  className="inp" type="text" name="ImageUrl" value={this.state.ImageUrl} onChange={this.handleChange}/>
                <h3>Description: </h3>
                <input className="inp" type="text" name="Description" value={this.state.Description} onChange={this.handleChange}/>
                <br/>
                <button onClick={this.add.bind(this)}>Add Movie</button>
                </div>
            </div>
            <br/>
           <div className="movie-card">
                <h1> Update Movie</h1>
                <div className="container-card">
                <h3 className="title1">Title:</h3> 
                <input defaultValue={this.props.selectedMovie.Title}  className="inp" type="text" name="NewTitle"  placeholder="update-description" onChange={this.handleChange}/>           
                <h3>Gender: </h3>
                <input defaultValue={this.props.selectedMovie.Gender} className="inp" type="text" name="NewGender"  placeholder="update-description" onChange={this.handleChange}/>
                <h3>Img Url:  </h3>
                <input defaultValue={this.props.selectedMovie.ImageUrl}  className="inp" type="text" name="NewImageUrl"  placeholder="update-description" onChange={this.handleChange}/>
                <h3>Description: </h3>
                <input defaultValue={this.props.selectedMovie.Description} className="inp" type="text" name="NewDescription" placeholder="update-description" onChange={this.handleChange}/>
                <br/>
                <button onClick={this.confirmUpdate}>Update Movie</button>
                </div>
            </div>
            <div/>
            </div>
        )
    }
}

export default AddMovie;
