import React, { Component } from 'react';
import axios from 'axios';
import Movies from '../components/Movies.jsx'
import AddMovie from '../components/AddMovie.jsx'

export default class Allmovies extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
            moviesdata: []
            
        }
        this.deleteMovie=this.deleteMovie.bind(this);
    }
    
    componentDidMount() {
        this.fetchdata()
    }
    deleteMovie(id){
     axios.delete(`/movie/${id}`)
     .then(({data})=>{
        this.setState({
            moviesdata:this.state.moviesdata.filter(movie=>movie._id !== data._id)
        })
     })
    }

    fetchdata() {
        axios.get("/movie").then(result => {
            console.log(data)
            this.setState({
                moviesdata: result.data
            })
        })
    }

   
    addMovie(movie) {
        this.setState({ moviesdata: [...this.state.moviesdata, movie] })

    }

    render() {
        return (
            <div>
                <AddMovie addMovie={this.addMovie.bind(this)} />
                <Movies   moviesdata={this.state.moviesdata} deleteMovie={this.deleteMovie}/>
              
                           
            </div>
        )
    }
}
