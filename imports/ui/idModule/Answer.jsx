//React
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import myBaseTheme from '../../../client/myBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import FlipCard from './FlipCard';

const exampleStyle = {
	marginTop:'10px',
};

export default class Answer extends Component {
	constructor(props) {
		super(props);
		this.state ={
			isFlipped: false
		}
	}

	getChildContext() {
		return { muiTheme: getMuiTheme(myBaseTheme) };
	}

	showBack() {
    this.setState({
      isFlipped: true
    });
  }

  showFront() {
    this.setState({
      isFlipped: false
    });
  }

  handleOnFlip(flipped) {
    if (flipped) {
      this.refs.backButton.getDOMNode().focus();
    }
  }

  handleKeyDown(e) {
    if (this.state.isFlipped && e.keyCode === 27) {
      this.showFront();
    }
  }

	renderCommonMin(arr){
		return(
			arr.map((commonMin) =>(
				<FlipCard key={commonMin} mineral={commonMin}/>
			))
		)
	}

	render() {
		return (
			<div className='container-fluid'>
				<h4 style={{textAlign:'center'}}> Most Common Minerals</h4>
				{this.renderCommonMin(this.props.commonMin)}
			</div>
		);
	}
}

Answer.propTypes ={

};

Answer.childContextTypes = {
	muiTheme: PropTypes.object.isRequired,
};
