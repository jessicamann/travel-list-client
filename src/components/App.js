import React, { Component } from 'react';
import '../css/App.css';
import '../css/addPlaceForm.css';
import '../css/place.css'
import ToVisitList from './ToVisitList';
import AddPlaceForm from './AddPlaceForm';

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
        <AddPlaceForm onChange={(newPlace) => this.handleClick(newPlace)}/>
        <ToVisitList places={this.state.places}/>
      </div>
    );
  }

  handleClick(newPlace) {
    newPlace.id=this.state.places.length+1;
    const newList = this.state.places.concat(newPlace);

    this.setState({places: newList});
  }

}

export default App;
