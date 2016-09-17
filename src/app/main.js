import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-sm-10 col-sm-offset-1">
						<h1>Hello</h1>
						<button type="button" className="btn btn-default">button</button>
					</div>	
				</div>
			</div>
		);
	}	
}

render(<App/>, window.document.getElementById('app'));