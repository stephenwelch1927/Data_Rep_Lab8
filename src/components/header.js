import React from 'react';
import '../App.css';
//Class created for the Header contents
export class Header extends React.Component{

    render(){
        return(
            <div className="App">
                <h1>My Header in another Component.</h1>
            </div>
        );
    }
}