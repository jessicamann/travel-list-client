import React, { Component } from 'react';
import axios from 'axios';
import '../css/App.css';
import '../css/addPlaceForm.css';
import '../css/place.css'
import ToVisitList from './ToVisitList';
import AddPlaceForm from './AddPlaceForm';

class App extends Component {
  componentDidMount() {
    this.getDefaultPlaces();
  }

  constructor() {
    super();

    this.state = {
      places: []
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

  getDefaultPlaces() {
      axios.get("http://localhost:4000/api/places")
        .then(response => {
          this.setState({places: response.data.data})
        })
        .catch(error => {
          console.log(error);
        });
      return [];
    }
}

export default App;
