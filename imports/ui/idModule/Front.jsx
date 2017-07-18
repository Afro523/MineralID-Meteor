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
		this.setHeight = this.setHeight.bind(this);
		this.state = {
			height: 0
		};
	}

	getChildContext() {
		return { muiTheme: getMuiTheme(myBaseTheme) };
	}

	setHeight(){
		let cardHeight = ReactDOM.findDOMNode(this.refs[this.props.mineral.minName + 'Ref']).clientHeight;
		console.log(cardHeight);
		this.setState({
			height: cardHeight
		});
	}

	componentDidMount() {
		setTimeout( () => this.setHeight(), 10);
	}
	
	render() {
		var frontRef = this.props.mineral.minName + 'Ref';
		return (
				
				<Card id={this.props.mineral.minName + 'Front'} className='front tile'>
					<CardMedia
						overlayContentStyle={{paddingTop:'0px'}}
						overlayStyle={{paddingTop:'0px'}}
						overlay={<CardTitle style={{paddingTop:'0px', paddingBottom:'0px'}} title={this.props.mineral.minName} />}
						>
						
							<img ref={frontRef} className='responsive-img' src={'/img/'+this.props.mineral.minName+'.jpg'}/>
						
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
