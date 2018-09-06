//React
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Flipper from './Flipper'

import myBaseTheme from '../../../client/myBaseTheme';
// 'material-ui/core/styles/getMuiTheme

export default class FlipCard extends Component {
	constructor(props) {
		super(props);
		this.state = {
      		flipped: false,
    	};
	}

	getChildContext() {
		return { muiTheme: getMuiTheme(myBaseTheme) };
	}

	flip() {
    this.setState({ flipped: !this.state.flipped });
  	}

  	getData(minName){
  		for (let i = 0; i < allMin.length; i++) {
  			if(allMin[i].minName === minName){
  				return allMin[i];
  			}
  		}
  	}

	render() {
		return (
			<div
				onClick={() => this.flip()}
				>
				 <Flipper mineral={this.getData(this.props.mineral)} flipped={this.state.flipped} orientation="horizontal" />
			</div>
		);
	}
}

FlipCard.propTypes ={
	mineral: PropTypes.string.isRequired,
};

FlipCard.childContextTypes = {
	muiTheme: PropTypes.object.isRequired,
};
