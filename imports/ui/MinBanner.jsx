import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {browserHistory} from 'react-router';



//MUi stuff
import myBaseTheme from '../../client/myBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import IconButton from 'material-ui/IconButton';
import AppBar from 'material-ui/AppBar';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Back from 'material-ui/svg-icons/image/navigate-before';

// App component - represents the whole app
export default class MinBanner extends Component {

	constructor(props) {
		super(props);
	}

	getChildContext() {
		return { muiTheme: getMuiTheme(myBaseTheme) };
	}

	render() {

		return (
			<div>
				<div className='navbar-fixed'>
					<AppBar
						style={{position:'fixed'}}
						iconElementLeft={<IconButton onClick={browserHistory.goBack}><Back/></IconButton>}
						title="Mineral ID"
					/>
				</div>
			</div>
		);
	}
}

MinBanner.childContextTypes = {
	muiTheme: PropTypes.object.isRequired,
};
