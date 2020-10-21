import React from 'react';
//Import so we can use the card container from bootstrap
import Card from 'react-bootstrap/Card';
export class MovieItem extends React.Component {
    render() {
        return (
            //A div containing a boot strap card with our properties inserted
            <div>
                <Card>
                    <Card.Header>{this.props.movie.Title}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.movie.Poster} width="200" height="200"></img>
                            <footer className="blockquote-footer">
                                {this.props.movie.Year}
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>

            </div>
        );
    }
}