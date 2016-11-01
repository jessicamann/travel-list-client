import React, { Component } from 'react';

class TravelForm extends React.Component {
	render() {
		return (
		 	<form className='travel-form'>
        		<input type='text' name='name' placeholder='Name of the place?' />
				<input type='text' location='location' placeholder='Where is it?' />
				<input type='text' description='description' placeholder='Some description?' />
				<input type='submit' value='Send' onClick={() => this.props.onClick()} />
      		</form>
		);
	}
}

export default TravelForm