//React
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Flipper from './Flipper'

import myBaseTheme from '../../../client/myBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

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

	render() {
		return (
			<div
				onClick={() => this.flip()}
				>
				 <Flipper mineral={this.props.mineral} flipped={this.state.flipped} orientation="horizontal" />
			</div>
		);
	}
}

FlipCard.propTypes ={
	mineral: PropTypes.object.isRequired,
};

FlipCard.childContextTypes = {
	muiTheme: PropTypes.object.isRequired,
};
