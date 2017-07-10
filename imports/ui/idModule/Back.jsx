//React
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import myBaseTheme from '../../../client/myBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

export default class Back extends Component {
	constructor(props) {
		super(props);
	}

	getChildContext() {
		return { muiTheme: getMuiTheme(myBaseTheme) };
	}


	render() {
		return (
			<div className='back tile'>
      	Back Data
    	</div>
		);
	}
}

Back.propTypes ={
	mineral: PropTypes.object.isRequired,
};

Back.childContextTypes = {
	muiTheme: PropTypes.object.isRequired,
};
