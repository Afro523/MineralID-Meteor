//React
import React, {Component, PropTypes} from 'react';

import QuestionContainer from './QuestionContainer';
import MinBanner from '../MinBanner';

//MUI
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

export default class PropsPage extends Component {
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

PropsPage.propTypes ={

};

PropsPage.childContextTypes = {
	muiTheme: React.PropTypes.object.isRequired,
};
