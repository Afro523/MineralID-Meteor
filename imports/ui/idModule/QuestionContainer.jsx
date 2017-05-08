//React
import React, {Component, PropTypes} from 'react';

import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Help from 'material-ui/svg-icons/action/help';

import Question from './Question';

export default class QuestionContainer extends Component {
	constructor(props) {
		super(props);
	}

	getChildContext() {
		return { muiTheme: getMuiTheme(baseTheme) };
	}

	render() {
		return (
			<div className='container'>
				<Question/>
				<FloatingActionButton
					style={{float:'right', marginTop:'20px'}}
					>
					<Help/>
				</FloatingActionButton>
			</div>
		);
	}
}

QuestionContainer.propTypes ={

};

QuestionContainer.childContextTypes = {
	muiTheme: React.PropTypes.object.isRequired,
};
