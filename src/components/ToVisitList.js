import React, { Component } from 'react';
import Place from './Place';

class ToVisitList extends Component {
  render() {
    return (
      <div>
        {this.getPlacesComponents(this.props.places)}
      </div>
    );
  }

  getPlacesComponents(places){
    return ( 
      places.map((place) => <Place name={place.name} location={place.location} description={place.description} key={place.id}/>)
    );
  }
}

export default ToVisitList
