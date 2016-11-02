import React, { Component } from 'react';
import './css/App.css';
import './css/PlaceBox.css';
import './css/boxes.css'
import TravelList from './components/TravelList';
import TravelForm from './components/TravelForm';

class App extends Component {
  constructor() {
    super();

    /* TODO: temp storage solution... Should be in a simple db or a file */
    this.state = {
      places: [
        {name: 'New York', location: 'New York', description: 'A place in eastern US', id: 1},
        {name: 'Chicago', location: 'Illinois', description: 'A place in centra US', id: 2},
        {name: 'San Francisco', location: 'Calinfornia', description: 'A place in western US', id: 3}
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <h2>Travel List</h2>
        <TravelForm onChange={(newPlace) => this.handleClick(newPlace)}/>
        <TravelList places={this.state.places}/>
      </div>
    );
  }

  handleClick(newPlace) {
    const newList = this.state.places.concat({
      name: newPlace.name,
      location: newPlace.location,
      description: newPlace.description,
      id: this.state.places.length+1  
    });

    this.setState({places: newList});
  }

}

export default App;
