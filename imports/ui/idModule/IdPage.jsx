//React
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import QuestionContainer from './QuestionContainer';
import MinBanner from '../MinBanner';


import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
export default class IdPage extends Component {
	constructor(props) {
		super(props);
	}

	getChildContext() {
		return { muiTheme: getMuiTheme(baseTheme) };
	}

	render() {
		return (
			<div>
				<MinBanner/>

				<QuestionContainer/>

			</div>
		);
	}
}

IdPage.propTypes ={

};

IdPage.childContextTypes = {
	muiTheme: PropTypes.object.isRequired,
};
