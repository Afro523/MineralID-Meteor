import React, { Component } from 'react';
import {Link} from 'react-router';
//MUi stuff
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';

import List from 'material-ui/svg-icons/action/list';
import Page from 'material-ui/svg-icons/action/pageview';

// App component - represents the whole app
export default class App extends Component {

	constructor(props) {
		super(props);
	}

	getChildContext() {
		return { muiTheme: getMuiTheme(baseTheme) };
	}


	render() {

		return (
      <MuiThemeProvider muiTheme={getMuiTheme(baseTheme)}>
				<div className="container-fluid">
					<AppBar
						showMenuIconButton={false}
						title="Mineral ID"
					/>
					<div style={{display:'flex', justifyContent:'space-around', marginTop:'10px'}}>
						<Link
							to="/id"
							className="waves-effect waves-light btn light-blue darken-3"
							style={{width:'40%', height:'40%'}}>
							<div style={{fontSize:'20px'}}>Mineral I.D.</div>
								<Page style={{alignContent:'center', width:'100%', height:'100%'}}/>
							</Link>
						<Link
							to="/list"
							className="waves-effect waves-light btn light-blue darken-3"
							style={{width:'40%', height:'40%'}}>
							<div style={{fontSize:'20px'}}>Mineral DB</div>
								<List style={{alignContent:'center', width:'100%', height:'100%'}}/>
						</Link>
					</div>
				</div>
      </MuiThemeProvider>
		);
	}
}

App.childContextTypes = {
	muiTheme: React.PropTypes.object.isRequired,
};
