//React
import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

import RaisedButton from 'material-ui/RaisedButton';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Help from 'material-ui/svg-icons/action/help';

export default class QuestionContainer extends Component {
	constructor(props) {
		super(props);
	}

	getChildContext() {
		return { muiTheme: getMuiTheme(baseTheme) };
	}

	render() {
		return (
			<div className='container'>
				<h3 style={{textAlign:'center'}}>What is the luster of the mineral?</h3>
				<div style={{display:'flex', flexWrap:'wrap', alignContent:'center'}}>
					<RaisedButton
						style={{width:'100%', height:'20vh', marginTop:'20px'}}
						>
						<h4>Metallic</h4>
					</RaisedButton>

					<RaisedButton
						style={{width:'100%', height:'20vh', marginTop:'30px'}}
						>
						<h4>Non-Metallic</h4>
					</RaisedButton>


				</div>
				<FloatingActionButton
					style={{float:'right', marginTop:'20px'}}
					>
					<Help/>
				</FloatingActionButton>
			</div>
		);
	}
}

QuestionContainer.propTypes ={

};

QuestionContainer.childContextTypes = {
	muiTheme: React.PropTypes.object.isRequired,
};
