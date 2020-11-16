import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';


import Footer from './components/Footer';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      title: 'Baldeep Kang',
      headerLinks: [
        {title: 'About', path: '/'},
        {title: 'Projects', path: '/projects'},
        {title: 'Contact', path: '/contact'},

      ],
      about: {
        title: 'About me'
      },
      projects: {
        title: 'My Portfolio',
        subTitle: 'Projects are cool',
        text: 'checkout my projects'
      },
      contact: {
        title: 'Contact Me'
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
                  <Link className="nav-link" to = "/">About</Link>
                  <Link className="nav-link" to = "/Projects">Projects</Link>
                  <Link className="nav-link" to = "/Contact">Contact</Link>

                  
                </Nav>
              </Navbar.Collapse>
            </Navbar>

            <Route path="/" exact render={() => <About title ={this.state.about.title} />} />
            <Route path="/projects" render={() => <Projects title={this.state.projects.title} />} subTitle ={this.state.projects.subTitle} text={this.state.projects.text}/>
            <Route path="/contact" render={() => <Contact title ={this.state.contact.title} />} />
            <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;
