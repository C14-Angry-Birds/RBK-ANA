import React, { Component } from 'react';
import axios from 'axios';
import Movies from '../components/Movies.jsx'
import AddMovie from '../components/AddMovie.jsx'
import Footer from '../components/Footer.jsx';
export default class Allmovies extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
            moviesdata: [],
            selectedMovie:{}
            
            
        }
this.deleteMovie=this.deleteMovie.bind(this);
this.changeMovie=this.changeMovie.bind(this);
    }
    changeMovie(movie){
      this.setState({
          selectedMovie:movie
      })
    }

    
    componentDidMount() {
        this.fetchdata()
    }
    deleteMovie(id){
        console.log(id)
     axios.delete(`/movie/${id}`)
     .then(({data})=>{
        // this.setState({
        //     moviesdata:this.state.moviesdata.filter(movie=>movie._id !== data._id)
        // })
        this.componentDidMount()
     })
    }

    fetchdata() {
        axios.get("/movie").then(result => {
            
            this.setState({
                moviesdata: result.data
            })
        })
    }

    deleteMovie(id){
        console.log(id)
     axios.delete(`/movie/${id}`)
     .then(({data})=>{
        // this.setState({
        //     moviesdata:this.state.moviesdata.filter(movie=>movie._id !== data._id)
        // })
        this.componentDidMount()
     })
    }



    addMovie(movie) {
        this.setState({ moviesdata: [...this.state.moviesdata, movie] })

    }

    render() {
        return (
            <div>
              
                <AddMovie selectedMovie={this.state.selectedMovie} addMovie={this.addMovie.bind(this)}  />
                <Movies changeMovie={this.changeMovie}   moviesdata={this.state.moviesdata} deleteMovie={this.deleteMovie} />


              <Footer/>             
            </div>
        )
    }
}
