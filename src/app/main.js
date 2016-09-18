import React from 'react';
import {render} from 'react-dom';

import { Header } from './components/Header';
import { Banner } from './components/Banner';
import { Home } from './components/Home';

class App extends React.Component {
	render() {
		
		return (
			<div className="container">
				<div className="row">
					<div className="col-sm-10 col-sm-offset-1">
						<Header/>
					</div>	
				</div>
				<div className="row">
					<div className="col-sm-10 col-sm-offset-1">
						<Banner/>
					</div>	
				</div>

				<div className="row">
					<div className="col-sm-10 col-sm-offset-1">
						<Home name={"anis"} age={29} />
					</div>	
				</div>
			</div>
		);
	}	
}

render(<App/>, window.document.getElementById('app'));