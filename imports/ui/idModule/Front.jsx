//React
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import {Card, CardMedia, CardTitle} from '@material-ui/core/Card';

import myBaseTheme from '../../../client/myBaseTheme';
// 'material-ui/core/styles/getMuiTheme

export default class Front extends Component {
	constructor(props) {
		super(props);
	}

	getChildContext() {
		return { muiTheme: getMuiTheme(myBaseTheme) };
	}

	render() {
		var frontRef = this.props.mineral.minName + 'Ref';
		return (

				<Card id={this.props.mineral.minName + 'Front'} className='front tile' style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
					<CardMedia
						className='minImg'
						ref={frontRef}
						overlayContentStyle={{paddingTop:'0px'}}
						overlayStyle={{paddingTop:'0px'}}
						overlay={<CardTitle style={{paddingTop:'0px', paddingBottom:'0px'}} title={this.props.mineral.minName} />}
						>
						<img className='minImg' src={'/img/'+this.props.mineral.minName+'.jpg'}/>
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
