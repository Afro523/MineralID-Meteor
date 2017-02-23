import React, { Component } from 'react';
import {Link} from 'react-router';
//MUi stuff
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';

//import {Link} from 'react-router';
import MinList from './listModule/MinList';

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
				<div className="container">
					<AppBar
						showMenuIconButton={false}
						title="Mineral ID"
					/>
					<Link to="/list"className="waves-effect waves-light btn light-blue darken-3">Mineral List</Link>
				</div>
      </MuiThemeProvider>
		);
	}
}

App.childContextTypes = {
	muiTheme: React.PropTypes.object.isRequired,
};
