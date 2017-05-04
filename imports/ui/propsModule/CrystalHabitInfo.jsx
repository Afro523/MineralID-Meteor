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

const columnStyle = {
	whiteSpace: 'pre-wrap',
	wordWrap: 'break-word'
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
						Crystal Habit is a description of the shapes and aggregates that a certain mineral is likely to form. Often this is the most important characteristic to examine when identifying a mineral. Although most minerals do have different forms, they are sometimes quite distinct and common only to one or even just a few minerals.
					</p>

					<b>Common Crystal Habits: </b>
					<Divider style={{marginBottom:'10px'}}/>
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
								<TableRowColumn style={columnStyle}>Needle-like, slender and/or tapered</TableRowColumn>
							</TableRow>
							<TableRow>
								<TableRowColumn>Amygdaloidal</TableRowColumn>
								<TableRowColumn>Almond-shaped</TableRowColumn>
							</TableRow>
							<TableRow>
								<TableRowColumn>Bladed</TableRowColumn>
								<TableRowColumn style={columnStyle}>Blade-like, slender and flattened</TableRowColumn>
							</TableRow>
							<TableRow>
								<TableRowColumn>Botryoidal</TableRowColumn>
								<TableRowColumn style={columnStyle}>Grape-like, hemispherical masses</TableRowColumn>
							</TableRow>
							<TableRow>
								<TableRowColumn>Cubic</TableRowColumn>
								<TableRowColumn style={columnStyle}>Cube shaped</TableRowColumn>
							</TableRow>
							<TableRow>
								<TableRowColumn>Dendritic</TableRowColumn>
								<TableRowColumn style={columnStyle}>Tree-like, branching in one or more direction from central point</TableRowColumn>
							</TableRow>
							<TableRow>
								<TableRowColumn>Dodecahedral</TableRowColumn>
								<TableRowColumn style={columnStyle}>Rhombic dodecahedron, 12-sided</TableRowColumn>
							</TableRow>
              <TableRow>
								<TableRowColumn>Fibrous</TableRowColumn>
								<TableRowColumn style={columnStyle}>Extremely slender prisms</TableRowColumn>
							</TableRow>
              <TableRow>
								<TableRowColumn>Hexagonal</TableRowColumn>
								<TableRowColumn style={columnStyle}>Hexagon shape, six-sided</TableRowColumn>
							</TableRow>
							<TableRow>
								<TableRowColumn>Micaceous</TableRowColumn>
								<TableRowColumn style={columnStyle}>Layered structure, parting into thin sheets</TableRowColumn>
							</TableRow>
							<TableRow>
								<TableRowColumn>Octahedral</TableRowColumn>
								<TableRowColumn style={columnStyle}>Octahedron, eight-sided (two pyramids base to base)</TableRowColumn>
							</TableRow>
							<TableRow>
								<TableRowColumn>Prismatic</TableRowColumn>
								<TableRowColumn style={columnStyle}>Elongated, prism-like</TableRowColumn>
							</TableRow>
							<TableRow>
								<TableRowColumn>Tetrahedral</TableRowColumn>
								<TableRowColumn style={columnStyle}>Tetrahedra-shaped crystals</TableRowColumn>
							</TableRow>
						</TableBody>
					</Table>
					<b> How It Works: </b>
					<p>The habit of a crystal is usually determined through observation.</p>
					<Divider/>
					<b> Examples: </b>
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
					<Card style={exampleStyle}>
						<CardMedia
							overlay={<CardTitle title="Gold" subtitle="Dendritic Habit" />}
							>
								<img src='/img/Gold.jpg' />
						</CardMedia>
					</Card>
					<Card style={exampleStyle}>
						<CardMedia
							overlay={<CardTitle title="Garnet" subtitle="Dodecahedral Habit" />}
							>
								<img src='/img/Garnet.jpg' />
						</CardMedia>
					</Card>
					<Card style={exampleStyle}>
						<CardMedia
							overlay={<CardTitle title="Biehlite" subtitle="Fibrous Habit" />}
							>
								<img src='/img/Biehlite.jpg' />
						</CardMedia>
					</Card>
					<Card style={exampleStyle}>
						<CardMedia
							overlay={<CardTitle title="Shigaite" subtitle="Hexagonal Habit" />}
							>
								<img src='/img/Shigaite.jpg' />
						</CardMedia>
					</Card>
					<Card style={exampleStyle}>
						<CardMedia
							overlay={<CardTitle title="Masutomilite" subtitle="Micaceous Habit" />}
							>
								<img src='/img/Masutomilite.jpg' />
						</CardMedia>
					</Card>
					<Card style={exampleStyle}>
						<CardMedia
							overlay={<CardTitle title="Hydropyrochlore" subtitle="Octahedral Habit" />}
							>
								<img src='/img/Hydropyrochlore.jpg' />
						</CardMedia>
					</Card>
					<Card style={exampleStyle}>
						<CardMedia
							overlay={<CardTitle title="Tourmaline" subtitle="Prismatic Habit" />}
							>
								<img src='/img/Tourmaline.jpg' />
						</CardMedia>
					</Card>
					<Card style={exampleStyle}>
						<CardMedia
							overlay={<CardTitle title="Tetrahedrite" subtitle="Tetrahedral Habit" />}
							>
								<img src='/img/Tetrahedrite.jpg' />
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
