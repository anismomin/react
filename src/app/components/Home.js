import React from 'react';

export class Home extends React.Component {
	
	constructor(props) {
		super();
		this.state = {
			age : props.initAge,
			status: 0
		};
	}

	increaseAge() {
		this.setState({
			age: this.state.age + 3
		});
		//console.log(this.state.age);
	}

	// this way it will not get refernce of this. so age will undefined. two ways to correct this.
  	//<button onClick={this.increaseAge} 
  
  // first bind reference of this to method
  //<button onClick={this.increaseAge.bind(this)} 

  // second way to use fat arrow function this preserve this. to acces inside method.
  //<button onClick={() => this.increaseAge() }
  
  // event work correctlly here but unable to chnage state on component.
  // state chnage be chnage from outside. stage chnage by component it self. 
  // we can chnage props from outside.but this will not render. until stage is changed.

	render() {
		return (
			<div>
				<h2>Hello i am  { this.props.name } and my age is { this.state.age } </h2>
				<button onClick={() => this.increaseAge()} className="btn btn-default">Increase My Age</button>
			</div>
		);
	}
}

Home.PropTypes = {
	name: React.PropTypes.string,
	initAge: React.PropTypes.number
};