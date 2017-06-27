//React
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import myBaseTheme from '../../../client/myBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Snackbar from 'material-ui/Snackbar';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Reset from 'material-ui/svg-icons/av/replay';
const exampleStyle = {
	marginTop:'10px'
};

export default class ResetBtn extends Component {
	constructor(props) {
		super(props);
		this.state = {
      open: false,
    };
	}

	beVisible(currentQuestion){
		if(currentQuestion != 'default'){
			return 'inherit'
		}else {
			return 'none'
		}
	}

	toastAndReset(){
		this.handleTouchTap();
		this.props.resetState();
	}

	handleTouchTap(){
    this.setState({
      open: true,
    });
  }

  handleRequestClose(){
    this.setState({
      open: false,
    });
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
			<div>
				<FloatingActionButton
					style={{marginTop:'20px', display:this.beVisible(this.props.currentQuestion), position:'fixed', bottom:20, right:this.renderPosition(this.props.isAnswer)}}
					onClick={() => this.toastAndReset()}
					>
					<Reset/>
				</FloatingActionButton>
				<Snackbar
					bodyStyle={{textAlign:'center'}}
          open={this.state.open}
          message="Reset I.D. Process"
          autoHideDuration={1000}
          onRequestClose={this.handleRequestClose.bind(this)}
        />
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
