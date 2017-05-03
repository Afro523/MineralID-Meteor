//React
import React, {Component, PropTypes} from 'react';
import Divider from 'material-ui/Divider';

import MinBanner from '../MinBanner';

import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Table, TableBody, TableRow, TableRowColumn, TableHeader, TableHeaderColumn} from 'material-ui/Table';
import {Card, CardMedia, CardTitle} from 'material-ui/Card';

const exampleStyle = {
	marginTop:'10px'
};

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

					<b>Examples: </b>
					<Divider/>
					<Table selectable={false}>
            <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
							<TableRow>
								<TableHeaderColumn>
									Habit
								</TableHeaderColumn>
								<TableHeaderColumn>
									Description
								</TableHeaderColumn>
							</TableRow>
            </TableHeader>
						<TableBody displayRowCheckbox={false}>
							<TableRow>
								<TableRowColumn>Acicular</TableRowColumn>
								<TableRowColumn>Needle-like, slender and/or tapered</TableRowColumn>
							</TableRow>
							<TableRow>
								<TableRowColumn>Amygdaloidal</TableRowColumn>
								<TableRowColumn>Almond-shaped</TableRowColumn>
							</TableRow>
							<TableRow>
								<TableRowColumn>Bladed</TableRowColumn>
								<TableRowColumn>Blade-like, slender and flattened</TableRowColumn>
							</TableRow>
							<TableRow>
								<TableRowColumn>Botryoidal</TableRowColumn>
								<TableRowColumn>Grape-like, hemispherical masses</TableRowColumn>
							</TableRow>
							<TableRow>
								<TableRowColumn>Cubic</TableRowColumn>
								<TableRowColumn>Cube shaped</TableRowColumn>
							</TableRow>
							<TableRow>
								<TableRowColumn>Dendritic</TableRowColumn>
								<TableRowColumn>Tree-like, branching in one or more direction from central point</TableRowColumn>
							</TableRow>
							<TableRow>
								<TableRowColumn>Dodecahedral</TableRowColumn>
								<TableRowColumn>Rhombic dodecahedron, 12-sided</TableRowColumn>
							</TableRow>
              <TableRow>
								<TableRowColumn>Fibrous</TableRowColumn>
								<TableRowColumn>Extremely slender prisms</TableRowColumn>
							</TableRow>
              <TableRow>
								<TableRowColumn>Hexagonal</TableRowColumn>
								<TableRowColumn>Hexagon shape, six-sided</TableRowColumn>
							</TableRow>
							<TableRow>
								<TableRowColumn>Micaceous</TableRowColumn>
								<TableRowColumn>Layered structure, parting into thin sheets</TableRowColumn>
							</TableRow>
							<TableRow>
								<TableRowColumn>Octahedral</TableRowColumn>
								<TableRowColumn>Octahedron, eight-sided (two pyramids base to base)</TableRowColumn>
							</TableRow>
							<TableRow>
								<TableRowColumn>Prismatic</TableRowColumn>
								<TableRowColumn>Elongated, prism-like</TableRowColumn>
							</TableRow>
							<TableRow>
								<TableRowColumn>Tetrahedral</TableRowColumn>
								<TableRowColumn>Tetrahedra-shaped crystals</TableRowColumn>
							</TableRow>
						</TableBody>
					</Table>

					<b> How It Works: </b>
					<Divider/>
					<Card style={exampleStyle}>
						<CardMedia
							overlay={<CardTitle title="Agardite-(Y)" subtitle="Acicular Habit" />}
							>
								<img src='/img/Agardite-(Y).jpg' />
						</CardMedia>
					</Card>
					<Card style={exampleStyle}>
						<CardMedia
							overlay={<CardTitle title="Arsenocrandallite" subtitle="Amygdaloidal Habit" />}
							>
								<img src='/img/Arsenocrandallite.jpg' />
						</CardMedia>
					</Card>
					<Card style={exampleStyle}>
						<CardMedia
							overlay={<CardTitle title="Mawbyite" subtitle="Bladed Habit" />}
							>
								<img src='/img/Mawbyite.jpg' />
						</CardMedia>
					</Card>
					<Card style={exampleStyle}>
						<CardMedia
							overlay={<CardTitle title="Dufrenite" subtitle="Botryoidal Habit" />}
							>
								<img src='/img/Dufrenite.jpg' />
						</CardMedia>
					</Card>
					<Card style={exampleStyle}>
						<CardMedia
							overlay={<CardTitle title="Perovskite" subtitle="Cubic Habit" />}
							>
								<img src='/img/Perovskite.jpg' />
						</CardMedia>
					</Card>
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
