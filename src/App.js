import React, { Component } from 'react';
import './css/App.css';
import './css/Place.css';
import TravelList from './TravelList';
import TravelForm from './TravelForm';

class App extends Component {
  render() {
    let places = [
      {name: 'New York', location: 'New York', description: 'A place in eastern US'},
      {name: 'Chicago', location: 'Illinois', description: 'A place in centra US'},
      {name: 'San Francisco', location: 'Calinfornia', description: 'A place in western US'}
    ];

    return (
      <div className="App">
        <h2>Travel List</h2>
        <TravelForm />
        <TravelList places={places}/>
      </div>
    );
  }
}

export default App;
