//React
import React, {Component} from 'react';

import {Card, CardMedia, CardTitle} from 'material-ui/Card';

import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const exampleStyle = {
	marginTop:'10px',
	position:'absolute'
};

export default class UvCard extends Component {
	constructor(props) {
		super(props);
	}

	getChildContext() {
		return { muiTheme: getMuiTheme(baseTheme) };
	}

	render() {
		return (
			<div>
				<Card style={exampleStyle}
					onTouchTap = {() =>  this.toggleVisible}
					>
					<CardMedia>
							<img className='responsive-img' src='/exampleImg/fluorescence/willPlain.jpg' />
					</CardMedia>
					<CardTitle
						subtitle='Plain / Normal Light'
					/>
				</Card>
			</div>
		);
	}
}

UvCard.propTypes ={

};

UvCard.childContextTypes = {
	muiTheme: React.PropTypes.object.isRequired,
};
