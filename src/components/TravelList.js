import React, { Component } from 'react';
import PlaceBox from './PlaceBox';

class TravelList extends Component {
  render() {
    return (
      <div>
        {this.getPlacesComponents(this.props.places)}
      </div>
    );
  }

  getPlacesComponents(places){
    return ( 
      places.map((place) => <PlaceBox name={place.name} location={place.location} description={place.description} key={place.id}/>)
    );
  }
}

export default TravelList
