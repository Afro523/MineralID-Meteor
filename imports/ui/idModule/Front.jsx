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
	}

	getChildContext() {
		return { muiTheme: getMuiTheme(myBaseTheme) };
	}

	setHeight(){
		let minName = this.props.mineral.minName;
		let cardHeight = ReactDOM.findDOMNode(this.refs[minName + 'Ref']).clientHeight;
		console.log(cardHeight);

		//adds 25 pixels to hold overlay 
		this.props.handleHeight(cardHeight+25);
	}

	componentDidMount() {
		setTimeout( () => this.setHeight(), 500);
		window.addEventListener("orientationchange", this.setHeight);
		window.addEventListener("resize", this.setHeight);
	}

	componentWillUnmount() {
        window.removeEventListener("orientationchange", this.setHeight);
        window.removeEventListener("resize", this.setHeight);
    }
	
	render() {
		var frontRef = this.props.mineral.minName + 'Ref';
		return (
				
				<Card id={this.props.mineral.minName + 'Front'} className='front tile'>
					<CardMedia
						ref={frontRef}
						overlayContentStyle={{paddingTop:'0px'}}
						overlayStyle={{paddingTop:'0px'}}
						overlay={<CardTitle style={{paddingTop:'0px', paddingBottom:'0px'}} title={this.props.mineral.minName} />}
						>
						<img style={{maxHeight:'500px'}} className='responsive-img' src={'/img/'+this.props.mineral.minName+'.jpg'}/>
					</CardMedia>
				</Card>
		);
	}
}

Front.propTypes ={
	mineral: PropTypes.object.isRequired,
	handleHeight: PropTypes.func.isRequired,
};

Front.childContextTypes = {
	muiTheme: PropTypes.object.isRequired,
};
