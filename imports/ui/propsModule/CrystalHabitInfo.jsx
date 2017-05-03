//React
import React, {Component, PropTypes} from 'react';
import Divider from 'material-ui/Divider';

import MinBanner from '../MinBanner';

import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Table, TableBody, TableRow, TableRowColumn, TableHeader, TableHeaderColumn} from 'material-ui/Table';


export default class CrystalHabitInfo extends Component {
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
				<div className='container'>

					<h3 style={{textAlign:'center'}}>Crystal Habit</h3>
					<b> Summary: </b>
					<Divider/>
					<p>
						Info Goes Here
					</p>
					<b> Mohs Scale </b>
					<Divider/>

					<b>Everyday Examples: </b>
					<Divider/>
					<p>

					</p>

					<b> How It Works: </b>
					<Divider/>
					<p>
						Using the Mohs Scale is simple. You take the mineral in question and do one of two things. 1) You can scratch it with something of a known hardness such as your fingernail 2) Use it to scratch another object of known hardness such as a glass plate.
					</p>
				</div>
			</div>
		);
	}
}

CrystalHabitInfo.propTypes ={

};

CrystalHabitInfo.childContextTypes = {
	muiTheme: React.PropTypes.object.isRequired,
};
