//React
import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

import QuestionContainer from './QuestionContainer';

//MUi
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
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
				<AppBar
					style={{position:'fixed'}}
					iconElementLeft={<IconButton><Link to="/"><NavigationClose/></Link></IconButton>}
					title="Mineral ID"
				/>

				<QuestionContainer/>

			</div>
		);
	}
}

IdPage.propTypes ={

};

IdPage.childContextTypes = {
	muiTheme: React.PropTypes.object.isRequired,
};
