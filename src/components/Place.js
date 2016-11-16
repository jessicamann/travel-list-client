import React, { Component } from 'react';
import '../css/place.css'

class Place extends React.Component {
  render() {
    return (
      <div className='box'>
      	<div className='dashed-box'>
      	  <p>Put an image here!</p>
      	</div>
        <h2>{this.props.name}</h2>
        <h3>{this.props.location}</h3>
        <h3>{this.props.description}</h3>
        <a href='#' className="delete" onClick={(e) => this.props.onDelete(this.props.id)}>delete</a>
        <div className='box_ribbon' />
      </div>
    );		
  }
}

export default Place