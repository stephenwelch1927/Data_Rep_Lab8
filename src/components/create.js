import { render } from '@testing-library/react';
import React from 'react';
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';
//Class created for Create
export class Create extends React.Component {
    //Constructor 
    constructor() {
        //Super call to parent class
        super();
        //Binding data to allow data to be updated
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeYear = this.onChangeYear.bind(this);
        this.onChangePoster = this.onChangePoster.bind(this);
        
        //Defined the state to be updated
        this.state = {
            Title: '',
            Year: '',
            Poster: ''
        }
    }
    //Methods onChange when called will update the fields specified
    onChangeTitle(e) {
        this.setState({
            Title: e.target.value
        });
    }
    onChangeYear(e){
        this.setState({
            Year: e.target.value
        });
    }
    onChangePoster(e){
        this.setState({
            Poster: e.target.value
        });
    }
    //On Submit method that will alert the data provided in Title, Year and Poster
    onSubmit(e) {
        e.preventDefault();
        alert("Movie: "+this.state.Title+ " "+this.state.Year+ " "+this.state.Poster);
    }
    render() {
        return (
            //Divs Created for various different fields encapsulated within a form
            //Contains event handlers onChange 
            <div className='App'>
                <form onSubmit={this.onSubmit}>
                    <div className="Form Group">
                        <label>Add Movie Title: </label>
                        <input type='text'
                            className='form-control'
                            value={this.state.Title}
                            onChange={this.onChangeTitle}></input>
                    </div>
                    <div className="Form Group">
                        <label>Add Movie Year</label>
                        <input type='text'
                        className='form-control'
                        value={this.state.Year}
                        onChange={this.onChangeYear}></input>
                    </div>
                    <div className="Form Group">
                    <label>Movie Poster: </label>
                    <textarea type='text'
                    className='form-control'
                    value={this.state.Poster}
                    onChange={this.onChangePoster}>
                    </textarea>
                    </div>
                    <div className="Form-Group">
                        <input type='submit'
                            value='Add Movie'
                            className='btn btn-primary'></input>

                    </div>
                </form>
            </div>
        );
    }
}