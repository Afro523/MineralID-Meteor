//React, React Router
import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router';
import ReactMixin from 'react-mixin';

//Meteor
import {ReactMeteorData} from 'meteor/react-meteor-data';
import {Meteor} from 'meteor/meteor';

//Components and API
import {Minerals} from '../../api/minerals';
import MinList from './MinList';
//MUI
import CircularProgress from 'material-ui/CircularProgress';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {List} from 'material-ui/List';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

export default class ListPage extends Component {

	constructor(props) {
		super(props);
	}

	getChildContext() {
		return { muiTheme: getMuiTheme(baseTheme) };
	}

	getMeteorData(){
		const handle = Meteor.subscribe('minerals');

		const minData = Minerals.find({minName:{$regex: '^A'}}).fetch();
		return {
			ready: handle.ready(),
			//minerals: Minerals.find({}, {sort: {name: 1}}).fetch(),
			minerals: minData,
		};
	}

	renderMinerals () {
		return  this.data.minerals.map((mineral) => (

			<MinList key={mineral._id} mineral={mineral}/>
		));
	}

	render() {

		if(!this.data.ready){
			return (
				<div className="container">
					<AppBar
						iconElementLeft={<IconButton><Link to="/"><NavigationClose/></Link></IconButton>}
						title="Mineral ID"
					/>
					{/*<SortBy/>*/}
					<div style={{position: 'relative'}}>
						<CircularProgress
							size={80}
							thickness={5}
							style={{marginLeft: '50%'}}
						/>
					</div>
			</div>
			);
		} else {

			return (
				<div className="container">
					<AppBar
						iconElementLeft={<IconButton><Link to="/"><NavigationClose/></Link></IconButton>}
						title="Mineral ID"
					/>
					{/*<SortBy onClick={this.handleOpen()} />*/}
					<List>
						{	this.renderMinerals()	}
					</List>
				</div>
			);
		}
	}
}

ReactMixin(ListPage.prototype, ReactMeteorData);

ListPage.propTypes = {
	minerals: PropTypes.array.isRequired,
};

ListPage.childContextTypes = {
	muiTheme: React.PropTypes.object.isRequired,
};
