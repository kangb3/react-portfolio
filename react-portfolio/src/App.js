import React from 'react';
import './App.css';

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
      contact: {
        title: 'Contact me'
      }
    }
  }


  render() {
    return (
      <div>Hello World</div>
    );
  }
}

export default App;
