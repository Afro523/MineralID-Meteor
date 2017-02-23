import React, { Component, PropTypes } from 'react';

//MUi stuff
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {List} from 'material-ui/List';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import {Link} from 'react-router';
import {createContainer} from 'meteor/react-meteor-data';
import {Meteor} from 'meteor/meteor';
import {Minerals} from '../../api/minerals';

import MinList from './MinList';

// App component - represents the whole app
export class ListPage extends Component {

	constructor(props) {
		super(props);
	}
	getChildContext() {
		return { muiTheme: getMuiTheme(baseTheme) };
	}

	renderMinerals () {
		return  this.props.minerals.map((mineral) => (

			<MinList key={mineral._id} mineral={mineral}/>
		));
	}

	render() {

		return (
				<div className="container">
					<AppBar
						iconElementLeft={<IconButton><Link to="/"><NavigationClose/></Link></IconButton>}
						title="Mineral ID"
					/>
					<List>

						{	this.renderMinerals()	}
					</List>
				</div>
		);
	}
}

ListPage.propTypes = {
	minerals: PropTypes.array.isRequired,

};

export default createContainer(()=>{
	if (Meteor.subscribe('minerals').ready()){
		return{
			minerals: Minerals.find({}, {sort: {name: 1}, limit:10}).fetch(),
		};
	} else {
		return{
			minerals: null
		};
	}
}, MinList);

ListPage.childContextTypes = {
	muiTheme: React.PropTypes.object.isRequired,
};
