//React
import React, {Component, PropTypes} from 'react';

//MUi
import RaisedButton from 'material-ui/RaisedButton';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

export default class WhatIsBtn extends Component {
	constructor(props) {
		super(props);
	}

	getChildContext() {
		return { muiTheme: getMuiTheme(baseTheme) };
	}

	render() {
		return (
			<div>
				<RaisedButton label={'What is '+ this.props.questionCategory+' ?'}/>
			</div>
		);
	}
}

WhatIsBtn.propTypes ={
	questionCategory: PropTypes.string,
};

WhatIsBtn.childContextTypes = {
	muiTheme: React.PropTypes.object.isRequired,
};
