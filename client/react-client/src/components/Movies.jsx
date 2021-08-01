import React, { Component } from 'react'
import Details from './Details.jsx'
import data from '../../../../data.json';
import axios from "axios"
 class Movies extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataSeed:data
        }
              
            }
            componentDidMount(){
             
                    axios.get("/movie").then(result => {
                        
                        this.setState({
                            dataSeed: result.data
                        })
                    })
                
            }
    render() {
        return (
            <>
               
               {
                   this.state.dataSeed.map((movie,index)=>(
                       <Details  movie={movie} key={index}/>

                   ))
               }
            </>
        )
    }
}

export default Movies;