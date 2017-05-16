//React
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Card, CardMedia, CardTitle} from 'material-ui/Card';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const exampleStyle = {
	position:'absolute',
	height:'20vh'
};

export default class UvCard extends Component {
	constructor(props) {
		super(props);
		this.state = {cardState:'plain'};
		this.toggleVisible = this.toggleVisible.bind(this);
	}

	getChildContext() {
		return { muiTheme: getMuiTheme(baseTheme) };
	}

	toggleVisible(){
		if (this.state.cardState == 'plain'){
			this.setState({cardState:'uv'});
		} else if(this.state.cardState == 'uv'){
			this.setState({cardState:'plain'});
		}

	}

	render() {

		var component;
		if (this.state.cardState == 'plain') {
			component = <Card key={this.props.plainPicture}
				onTouchTap = { this.toggleVisible.bind(this)}
				>
				<CardMedia

					>
						<img className='img-responsive' src={'/exampleImg/fluorescence/'+ this.props.plainPicture} />
				</CardMedia>
				<CardTitle
					subtitle={this.props.plainDescription}

				/>
			</Card>;
		} else {
			component = <Card key={this.props.uvPicture}
				onTouchTap = { this.toggleVisible.bind(this)}
				>
				<CardMedia>
						<img className='img-responsive'  src={'/exampleImg/fluorescence/'+ this.props.uvPicture} />
				</CardMedia>
				<CardTitle
					subtitle={this.props.uvDescription}

				/>
			</Card>;
		}


		return (
			<div style={{marginTop:'15px'}}>
				<CSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
					transitionLeave={false}>
					{component}
				</CSSTransitionGroup>
			</div>

		);
	}
}

UvCard.propTypes ={
	plainPicture: PropTypes.string,
	plainDescription: PropTypes.string,
	uvPicture: PropTypes.string,
	uvDescription: PropTypes.string
};

UvCard.childContextTypes = {
	muiTheme: PropTypes.object.isRequired,
};
