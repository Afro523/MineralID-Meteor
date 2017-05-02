//React
import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import LusterInfo from './LusterInfo';
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
				<Link
					to="/props/luster"
					className="waves-effect waves-light btn light-blue darken-3"
					>
					<div style={{fontSize:'20px'}}>Luster</div>
				</Link>
				<Link
					to="/props/hardness"
					className="waves-effect waves-light btn light-blue darken-3"
					>
					<div style={{fontSize:'20px'}}>Hardness</div>
				</Link>
			</div>
		);
	}
}

PropsPage.propTypes ={

};

PropsPage.childContextTypes = {
	muiTheme: React.PropTypes.object.isRequired,
};
