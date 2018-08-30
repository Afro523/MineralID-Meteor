//React
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import QuestionContainer from './QuestionContainer';
import MinBanner from '../MinBanner';
import BottomNav from '../BottomNav';

import myBaseTheme from '../../../client/myBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
export default class IdPage extends Component {
	constructor(props) {
		super(props);
	}

	getChildContext() {
		return { muiTheme: getMuiTheme(myBaseTheme) };
	}

	render() {
		return (
			<div>
				<MinBanner/>

				<QuestionContainer/>
				<BottomNav navPos={0}/>
			</div>
		);
	}
}

IdPage.propTypes ={

};

IdPage.childContextTypes = {
	muiTheme: PropTypes.object.isRequired,
};
