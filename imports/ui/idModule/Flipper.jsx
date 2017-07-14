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
	}

	setHeight(){

		var targetDiv = this.props.mineral.minName + 'Ref'
		var test = this.props.ref;
		console.log(this.refs[targetDiv]);
		var childHeight = ReactDOM.findDOMNode(this.refs[targetDiv]);
		console.log(childHeight);
		//var childDimensions = childHeight.getBoundingClientRect();
		//console.log(childDimensions);
	}

	componentDidMount(){
		this.setHeight();
	}
	getChildContext() {
		return { muiTheme: getMuiTheme(myBaseTheme) };
	}

	render() {
		var frontRef = this.props.mineral.minName + 'Ref';

		return (
			<div className={"container flipper-container " + this.props.orientation}>
				<div className={"container flipper" + (this.props.flipped ? " flipped" : "")}>
      			<Front ref={frontRef} mineral={this.props.mineral}/>
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
