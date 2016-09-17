import React from 'react';

export class Home extends React.Component {
	render() {

		return (
			<div>
			  <h2>Hello i am  { this.props.name } and my age is { this.props.age } </h2>
			 	<div>
			 		<h4>My Hobbies are: </h4>
			 		<p>name Obj: {this.props.obj.name}</p>
			 		<ul>
				 		{this.props.obj.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
				 	</ul>
			 	</div>
			 	
			</div>
		);
	}
}