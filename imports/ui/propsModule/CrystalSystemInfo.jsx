//React
import React, {Component, PropTypes} from 'react';
import Divider from 'material-ui/Divider';

import MinBanner from '../MinBanner';

import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Table, TableBody, TableRow, TableRowColumn, TableHeader, TableHeaderColumn} from 'material-ui/Table';


export default class CrystalSystemInfo extends Component {
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

					<h3 style={{textAlign:'center', paddingTop:'20px'}}>Crystal System</h3>
					<p style={{textAlign:'center'}}><i>The atomic arrangment of a mineral</i></p>
					<b> Summary: </b>
					<Divider/>
					<p>
					The study of crystals and the laws that govern their growth, external shape, and internal structure is called crystallography.
					<br/>
					<br/>
					A crystal may possess only certain combinations of symmetry elements. Only 32 possibilities exist, and these are the 32 crystal classes that are grouped into six crystal systems. Every mineral belongs to one of these crystal systems.
					</p>
					<b> How It Works: </b>
					<Divider/>
					<p>
					To describe crystals, imaginary lines are used intersecting at 0 (the origin). These are specific to the various crystal systems, intersecting at given angles and being of given lengths specific to each crystal system.
					<br/>
					<br/>
					To discuss the six crystal systems, we have to describe what are called crystallographic axes. There are three axes: a, b, and c. The axes pass through the center of the crystal, and, by using them, we can describe the intersection of any given face with these three axes.
					</p>

					<b> The 6 Systems</b>
					<Divider/>
					<br/>
					


					<b>Everyday Examples: </b>
					<Divider/>
					<p>

					</p>
					<p>
						Using the Mohs Scale is simple. You take the mineral in question and do one of two things. 1) You can scratch it with something of a known hardness such as your fingernail 2) Use it to scratch another object of known hardness such as a glass plate.
					</p>
				</div>
			</div>
		);
	}
}

CrystalSystemInfo.propTypes ={

};

CrystalSystemInfo.childContextTypes = {
	muiTheme: React.PropTypes.object.isRequired,
};
