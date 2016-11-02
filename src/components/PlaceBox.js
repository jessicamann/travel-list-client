import React, { Component } from 'react';

class PlaceBox extends React.Component {
  render() {
    return (
      <div className='box box1'>
      	<div className='dashed-box'>
          <h2 className='Place-name'>{this.props.name}</h2>
          <h3 className='Place-location'>Location: {this.props.location}</h3>
          <h3 className='Place-description'>Description: {this.props.description}</h3>
        </div>
      </div>
    );		
  }
}

export default PlaceBox