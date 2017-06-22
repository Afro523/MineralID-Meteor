//React
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import myBaseTheme from '../../../client/myBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Question from './Question';

export default class QuestionContainer extends Component {
	constructor(props) {
		super(props);
	}

	getChildContext() {
		return { muiTheme: getMuiTheme(myBaseTheme) };
	}

	render() {
		return (
			<div className='container'>
				<Question/>
			</div>
		);
	}
}

QuestionContainer.propTypes ={

};

QuestionContainer.childContextTypes = {
	muiTheme: PropTypes.object.isRequired,
};
