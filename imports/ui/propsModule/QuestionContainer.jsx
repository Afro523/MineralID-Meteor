//React
import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

export default class QuestionContainer extends Component {
	constructor(props) {
		super(props);
	}

	getChildContext() {
		return { muiTheme: getMuiTheme(baseTheme) };
	}

	render() {
		return (
			<div>

			</div>
		);
	}
}

QuestionContainer.propTypes ={

};

QuestionContainer.childContextTypes = {
	muiTheme: React.PropTypes.object.isRequired,
};
