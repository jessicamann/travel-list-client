import React, { Component } from 'react';
import axios from 'axios';
import '../css/App.css';
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
    //todo: make this work!!
//      var baseUrl = process.env.API_BASE_URL || 'http://localhost:5000';
      var baseUrl = "https://travel-app-example-api.herokuapp.com";
      axios.get(baseUrl + '/places')
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
