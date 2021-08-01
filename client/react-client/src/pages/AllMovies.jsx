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
this.deleteMovie=this.deleteMovie.bind(this)
    }

    componentDidMount() {
        this.fetchdata()
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
              
                <AddMovie addMovie={this.addMovie.bind(this)}  />
                <Movies   moviesdata={this.state.moviesdata} deleteMovie={this.deleteMovie} />

                {/* <AddMovie addMovie={this.addMovie.bind(this)} />
                <Movies moviesdata={this.state.moviesdata} /> */}
                           
            </div>
        )
    }
}
