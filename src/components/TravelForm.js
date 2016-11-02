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
        <input type='text' ref='name' placeholder='Name of the place?' value={this.state.name ? this.state.name : ''}
          onChange={(input) => this.setState({name: input.target.value})} />
        <input type='text' ref='location' placeholder='Where is it?' value={this.state.location ? this.state.location : ''}
          onChange={(input) => this.setState({location: input.target.value})} />
        <input type='text' ref='description' placeholder='Some description?' value={this.state.description ? this.state.description : ''}
          onChange={(input) => this.setState({description: input.target.value})} />
        <input type='submit' value='Send' onClick={(e) => this.handleClick(e)} />
      </form>
    );
  }

  handleClick(e) {
    e.preventDefault();
    this.props.onChange(this.state);
    this.clearForm();
  }

  clearForm() {
    this.setState({name: null, location: null, description: null})
  }
}

export default TravelForm