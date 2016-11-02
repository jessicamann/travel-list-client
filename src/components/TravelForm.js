import React, { Component } from 'react';

class TravelForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: null,
      location: null,
      description: null
    }
  }

  render() {
    return (
      <form className='travel-form'>
        <input type='text' name='name-field' placeholder='Name of the place?' 
          onChange={(input) => this.setState({name: input.target.value})} />
        <input type='text' name='location-field' placeholder='Where is it?' 
          onChange={(input) => this.setState({location: input.target.value})} />
        <input type='text' name='description-field' placeholder='Some description?' 
          onChange={(input) => this.setState({description: input.target.value})} />
        <input type='submit' value='Send' onClick={(e) => this.handleClick(e)} />
      </form>
    );
  }

  handleClick(e) {
    e.preventDefault();
    this.props.onChange(this.state);
  }
}

export default TravelForm