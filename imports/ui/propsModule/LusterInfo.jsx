//React
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import MinBanner from '../MinBanner';
import TableExample from './TableExample';

import myBaseTheme from '../../../client/myBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Table, TableHeader, TableHeaderColumn, TableBody, TableRow, TableRowColumn} from 'material-ui/Table';
import {Card, CardMedia, CardTitle} from 'material-ui/Card';
import Divider from 'material-ui/Divider';

const columnStyle = {
	whiteSpace: 'pre-wrap',
	wordWrap: 'break-word',
	width:'60%',
	paddingRight:'0px'
};

const exampleStyle = {
	marginTop:'10px',
	marginBottom:'10px'
};

export default class LusterInfo extends Component {
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
					<h3 style={{paddingTop:'30px', textAlign:'center'}}>Luster</h3>
					<p style={{textAlign:'center'}}><i>The reflectivity of a mineral</i></p>
					<b> Summary: </b>
					<Divider/>
					<p>
						Luster  is the way light interacts with the surface of a crystal, rock, or mineral. The word traces its origins back to the latin lux, meaning "light", and generally implies radiance, gloss, or brilliance.
						<br/>
						<br/>
						A range of terms are used to describe luster, such as earthy, metallic, greasy, and silky. Similarly, the term vitreous (derived from the Latin for glass, vitrum) refers to a glassy luster. A list of these terms is given below.
						<br/>
						<br/>
						Luster varies over a wide continuum, and so there are no rigid boundaries between the different types of luster. (For this reason, different sources can often describe the same mineral differently. This ambiguity is further complicated by luster's ability to vary widely within a particular mineral species.) The terms are frequently combined to describe intermediate types of luster (for example, a "vitreous greasy" luster).
					</p>
					<b> Common Terms </b>
					<Divider/>
					<Table>
						<TableHeader adjustForCheckbox={false} displaySelectAll={false}>
							<TableRow>
								<TableHeaderColumn>
									Luster
								</TableHeaderColumn>
								<TableHeaderColumn style={{width:'60%'}}>
									Description
								</TableHeaderColumn>
							</TableRow>
						</TableHeader>
					</Table>
					<TableExample
						name={'Metallic'}
						description={'Reflective and opaque, with luster resembling that of metal'}
						img={'Pyrite'}
						columnStyle={columnStyle}
					/>

					<p style={{marginBottom:'0px', textAlign:'center'}}><i>Non-Metallic Luster Terms</i></p>

					<TableExample
						name={'Adamantine'}
						description={'Transparent to translucent minerals that display brilliance and shine'}
						img={'Diamond'}
						columnStyle={columnStyle}
					/>
					<TableExample
						name={'Vitreous'}
						description={'Resembling the luster of a glossy photograph'}
						img={'Chondrodite'}
						columnStyle={columnStyle}
					/>
					<TableExample
						name={'Waxy'}
						description={'Resembling the luster of a candle'}
						img={'Chalcedony'}
						columnStyle={columnStyle}
					/>
					<TableExample
						name={'Pearly'}
						description={'Resembling the luster of a pearl'}
						img={'Muscovite'}
						columnStyle={columnStyle}
					/>
					<TableExample
						name={'Satiny'}
						description={'Resembling the luster of a satin or silk cloth'}
						img={'Gypsum'}
						columnStyle={columnStyle}
					/>
					<TableExample
						name={'Earthy'}
						description={'Lacking reflection, completely dull'}
						img={'Kankite'}
						columnStyle={columnStyle}
					/>
					<TableExample
						name={'Greasy'}
						description={'Resembling the luster of grease or oil'}
						img={'Metasideronatrite'}
						columnStyle={columnStyle}
					/>
					</div>
			</div>
		);
	}
}

LusterInfo.propTypes ={

};

LusterInfo.childContextTypes = {
	muiTheme: PropTypes.object.isRequired,
};
