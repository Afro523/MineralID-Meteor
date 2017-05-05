//React
import React, {Component, PropTypes} from 'react';
import Divider from 'material-ui/Divider';

import MinBanner from '../MinBanner';

import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Table, TableBody, TableRow, TableRowColumn, TableHeader, TableHeaderColumn} from 'material-ui/Table';
import {Card, CardMedia, CardTitle} from 'material-ui/Card';

const columnStyle = {
	whiteSpace: 'pre-wrap',
	wordWrap: 'break-word',
	width:'60%',
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
		return { muiTheme: getMuiTheme(baseTheme) };
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
								<TableHeaderColumn style={{width:'60%'}}>
									Description
								</TableHeaderColumn>
							</TableRow>
            </TableHeader>
						<TableBody displayRowCheckbox={false}>
							<TableRow>
								<TableRowColumn>Conchoidal</TableRowColumn>
								<TableRowColumn style={columnStyle}>Conchoidal fracture breakage that resembles the concentric ripples of a mussel shell. It often occurs in amorphous or fine-grained minerals such as flint, opal or obsidian, but may also occur in crystalline minerals such as quartz. Subconchoidal fracture is similar to conchoidal fracture, but with less significant curvature. </TableRowColumn>
							</TableRow>
							<TableRow>
								<TableRowColumn>Earthy</TableRowColumn>
								<TableRowColumn style={columnStyle}>Earthy fracture is reminiscent of freshly broken soil. It is frequently seen in relatively soft, loosely bound minerals, such as limonite, kaolinite and aluminite.</TableRowColumn>
							</TableRow>
							<TableRow>
								<TableRowColumn>Hackly</TableRowColumn>
								<TableRowColumn style={columnStyle}>Hackly fracture (also known as jagged fracture) is jagged, sharp and not even. It occurs when metals are torn, and so is often encountered in native metals such as copper and silver.</TableRowColumn>
							</TableRow>
							<TableRow>
								<TableRowColumn>Splintery</TableRowColumn>
								<TableRowColumn style={columnStyle}>Splintery fracture comprises sharp elongated points. It is particularly seen in fibrous minerals such as chrysotile, but may also occur in non-fibrous minerals such as kyanite.</TableRowColumn>
							</TableRow>
							<TableRow>
								<TableRowColumn>Uneven</TableRowColumn>
								<TableRowColumn style={columnStyle}>Uneven fracture is a rough surface or one with random irregularities. It occurs in a wide range of minerals including arsenopyrite, pyrite and magnetite.</TableRowColumn>
							</TableRow>
						</TableBody>
					</Table>

					<b>Examples: </b>
					<Divider/>
					<Card style={exampleStyle}>
						<CardMedia
							overlayContentStyle={{paddingTop:'0px'}}
							overlay={<CardTitle title="Spencerite" subtitle="Conchoidal Fracture" />}
							>
								<img src='/img/Spencerite.jpg' />
						</CardMedia>
					</Card>
					<Card style={exampleStyle}>
						<CardMedia
							overlayContentStyle={{paddingTop:'0px'}}
							overlay={<CardTitle title="Partzite" subtitle="Earthy Fracture" />}
							>
								<img src='/img/Partzite.jpg' />
						</CardMedia>
					</Card>
					<Card style={exampleStyle}>
						<CardMedia
							overlayContentStyle={{paddingTop:'0px'}}
							overlay={<CardTitle title="Franckeite" subtitle="Hackly Fracture" />}
							>
								<img src='/img/Franckeite.jpg' />
						</CardMedia>
					</Card>
					<Card style={exampleStyle}>
						<CardMedia
							overlayContentStyle={{paddingTop:'0px'}}
							overlay={<CardTitle title="Balangeroite" subtitle="Splintery Fracture" />}
							>
								<img src='/img/Balangeroite.jpg' />
						</CardMedia>
					</Card>
					<Card style={exampleStyle}>
						<CardMedia
							overlayContentStyle={{paddingTop:'0px'}}
							overlay={<CardTitle title="Kalinite" subtitle="Uneven Fracture" />}
							>
								<img src='/img/Kalinite.jpg' />
						</CardMedia>
					</Card>
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
