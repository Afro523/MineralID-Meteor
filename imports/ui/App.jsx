import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';

import BottomNav from './BottomNav';

//MUi stuff
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'; // v1.x
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { MuiThemeProvider as V0MuiThemeProvider} from 'material-ui';
import myBaseTheme from '../../client/myBaseTheme';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

// import List from '@material-ui/core/icons/action/list';
// import Page from '@material-ui/core/icons/action/pageview';
// import Board from '@material-ui/core/icons/hardware/developer-board';

console.log(myBaseTheme)

const themeV0 = myBaseTheme;
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
      	<MuiThemeProvider theme={myBaseTheme}>
		  <V0MuiThemeProvider muiTheme={themeV0}>

		  
				<div className="container-fluid">
					{/* <AppBar
						// showMenuIconButton={false}
						title="Mineral Pocket Guide"
						children={false}
					/> */}
					<AppBar position="static" color="default">
        				<Toolbar>
          					<Typography variant="title" color="inherit">
		  						Mineral Pocket Guide
          					</Typography>
        				</Toolbar>
      				</AppBar>
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
								<i className="material-icons">page</i>
						</Link>
						<Link
							to="/list"
							className="waves-effect waves-light "
							style={buttonStyles}>
							<p className='flow-text'>Mineral <br/> DB</p>
								{/* <List style={iconStyles}/> */}
								<i className="material-icons">list</i>
						</Link>
						<Link
							to="/props"
							className="waves-effect waves-light "
							style={buttonStyles}>
							<p className='flow-text'>Physical <br/> Properties</p>
								<i className="material-icons">developer_board</i>
						</Link>
					</div>
					<p style={{textAlign:'center', fontSize:'10px'}}><i>Images and data courtesy of https://www.dakotamatrix.com/mineralpedia</i></p>
					<BottomNav navPos={-1}/>
				</div>
				</V0MuiThemeProvider>
      		</MuiThemeProvider>
		);
	}
}

App.childContextTypes = {
	muiTheme: PropTypes.object.isRequired,
};
