//React
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import myBaseTheme from '../../../client/myBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Card, CardMedia, CardTitle} from 'material-ui/Card';

const exampleStyle = {
	marginTop:'10px'
};

export default class Answer extends Component {
	constructor(props) {
		super(props);
	}

	getChildContext() {
		return { muiTheme: getMuiTheme(myBaseTheme) };
	}

	renderCommonMin(arr){
		return(
			arr.map((commonMin) =>(

				<Card style={exampleStyle} key={commonMin}>
					<CardMedia
						overlayContentStyle={{paddingTop:'0px'}}
						overlayStyle={{paddingTop:'0px'}}
						overlay={<CardTitle style={{paddingTop:'0px', paddingBottom:'0px'}} title={commonMin} />}
						>
							<img src={'/img/'+commonMin+'.jpg'}/>
					</CardMedia>
				</Card>
			))
		)


	}

	render() {
		return (
			<div className='container-fluid'>
				<h4>Common Minerals</h4>
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
