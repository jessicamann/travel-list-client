import React, { Component } from 'react';
import Place from './Place';

class TravelList extends Component {
	render() {
		return (
		  <div className="List">
  			{this.getPlacesComponents(this.props.places)}
		  </div>
		);
	}

	getPlacesComponents(places){
		return ( 
			places.map((place) => <Place name={place.name} location={place.location} description={place.description} />)
		);
	}
}

export default TravelList
