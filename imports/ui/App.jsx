import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
//MUi stuff
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import myBaseTheme from '../../client/myBaseTheme';
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
	width:'30%',
	height:'auto',
	textAlign:'center',
	padding:'0px',
};

// App component - represents the whole app
export default class App extends Component {

	constructor(props) {
		super(props);
	}

	getChildContext() {
		return { muiTheme: getMuiTheme(myBaseTheme) };
	}


	render() {

		return (
      <MuiThemeProvider muiTheme={getMuiTheme(myBaseTheme)}>
				<div className="container-fluid">
					<AppBar
						showMenuIconButton={false}
						title="Mineral ID"
					/>
					<div style={{
						display:'flex',
						flexWrap:'wrap',
						justifyContent:'space-around',
						alignItems:'center',
					}}>
						<Link
							to="/id"
							className="waves-effect waves-light btn"
							style={buttonStyles}>
							<div>Mineral <br/> I.D.</div>
								<Page style={iconStyles}/>
						</Link>
						<Link
							to="/list"
							className="waves-effect waves-light btn"
							style={buttonStyles}>
							<div>Mineral <br/> DB</div>
								<List style={iconStyles}/>
						</Link>
						<Link
							to="/props"
							className="waves-effect waves-light btn"
							style={buttonStyles}>
							<div>Physical Properties</div>
								<Board style={iconStyles}/>
						</Link>
						<p style={{position:'fixed', bottom:10, fontSize:'10px'}}><i>Images and data courtesy of https://www.dakotamatrix.com/mineralpedia</i></p>

					</div>
				</div>
      </MuiThemeProvider>
		);
	}
}

App.childContextTypes = {
	muiTheme: PropTypes.object.isRequired,
};
