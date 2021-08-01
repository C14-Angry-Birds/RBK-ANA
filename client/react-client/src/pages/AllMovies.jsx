import React, { Component } from 'react';
import axios from 'axios';
import Movies from '../components/Movies.jsx'
import AddMovie from '../components/AddMovie.jsx'

export default class Allmovies extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
            moviesdata: [],
            movieToUpdate:{}
            
        }
        this.deleteMovie=this.deleteMovie.bind(this);
        this.toUpdate=this.toUpdate.bind(this);
    }
    toUpdate(movieToUpdate){
     this.setState({
        movieToUpdate
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

   update(updatedData){
       this.setState({moviesdata:[... this.state.moviesdata.filter((movie)=>movie._id !== updatedData._id),movie] })
     
   }


    addMovie(movie) {
        this.setState({ moviesdata: [...this.state.moviesdata, movie] })

    }

    render() {
        return (
            <div>
                
                <AddMovie addMovie={this.addMovie.bind(this)} Update={this.state.Update} />
                <Movies   moviesdata={this.state.moviesdata} deleteMovie={this.deleteMovie} toUpdate={this.props.toUpdate}/>
              
                       
            </div>
        )
    }
}
