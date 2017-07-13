//React
import React, {Component} from 'react';
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

	setHeight(){
		var targetDiv = this.props.mineral.minName + 'Ref'
		console.log(targetDiv);
		var childHeight = this.refs.targetDiv.getDOMNode();
		var childDimensions = childHeight.getBoundingClientRect();
		console.log(childDimensions);
	}

	getChildContext() {
		return { muiTheme: getMuiTheme(myBaseTheme) };
	}
	componentDidMount(){
		this.setHeight();
	}
	render() {
		return (
				<Card ref={this.props.mineral.minName + 'Ref'} className='front tile'>
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
