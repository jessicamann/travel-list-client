import React, { Component } from 'react';

class Place extends React.Component {
  render() {
    return (
      <div className='box'>
      	<div className='dashed-box'>
      	  <p>Put an image here!</p>
      	</div>
        <h2>{this.props.name}</h2>
        <h3>Location: {this.props.location}</h3>
        <h3>Description: {this.props.description}</h3>
        <div className='box_ribbon' />
      </div>
    );		
  }
}

export default Place