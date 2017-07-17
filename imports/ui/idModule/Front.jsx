//React
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import {Card, CardMedia, CardTitle} from 'material-ui/Card';

import myBaseTheme from '../../../client/myBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

export default class Front extends Component {
	constructor(props) {
		super(props);
		this.state = {
			height: null
		};
	}

	getChildContext() {
		return { muiTheme: getMuiTheme(myBaseTheme) };
	}
	setHeight(){

		var targetDiv = this.props.mineral.minName + 'Ref'
		var test = this.props.ref;
		//console.log(this.refs[targetDiv]);
		var childHeight = ReactDOM.findDOMNode(this.refs[targetDiv]);
		//console.log(targetDiv + ' : '+childHeight.getComputedStyle);
		//console.log(document.getElementById(this.props.mineral.minName + 'Front').clientHeight)
		var computedStyles =  window.getComputedStyle(childHeight);
		//console.log(computedStyles);
		//var childDimensions = childHeight.getBoundingClientRect();
		//console.log(childDimensions);
	}

	componentDidMount(){
		console.log(document.getElementById(this.props.mineral.minName + 'Front').offsetHeight)
		this.setHeight();
	}
	render() {
		var frontRef = this.props.mineral.minName + 'Ref';
		return (
				<Card id={this.props.mineral.minName + 'Front'} ref={frontRef} className='front tile'>
					<CardMedia
						overlayContentStyle={{paddingTop:'0px'}}
						overlayStyle={{paddingTop:'0px'}}
						overlay={<CardTitle style={{paddingTop:'0px', paddingBottom:'0px'}} title={this.props.mineral.minName} />}
						>
							<img className='img-responsive' src={'/img/'+this.props.mineral.minName+'.jpg'}/>
					</CardMedia>
				</Card>

		);
	}
}

Front.propTypes ={
	mineral: PropTypes.object.isRequired,
};

Front.childContextTypes = {
	muiTheme: PropTypes.object.isRequired,
};
