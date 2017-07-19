//React
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

//My Components
import Front from './Front';
import Back from './Back';
//MUi
import myBaseTheme from '../../../client/myBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

export default class Flipper extends Component {
	constructor(props) {
		super(props);
		this.state = {
      		height: 400,
    	};
	}

	getChildContext() {
		return { muiTheme: getMuiTheme(myBaseTheme) };
	}

	setHeight(incHeight){
		this.setState({
			height:incHeight 
		});
	}

	render() {
		
		return (
			<div className={"container flipper-container " + this.props.orientation} style={{height:this.state.height}}>
				<div className={"container flipper" + (this.props.flipped ? " flipped" : "")}>


      			<Front handleHeight={this.setHeight.bind(this)} mineral={this.props.mineral}/>
      			<Back mineral={this.props.mineral}/>


      		</div>
    	</div>
		);
	}
}

Flipper.propTypes ={
	mineral: PropTypes.object.isRequired,
	orientation: PropTypes.string.isRequired,
};

Flipper.childContextTypes = {
	muiTheme: PropTypes.object.isRequired,
};
