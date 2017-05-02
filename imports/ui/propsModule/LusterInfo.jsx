//React
import React, {Component, PropTypes} from 'react';
import Divider from 'material-ui/Divider';

import MinBanner from '../MinBanner';

import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Table, TableBody, TableRow, TableRowColumn} from 'material-ui/Table';


export default class LusterInfo extends Component {
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

					<h3 style={{textAlign:'center'}}>Luster</h3>
					<b> Summary: </b>
					<Divider/>
					<p>
						Luster  is the way light interacts with the surface of a crystal, rock, or mineral. The word traces its origins back to the latin lux, meaning "light", and generally implies radiance, gloss, or brilliance.
						<br/>
						A range of terms are used to describe luster, such as earthy, metallic, greasy, and silky. Similarly, the term vitreous (derived from the Latin for glass, vitrum) refers to a glassy luster. A list of these terms is given below.
						<br/>
						Luster varies over a wide continuum, and so there are no rigid boundaries between the different types of luster. (For this reason, different sources can often describe the same mineral differently. This ambiguity is further complicated by luster's ability to vary widely within a particular mineral species.) The terms are frequently combined to describe intermediate types of luster (for example, a "vitreous greasy" luster).
						<br/>
					</p>
					<b> Common Terms </b>
					<Divider/>
					<Table selectable={false}>
						<TableBody displayRowCheckbox={false}>
							<TableRow>
								<TableRowColumn>Vitreous</TableRowColumn>
								<TableRowColumn style={{whiteSpace: 'pre-wrap', wordWrap: 'break-word'}}>Resembling the luster of a glossy photograph</TableRowColumn>
							</TableRow>
							<TableRow>
								<TableRowColumn>Waxy</TableRowColumn>
								<TableRowColumn style={{whiteSpace: 'pre-wrap', wordWrap: 'break-word'}}>Resembling the luster of a candle</TableRowColumn>
							</TableRow>
							<TableRow>
								<TableRowColumn>Pearly</TableRowColumn>
								<TableRowColumn style={{whiteSpace: 'pre-wrap', wordWrap: 'break-word'}}>Resembling the luster of a pearl</TableRowColumn>
							</TableRow>
							<TableRow>
								<TableRowColumn>Satiny</TableRowColumn>
								<TableRowColumn style={{whiteSpace: 'pre-wrap', wordWrap: 'break-word'}}>Resembling the luster of a satin or silk cloth</TableRowColumn>
							</TableRow>
							<TableRow>
								<TableRowColumn>Earthy</TableRowColumn>
								<TableRowColumn style={{whiteSpace: 'pre-wrap', wordWrap: 'break-word'}}>Lacking reflection, completely dull</TableRowColumn>
							</TableRow>
							<TableRow>
								<TableRowColumn>Greasy</TableRowColumn>
								<TableRowColumn style={{whiteSpace: 'pre-wrap', wordWrap: 'break-word'}}>Resembling the luster of grease or oil</TableRowColumn>
							</TableRow>
							<TableRow>
								<TableRowColumn>Porcelaneous</TableRowColumn>
								<TableRowColumn style={{whiteSpace: 'pre-wrap', wordWrap: 'break-word'}}>Resembling the luster of porcelain (translucent white ceramic ware)</TableRowColumn>
							</TableRow>
						</TableBody>
					</Table>
					<b>Everyday Examples: </b>
					<Divider/>
					<p>

					</p>
				</div>
			</div>
		);
	}
}

LusterInfo.propTypes ={

};

LusterInfo.childContextTypes = {
	muiTheme: React.PropTypes.object.isRequired,
};
