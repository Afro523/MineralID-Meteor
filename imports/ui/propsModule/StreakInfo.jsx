//React
import React, {Component, PropTypes} from 'react';
import Divider from 'material-ui/Divider';

import MinBanner from '../MinBanner';

import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Card, CardMedia, CardTitle} from 'material-ui/Card';

const exampleStyle = {
	marginTop:'10px'
};

export default class StreakInfo extends Component {
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
					<h3 style={{paddingTop:'20px', textAlign:'center'}}>Streak</h3>
					<p style={{textAlign:'center'}}><i>The powder of a mineral</i></p>
					<b> Summary: </b>
					<Divider/>
					<p>
						The streak of a mineral is the color of the powder produced when it is dragged across an un-weathered surface. Unlike the apparent color of a mineral, which for most minerals can vary considerably, the trail of finely ground powder generally has a more consistent characteristic color, and is thus an important diagnostic tool in mineral identification.
						<br/>
						<br/>
						If no streak seems to be made, the mineral's streak is said to be white or colorless. Streak is particularly important as a diagnostic for opaque and colored materials. It is less useful for silicate minerals, most of which have a white streak or are too hard to powder easily.
					</p>
					<b> How It Works: </b>
					<Divider/>
					<p>
						The surface across which the mineral is dragged is called a "streak plate," and is generally made of unglazed porcelain tile. In the absence of a streak plate, the unglazed underside of a porcelain bowl or vase or the back of a glazed tile will work.
						<br/>
						<br/>
						Because the trail left behind results from the mineral being crushed into powder, a streak can only be made of minerals softer than the streak plate, around 7 on the Mohs scale of mineral hardness. In case of harder minerals, the color of the powder can be determined by filing or crushing with a hammer a small sample, which is then usually rubbed on a streak plate. Most minerals that are harder have an unhelpful white streak.
					</p>
					<b>Streak Examples: </b>
					<Divider/>

					<Card style={exampleStyle}>
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

StreakInfo.propTypes ={

};

StreakInfo.childContextTypes = {
	muiTheme: React.PropTypes.object.isRequired,
};
