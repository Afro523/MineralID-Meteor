import React, { Component } from 'react';
import {Link, browserHistory} from 'react-router';



//MUi stuff
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import IconButton from 'material-ui/IconButton';
import AppBar from 'material-ui/AppBar';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

// App component - represents the whole app
export default class MinBanner extends Component {

	constructor(props) {
		super(props);
	}

	getChildContext() {
		return { muiTheme: getMuiTheme(baseTheme) };
	}


	render() {

		return (
				<div className="container-fluid">
					<AppBar
						style={{position:'fixed'}}
						iconElementLeft={<IconButton onClick={browserHistory.goBack}><NavigationClose/></IconButton>}
						title="Mineral ID"
					/>
					<div style={{height:'64px', backgroundColor:'black'}}/>
				</div>

		);
	}
}

MinBanner.childContextTypes = {
	muiTheme: React.PropTypes.object.isRequired,
};
