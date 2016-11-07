import React, { Component } from 'react';

class AddPlaceForm extends React.Component {
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
        <input type='text' className="text-field" placeholder='Name of the place?' value={this.state.name ? this.state.name : ''}
          onChange={(input) => this.setState({name: input.target.value})} />
        <input type='text' className="text-field"  placeholder='Where is it?' value={this.state.location ? this.state.location : ''}
          onChange={(input) => this.setState({location: input.target.value})} />
        <input type='text' className="text-field"  placeholder='Some description?' value={this.state.description ? this.state.description : ''}
          onChange={(input) => this.setState({description: input.target.value})} />
        <input type='submit' className="button" value='Send' onClick={(e) => this.handleClick(e)} />
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

export default AddPlaceForm