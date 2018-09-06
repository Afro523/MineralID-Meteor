import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {browserHistory} from 'react-router';



//MUi stuff
import myBaseTheme from '../../client/myBaseTheme';
// 'material-ui/core/styles/getMuiTheme
import IconButton from '@material-ui/core/IconButton';
import AppBar from '@material-ui/core/AppBar';
// import NavigationClose from '@material-ui/core/icons/navigation/close';
// import Back from '@material-ui/core/icons/image/navigate-before';

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
						iconElementLeft={<IconButton onClick={browserHistory.goBack}><i className="material-icons">back</i></IconButton>}
						title="Mineral Pocket Guide"
					/>
				</div>
			</div>
		);
	}
}

MinBanner.childContextTypes = {
	muiTheme: PropTypes.object.isRequired,
};
