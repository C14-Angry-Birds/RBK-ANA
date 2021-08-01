<<<<<<< HEAD
import React, { Component } from 'react'
import Details from './Details.jsx'
import data from '../../../../data.json';
import axios from "axios"
=======
import React, { Component } from 'react';
import Details from './Details.jsx';
import data from '../../../../data.json';
import axios from "axios";

>>>>>>> 2fc0a31485902aa3ae71536557c89870e9f8ec9e
 class Movies extends Component {
    constructor(props) {
        super(props)
        this.state = {
<<<<<<< HEAD
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
=======
            dataSeed: data
        }}
        componentDidMount(){
             
            axios.get("/movie").then(result => {
                
                this.setState({
                    dataSeed: result.data
                })
            })
        
    }
    
>>>>>>> 2fc0a31485902aa3ae71536557c89870e9f8ec9e
    render() {
        return (
            <>
               
               {
<<<<<<< HEAD
                   this.state.dataSeed.map((movie,index)=>(
=======
                   this.props.moviesdata.map((movie,index)=>(
>>>>>>> 2fc0a31485902aa3ae71536557c89870e9f8ec9e
                       <Details  movie={movie} key={index}/>

                   ))
               }
            </>
        )
    }
}

export default Movies;

/******** */
// import React, { Component } from 'react'
// import Details from './Details.jsx'
// import data from '../../../../data.json';
// import axios from "axios"
//  class Movies extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             dataSeed:data
//         }
              
//             }
//             componentDidMount(){
             
//                     axios.get("/movie").then(result => {
                        
//                         this.setState({
//                             dataSeed: result.data
//                         })
//                     })
                
//             }
//     render() {
//         return (
//             <>
               
//                {
//                    this.state.dataSeed.map((movie,index)=>(
//                        <Details  movie={movie} key={index}/>

//                    ))
//                }
//             </>
//         )
//     }
// }

// export default Movies;