import React from 'react';

export class Home extends React.Component {
	
	constructor(props) {
		super();
		this.age = props.age;
	}

	increaseAge() {
		this.age += 3;
		console.log(this.age);
	}

	// this way it will not get refernce of this. so age will undefined. two ways to correct this.
  	//<button onClick={this.increaseAge} 
  
  // first bind reference of this to method
  //<button onClick={this.increaseAge.bind(this)} 

  // second way to use fat arrow function this preserve this. to acces inside method.
  //<button onClick={() => this.increaseAge() }

	render() {
		return (
			<div>
				<h2>Hello i am  { this.props.name } and my age is { this.age } </h2>
			 
				<button onClick={() => this.increaseAge() } className="btn btn-default">Increase My Age</button>
			</div>
		);
	}
}

Home.PropTypes = {
	name: React.PropTypes.string,
	age: React.PropTypes.number
};