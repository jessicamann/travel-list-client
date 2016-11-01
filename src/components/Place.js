import React, { Component } from 'react';

class Place extends React.Component {
  render() {
    return (
      <div className='Place-box box-color-peach'>
        <h2 className='Place-name'>{this.props.name}</h2>
        <h3 className='Place-location'>Location: {this.props.location}</h3>
        <h3 className='Place-description'>Description: {this.props.description}</h3>
      </div>
    );		
  }
}

export default Place