//React
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import MinBanner from '../MinBanner';

import myBaseTheme from '../../../client/myBaseTheme';
// 'material-ui/core/styles/getMuiTheme
import {Table, TableBody, TableRow, TableRowColumn, TableHeader, TableHeaderColumn} from '@material-ui/core/Table';
import {Card, CardMedia, CardTitle} from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import TableExample from './TableExample';

const columnStyle = {
	whiteSpace: 'pre-wrap',
	wordWrap: 'break-word',
	width:'65%',
	paddingRight:'0px'
};

const exampleStyle = {
	marginTop:'10px'
};

export default class FractureInfo extends Component {
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
				<div className='container' style={{marginBottom:'10px'}}>

					<h3 style={{paddingTop:'20px', textAlign:'center'}}>Fracture</h3>
					<p style={{textAlign:'center'}}><i>The way a mineral breaks</i></p>
					<b> Summary: </b>
					<Divider/>
					<p>
						Fracture is the texture and shape of a rock's surface formed when a mineral is fractured. Minerals often have a highly distinctive fracture, making it a principal feature used in their identification.
						<br/>
						Fracture differs from cleavage in that the latter involves clean splitting along the cleavage planes of the mineral's crystal structure, as opposed to more general breakage. All minerals exhibit fracture, but when very strong cleavage is present, it can be difficult to see.
					</p>

					<b> Table of Fractue Types: </b>
					<Divider/>
					<Table selectable={false}>
            <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
							<TableRow>
								<TableHeaderColumn>
									Fracture Type
								</TableHeaderColumn>
								<TableHeaderColumn style={{width:'65%'}}>
									Description
								</TableHeaderColumn>
							</TableRow>
            </TableHeader>
					</Table>
					<TableExample
						name={'Conchoidal'}
						description={'Conchoidal fracture breakage that resembles the concentric ripples of a mussel shell. It often occurs in amorphous or fine-grained minerals such as flint, opal or obsidian, but may also occur in crystalline minerals such as quartz. Subconchoidal fracture is similar to conchoidal fracture, but with less significant curvature. '}
						img={'Spencerite'}
						columnStyle={columnStyle}
					/>
					<TableExample
						name={'Earthy'}
						description={'Earthy fracture is reminiscent of freshly broken soil. It is frequently seen in relatively soft, loosely bound minerals, such as limonite, kaolinite and aluminite.'}
						img={'Partzite'}
						columnStyle={columnStyle}
					/>
					<TableExample
						name={'Hackly'}
						description={'Hackly fracture (also known as jagged fracture) is jagged, sharp and not even. It occurs when metals are torn, and so is often encountered in native metals such as copper and silver.'}
						img={'Franckeite'}
						columnStyle={columnStyle}
					/>
					<TableExample
						name={'Splintery'}
						description={'Splintery fracture comprises sharp elongated points. It is particularly seen in fibrous minerals such as chrysotile, but may also occur in non-fibrous minerals such as kyanite.'}
						img={'Balangeroite'}
						columnStyle={columnStyle}
					/>
					<TableExample
						name={'Uneven'}
						description={'Uneven fracture is a rough surface or one with random irregularities. It occurs in a wide range of minerals including arsenopyrite, pyrite and magnetite.'}
						img={'Kalinite'}
						columnStyle={columnStyle}
					/>
				</div>
			</div>
		);
	}
}

FractureInfo.propTypes ={

};

FractureInfo.childContextTypes = {
	muiTheme: PropTypes.object.isRequired,
};
