import React from 'react';
import {MovieItem} from './movieItem';

//Class created for movies component
//Accessing the properties from movies
//Use the map function to break up collection
export class Movies extends React.Component{
    render(){
        return this.props.movies.map((movie)=>{
            return <MovieItem movie={movie} ></MovieItem>
        })

        
    }
}