import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router';
import MinList from './MinList';
import MinCard from './MinCard';

// App component - represents the whole app
export default class App extends Component {
	getChildContext() {
		return { muiTheme: getMuiTheme(baseTheme) };
	}
	render() {
		return (
      <MuiThemeProvider>
				<div className="container">
					<MinCard/>
				</div>
      </MuiThemeProvider>
		);
	}
}

App.childContextTypes = {
	muiTheme: React.PropTypes.object.isRequired,
};
