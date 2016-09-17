import React from 'react';

export class Banner extends React.Component {
	render() {
		let heading = 'React is awesome!';
		let para = 'This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information. Learn more';
		
		if(true) {
			heading = 'React is too good!';
		}

		return (
			<div className="jumbotron">
			  <h1> { heading }</h1>
			  <p>{ para }</p>
			  <h2>	Ternary : 3 == 4 ? {4 == 5 ? 'YES': 'NO' }</h2>
			  <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
			</div>
		);
	}
}