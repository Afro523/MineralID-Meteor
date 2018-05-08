import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';

import BottomNav from './BottomNav';

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
	width:'40%',
	height:'auto',
	textAlign:'center',
	padding:'0px',
	border:'2px black solid',
	margin: '10px'
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
						title="Mineral Pocket Guide"
					/>
					<div style={{
						display:'flex',
						flexWrap:'wrap',
						justifyContent:'center',
						alignItems:'center',
						marginTop: '40px'
					}}>
						<Link
							to="/id"
							className="waves-effect waves-light"
							style={buttonStyles}>
							<p className='flow-text'>Mineral <br/> I.D.</p>
								<Page style={iconStyles}/>
						</Link>
						<Link
							to="/list"
							className="waves-effect waves-light "
							style={buttonStyles}>
							<p className='flow-text'>Mineral <br/> DB</p>
								<List style={iconStyles}/>
						</Link>
						<Link
							to="/props"
							className="waves-effect waves-light "
							style={buttonStyles}>
							<p className='flow-text'>Physical <br/> Properties</p>
								<Board style={iconStyles}/>
						</Link>
					</div>
					<p style={{textAlign:'center', fontSize:'10px'}}><i>Images and data courtesy of https://www.dakotamatrix.com/mineralpedia</i></p>
					{/* <BottomNav/> */}
				</div>
      </MuiThemeProvider>
		);
	}
}

App.childContextTypes = {
	muiTheme: PropTypes.object.isRequired,
};
