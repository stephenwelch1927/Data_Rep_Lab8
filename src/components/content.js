import React from 'react';
import '../App.css';
//Class created for content 
export class Content extends React.Component{

    render(){
        return(
            //Content taken from original app and now inserted into a class 
            <div className="App">
                <h1>Hello World!</h1>
                <h2>It is {new Date().toLocaleTimeString()}.</h2>
            </div>
        );
    }
}