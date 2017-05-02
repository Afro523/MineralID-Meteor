//React
import React, {Component, PropTypes} from 'react';
import Divider from 'material-ui/Divider';

import MinBanner from '../MinBanner';

import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Table, TableBody, TableRow, TableRowColumn} from 'material-ui/Table';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';



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
						<br/>
						A range of terms are used to describe luster, such as earthy, metallic, greasy, and silky. Similarly, the term vitreous (derived from the Latin for glass, vitrum) refers to a glassy luster. A list of these terms is given below.
						<br/>
						<br/>
						Luster varies over a wide continuum, and so there are no rigid boundaries between the different types of luster. (For this reason, different sources can often describe the same mineral differently. This ambiguity is further complicated by luster's ability to vary widely within a particular mineral species.) The terms are frequently combined to describe intermediate types of luster (for example, a "vitreous greasy" luster).


					</p>
					<b> Common Terms </b>
					<Divider/>
					<p style={{textAlign:'center'}}><i>Non-Metallic Luster Terms</i></p>
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
						</TableBody>
					</Table>
					<b>Examples: </b>
					<Divider/>
					<Card>
						<CardMedia
							overlay={<CardTitle title="Pyrite" subtitle="Metallic Luster" />}
							>
								<img src='/img/Pyrite.jpg' />
						</CardMedia>
					</Card>
					<Card>
						<CardMedia
							overlay={<CardTitle title="Quartz" subtitle="Vitreous Luster" />}
							>
								<img src='/img/Quartz.jpg' />
						</CardMedia>
					</Card>
					<Card>
						<CardMedia
							overlay={<CardTitle title="Chalcedony" subtitle="Waxy Luster" />}
							>
								<img src='/img/Chalcedony.jpg' />
						</CardMedia>
					</Card>
					<Card>
						<CardMedia
							overlay={<CardTitle title="Muscovite" subtitle="Pearly Luster" />}
							>
								<img src='/img/Muscovite.jpg' />
						</CardMedia>
					</Card>
					<Card>
						<CardMedia
							overlay={<CardTitle title="Gypsum" subtitle="Satiny Luster" />}
							>
								<img src='/img/Talc.jpg' />
						</CardMedia>
					</Card>
					<Card>
						<CardMedia
							overlay={<CardTitle title="Kankite" subtitle="Earthy Luster" />}
							>
								<img src='/img/Kankite.jpg' />
						</CardMedia>
					</Card>
					<Card>
						<CardMedia
							overlay={<CardTitle title="Metasideronatrite" subtitle="Greasy Luster" />}
							>
								<img src='/img/Metasideronatrite.jpg' />
						</CardMedia>
					</Card>
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