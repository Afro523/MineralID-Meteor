//React
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';

import MinBanner from '../MinBanner';

import myBaseTheme from '../../../client/myBaseTheme';
// 'material-ui/core/styles/getMuiTheme
import {Table, TableBody, TableRow, TableRowColumn, TableHeader, TableHeaderColumn} from '@material-ui/core/Table';
import {Card, CardMedia, CardTitle} from '@material-ui/core/Card';

import TableExample from './TableExample';

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
		return { muiTheme: getMuiTheme(myBaseTheme) };
	}

	render() {
		return (
			<div>
				<MinBanner/>
				<div className='container'>

					<h3 style={{paddingTop:'20px', textAlign:'center'}}>Crystal Habit</h3>
					<p style={{textAlign:'center'}}><i>The way a mineral repeats itself</i></p>
					<b> Summary: </b>
					<Divider/>
					<p>
						Crystal Habit is a description of the shapes and aggregates that a certain mineral is likely to form. Often this is the most important characteristic to examine when identifying a mineral. Although most minerals do have different forms, they are sometimes quite distinct and common only to one or even just a few minerals.
					</p>

					<b>Common Crystal Habits: </b>
					<p>
						These are the terms used by mineralologists to describe the growth pattern of a mineral.
					</p>
					<Divider style={{marginBottom:'10px'}}/>
					<Table>
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
					</Table>
						<TableExample
							name={'Acicular'}
							description={'Needle-like, slender and/or tapered'}
							img={'Agardite-(Y)'}
						/>
						<TableExample
							name={'Amygdaloidal'}
							description={'Almond-shaped'}
							img={'Arsenocrandallite'}
						/>
						<TableExample
							name={'Bladed'}
							description={'Blade-like, slender and flattened'}
							img={'Mawbyite'}
						/>
						<TableExample
							name={'Botryoidal'}
							description={'Grape-like, hemispherical masses'}
							img={'Dufrenite'}
						/>
						<TableExample
							name={'Cubic'}
							description={'Cube shaped'}
							img={'Perovskite'}
						/>
						<TableExample
							name={'Dendritic'}
							description={'Tree-like, branching in one or more direction from central point'}
							img={'Gold'}
						/>
						<TableExample
							name={'Dodecahedral'}
							description={'Rhombic dodecahedron, 12-sided'}
							img={'Garnet'}
						/>
						<TableExample
							name={'Fibrous'}
							description={'Extremely slender prisms, almost threadlike'}
							img={'Biehlite'}
						/>
						<TableExample
							name={'Hexagonal'}
							description={'Hexagon shape, six-sided'}
							img={'Shigaite'}
						/>
						<TableExample
							name={'Micaceous'}
							description={'Layered structure, parting into thin sheets'}
							img={'Masutomilite'}
						/>
						<TableExample
							name={'Octahedral'}
							description={'Octahedron, eight-sided (two pyramids base to base)'}
							img={'Hydropyrochlore'}
						/>
						<TableExample
							name={'Prismatic'}
							description={'Elongated, prism-like'}
							img={'Tourmaline'}
						/>
						<TableExample
							name={'Tetrahedral'}
							description={'Tetrahedra-shaped crystals'}
							img={'Tetrahedrite'}
						/>
				</div>
			</div>
		);
	}
}

CrystalHabitInfo.propTypes ={

};

CrystalHabitInfo.childContextTypes = {
	muiTheme: PropTypes.object.isRequired,
};
