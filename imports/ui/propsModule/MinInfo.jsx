//React
import React, {Component, PropTypes} from 'react';
import Divider from 'material-ui/Divider';

import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn,} from 'material-ui/Table';


export default class QuestionContainer extends Component {
	constructor(props) {
		super(props);
	}

	getChildContext() {
		return { muiTheme: getMuiTheme(baseTheme) };
	}

	render() {
		return (
			<div className='container'>
				<h3>Luster</h3>
				<Divider/>
				<b> Definition: </b>
				<p>
					Luster is a description oh mow light reflects from the surface of an object, such as a mineral.  Luster is of two main types- metallic and non-metallic - that cary in intensity from bright (very reflective and shiny, polished) to dull (not very reflective, not very shiny, not polished).
					<br/>
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
				</p>
				<Divider/>
				<b>Common Examples: </b>
				<p>

				</p>
			</div>
		);
	}
}

QuestionContainer.propTypes ={

};

QuestionContainer.childContextTypes = {
	muiTheme: React.PropTypes.object.isRequired,
};
