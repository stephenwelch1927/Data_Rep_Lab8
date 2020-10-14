import React from 'react';
import logo from './logo.svg';
import './App.css';
//Import the header class
import { Header } from './components/header';
//Import the footer class
import { Footer } from './components/footer';
import { render } from '@testing-library/react';
//Import the content class
import { Content } from './components/content';
//Import to use bootstrap features
import 'bootstrap/dist/css/bootstrap.min.css';
//Import to use Navbar from bootStrap
import { Navbar, Nav } from 'react-bootstrap';
//Import needed to use routing and navigation
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//Class created for App
class App extends React.Component {
  render() {
    return (
      //Encapsulate the Div to be able to use routing 
      //NavBar taken from bootstrap
      //Switch Statement that routes the path to the exact link in the navbar
      <Router>
        <div className="App">
          <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/read">Read</Nav.Link>
              <Nav.Link href="/create">Create</Nav.Link>
            </Nav>
          </Navbar>
          <br></br>
          <switch>
            <Route path='/' component={Content} exact />
            <Route path='/create' component={Header} exact />
            <Route path='/read' component={Footer} exact />
          </switch>
        </div>
      </Router>
    );
  }
}
export default App;
