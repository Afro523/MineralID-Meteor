import React, { Component } from 'react';
import {Link} from 'react-router';
//MUi stuff
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

// App component - represents the whole app
export default class GoToButton extends Component {

	constructor(props) {
		super(props);
	}

	getChildContext() {
		return { muiTheme: getMuiTheme(baseTheme) };
	}


	render() {

		return (

				<div>
					<Card style={{width:'50%'}}>
						<CardTitle title={this.props.title}/>
						<CardText>
							{this.props.icon}
						</CardText>
					</Card>
					<Link to="/list"className="waves-effect waves-light btn light-blue darken-3">Mineral List</Link>
				</div>

		);
	}
}

GoToButton.childContextTypes = {
	muiTheme: React.PropTypes.object.isRequired,
};
