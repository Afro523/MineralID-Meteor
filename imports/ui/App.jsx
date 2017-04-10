import React, { Component } from 'react';
import {Link} from 'react-router';
//MUi stuff
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';

import List from 'material-ui/svg-icons/action/list';
import Page from 'material-ui/svg-icons/action/pageview';
import Board from 'material-ui/svg-icons/hardware/developer-board';

const iconStyles ={
	alignContent:'center',
	width:'75%',
	height:'75%',
	padding:'0px'
};

const buttonStyles ={
	width:'40%',
	height:'40%',
	textAlign:'center',
	padding:'0px',
	marginTop:'10px'
};

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
					<div style={{display:'flex', flexWrap:'wrap', justifyContent:'space-around', alignItems:'center'}}>
						<Link
							to="/id"
							className="waves-effect waves-light btn light-blue darken-3"
							style={buttonStyles}>
							<div style={{fontSize:'20px'}}>Mineral <br/> I.D.</div>
								<Page style={iconStyles}/>
						</Link>
						<Link
							to="/list"
							className="waves-effect waves-light btn light-blue darken-3"
							style={buttonStyles}>
							<div style={{fontSize:'20px'}}>Mineral <br/> DB</div>
								<List style={iconStyles}/>
						</Link>
						<Link
							to="/props"
							className="waves-effect waves-light btn light-blue darken-3"
							style={buttonStyles}>
							<div style={{fontSize:'20px'}}>Physical Properties</div>
								<Board style={iconStyles}/>
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
