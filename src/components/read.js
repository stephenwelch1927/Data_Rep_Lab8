import React from 'react';
import '../App.css';
import { Movies } from './movies';
//Import axios so we can retrive data from server
import axios from 'axios';
//Class created for the Read contents marked for export as will be imported
export class Read extends React.Component {
    //State used to store JSON data as an array of objects
    state = {
        movies: []
    };
    //Axios used to retrive data from url
    //Use Component didMount to retrive data from JSON data url life cycle hook
    //The used arrow functions to retrive data if successful and also a catch for an error
    componentDidMount() {
        axios.get('http://localhost:4000/api/movies')//Update the url to updated movies
            .then(
                (response) => {
                    this.setState({ movies: response.data.movies })//Updated state to refer to movies objects
                })
            .catch((error) => { console.log(error) }
            );
    }

    //Embedded content from movies component
    //Data taken from the State Object
    render() {
        return (
            <div className="App">
                <h1>This is the read Component.</h1>
                <Movies movies={this.state.movies}></Movies>
            </div>
        );
    }
}