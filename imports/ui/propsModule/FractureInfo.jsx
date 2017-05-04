//React
import React, {Component, PropTypes} from 'react';
import Divider from 'material-ui/Divider';

import MinBanner from '../MinBanner';

import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Table, TableBody, TableRow, TableRowColumn, TableHeader, TableHeaderColumn} from 'material-ui/Table';


export default class FractureInfo extends Component {
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

					<h3 style={{textAlign:'center'}}>Fracture</h3>
					<b> Summary: </b>
					<Divider/>
					<p>
						Fracture is the texture and shape of a rock's surface formed when a mineral is fractured. Minerals often have a highly distinctive fracture, making it a principal feature used in their identification.
						<br/>
						Fracture differs from cleavage in that the latter involves clean splitting along the cleavage planes of the mineral's crystal structure, as opposed to more general breakage. All minerals exhibit fracture, but when very strong cleavage is present, it can be difficult to see.
					</p>

					<b>Everyday Examples: </b>
					<Divider/>
					<p>

					</p>

					<b> How It Works: </b>
					<Divider/>
					<p>

					</p>
				</div>
			</div>
		);
	}
}

FractureInfo.propTypes ={

};

FractureInfo.childContextTypes = {
	muiTheme: React.PropTypes.object.isRequired,
};
