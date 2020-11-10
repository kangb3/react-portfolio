import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';


import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      title: 'Baldeep Kang',
      headerLinks: [
        {title: 'Home', path: '/'},
        {title: 'About', path: '/about'},
        {title: 'Projects', path: '/projects'},

      ],
      home: {
        title: 'My Portfolio',
        text: 'checkout my projects'
      },
      about: {
        title: 'About Me'
      },
      projects: {
        title: 'Projects'
      }
    }
  }


  render() {
    return (
      <Router>
        <Container className= "p-0" fluid={true}>

          <Navbar className = "border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Baldeep Kang</Navbar.Brand>

              <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
              <Navbar.Collapse id="navbar-toggle">
                <Nav className="ml-auto">
                  <Link className="nav-link" to = "/">Home</Link>
                  <Link className="nav-link" to = "/About">About</Link>
                  <Link className="nav-link" to = "/Projects">Projects</Link>

                  
                </Nav>
              </Navbar.Collapse>
            </Navbar>

            <Route path="/" exact render={() => <Home title ={this.state.home.title} />} subTitle ={this.state.home.subTitle} text={this.state.home.text}/>
            <Route path="/about" render={() => <About title ={this.state.about.title} />} />
            <Route path="/projects" exact render={() => <Projects title ={this.state.projects.title} />} />
            <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;
