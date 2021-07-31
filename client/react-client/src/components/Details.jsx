import React, { Component } from 'react'


 class Details extends Component {
    render() {
        return (
            <>
            <div className="container">
               <h1>Title:{this.props.movie.Title  }</h1>
               <br/>
               <h1>Gender:{this.props.movie.Gender  }</h1>
                <img className="img" src={this.props.movie.ImageUrl }/>
               <h1>Description:{this.props.movie.Description  }</h1>
            </div>   
            </>
        )
    }
}

export default Details; 