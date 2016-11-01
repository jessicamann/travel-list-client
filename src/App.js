import React, { Component } from 'react';
import './css/App.css';
import './css/Place.css';
import TravelList from './components/TravelList';
import TravelForm from './components/TravelForm';

class App extends Component {
  constructor() {
    super();

    /* TODO: mvp storage solution... Should be in a simple db or a file */
    this.state = {
      places: [
        {name: 'New York', location: 'New York', description: 'A place in eastern US'},
        {name: 'Chicago', location: 'Illinois', description: 'A place in centra US'},
        {name: 'San Francisco', location: 'Calinfornia', description: 'A place in western US'}
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <h2>Travel List</h2>
        <TravelForm onClick={() => this.handleClick()}/>
        <TravelList places={this.state.places}/>
      </div>
    );
  }

  handleClick() {
    alert("click handled");
  }

}

export default App;
