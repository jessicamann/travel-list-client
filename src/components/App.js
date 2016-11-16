import React, { Component } from 'react';
import axios from 'axios';
import '../css/App.css';
import ToVisitList from './ToVisitList';
import AddPlaceForm from './AddPlaceForm';

class App extends Component {
  componentDidMount() {
    this.getAllPlaces();
  }

  constructor() {
    super();

    //todo: figure out how to make the environment variable work for a view application
//    this.baseUrl = process.env.API_BASE_URL || 'http://localhost:5000'; //local use
    this.baseUrl = "https://travel-app-example-api.herokuapp.com";
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
    axios.post(this.baseUrl + '/add', {
      name: newPlace.name,
      location: newPlace.location,
      description: newPlace.description
    })
    .then(response => {
      this.getAllPlaces(); //todo: is another database call excessive? I don't expect a lot of traffic or data though...
    })
    .catch(error => {
      alert('unable to add this place');
      console.log(error);
    });
  }

  getAllPlaces() {
      axios.get(this.baseUrl + '/places')
        .then(response => {
          this.setState({places: response.data.data.reverse()})
        })
        .catch(error => {
          alert('unable to retrieve all places');
          console.log(error);
        });
      return [];
    }
}

export default App;
