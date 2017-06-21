//React
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

export default class Answer extends Component {
	constructor(props) {
		super(props);
	}

	getChildContext() {
		return { muiTheme: getMuiTheme(baseTheme) };
	}

	render() {
		return (
			<div className='container'>
				
			</div>
		);
	}
}

Answer.propTypes ={

};

Answer.childContextTypes = {
	muiTheme: PropTypes.object.isRequired,
};
