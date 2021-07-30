import React, { Component } from 'react';
import axios from 'axios';

export default class Allmovies extends Component {
    constructor(props) {
        super(props)
        this.state = {
            view: "Borrow",
            cats: seeddata,
            catDb: []
        }
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
        this.fetchdata()
    }

    fetchdata() {
        axios.get("/cats").then(result => {
            this.setState({
                catDb: result.data
            })
        })
    }

    handleChange(value) {
        this.setState({
            view: value
        })
    }
    addCat(cat) {
        this.setState({ catDb: [...this.state.catDb, cat] })

    }

    render() {
        return (
            <div>
                <div>
                    <button onClick={() => { this.handleChange("Borrow") }}> Borrow </button>
                    <button onClick={() => { this.handleChange("Lend") }}> Lend </button>
                </div>
                <div>
                    {(this.state.view === "Borrow") ? (<Borrow cats={this.state.catDb} />) : (<Lend addCat={this.addCat.bind(this)} />)}
                </div>
            </div>
        )
    }
}
export default Allmovies;