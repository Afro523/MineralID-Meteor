//React
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';

import MinBanner from '../MinBanner';
import {Card, CardMedia, CardTitle} from '@material-ui/core/Card';
import myBaseTheme from '../../../client/myBaseTheme';
// 'material-ui/core/styles/getMuiTheme

export default class CleavageInfo extends Component {
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

					<h3 style={{textAlign:'center', paddingTop:'20px'}}>Cleavage</h3>
					<p style={{textAlign:'center'}}><i>The distinct breaking angles of a mineral</i></p>
					<b> Summary: </b>
					<Divider/>
					<p>
					The tendency of a mineral to break along flat planar surfaces as determined by the structure of its crystal lattice. These two-dimensional surfaces are known as cleavage planes and are caused by the alignment of weaker bonds between atoms in the crystal lattice. Cleavage planes are distinguished from fracture by being smooth and often having reflective surfaces.
					</p>
					<Divider/>
					<b> How It Works: </b>
					<p>
						To describe the clevage of a mineral use one of the terms below:
					</p>
					<Divider style={{width:'50%', marginLeft:'auto', marginRight: 'auto'}}/>
					<p>
						<b>Perfect</b> - Produces smooth surfaces (often seen as parallel sets of straight lines).
					</p>
					<Card style={{marginTop:'15px'}}>
						<CardMedia
							overlay={<CardTitle title="Kulanite" subtitle="Perfect Clevage" />}
						>
							<img src='/img/Kulanite.jpg' />
						</CardMedia>
					</Card>
					<br/>
					<Divider/>
					<p>
						<b>Good</b> - Produces planes that are not smooth.
					</p>
					<Card style={{marginTop:'15px'}}>
						<CardMedia
							overlay={<CardTitle title="Chondrodite" subtitle="Good Clevage" />}
						>
							<img src='/img/Chondrodite.jpg' />
						</CardMedia>
					</Card>
					<br/>
					<Divider/>
					<p>
						<b>Poor</b> - Less regular, hard to see distinct lines.
					</p>
					<Card style={{marginTop:'15px'}}>
						<CardMedia
							overlay={<CardTitle title="Weberite" subtitle="Poor Clevage" />}
						>
							<img src='/img/Weberite.jpg' />
						</CardMedia>
					</Card>
					<br/>
					<Divider/>
					<p>
						<b>Non-existent</b> - Amorphus, no clean cuts or angles
					</p>
						<Card style={{marginTop:'15px', marginBottom:'15px'}}>
							<CardMedia
								overlay={<CardTitle title="Hidalgoite" subtitle="Non-Existent Clevage" />}
							>
								<img src='/img/Hidalgoite.jpg' />
							</CardMedia>
						</Card>
				</div>
			</div>
		);
	}
}

CleavageInfo.propTypes ={

};

CleavageInfo.childContextTypes = {
	muiTheme: PropTypes.object.isRequired,
};
