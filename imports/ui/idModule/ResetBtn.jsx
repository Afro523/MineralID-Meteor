//React
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import myBaseTheme from '../../../client/myBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Reset from 'material-ui/svg-icons/av/replay';
const exampleStyle = {
	marginTop:'10px'
};

export default class ResetBtn extends Component {
	constructor(props) {
		super(props);
	}

	getChildContext() {
		return { muiTheme: getMuiTheme(myBaseTheme) };
	}

	renderPosition(isAnswer){
		if(isAnswer != true ){
			return 70
		} else{
			return 10
		}
	}


	render() {
		return (
			<div className='container-fluid'>
				<FloatingActionButton
					style={{marginTop:'20px', position:'fixed', bottom:20, right:this.renderPosition(this.props.isAnswer)}}
					onClick={ this.props.resetState}
					>
					<Reset/>
				</FloatingActionButton>
			</div>
		);
	}
}

ResetBtn.propTypes ={
	resetState: PropTypes.func.isRequired,
	isAnswer: PropTypes.bool.isRequired,
};

ResetBtn.childContextTypes = {
	muiTheme: PropTypes.object.isRequired,
};
