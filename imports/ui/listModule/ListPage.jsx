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
import Filter from './Filter';
//MUI
import CircularProgress from 'material-ui/CircularProgress';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {List} from 'material-ui/List';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import MenuItem from 'material-ui/MenuItem';

const buttonStyles ={
	border:'1px solid black'
};
export default class ListPage extends Component {


	constructor(props) {
		super(props);
		this.state = {
			currChar: '-',
			mohMin:'0',
			mohMax:'8'
		};
		this.handleChange = this.handleChange.bind(this);
		this.getMinFromDb = this.getMinFromDb.bind(this);
	}

	componentDidUpdate(){

	}

	getChildContext() {
		return { muiTheme: getMuiTheme(baseTheme) };
	}

	getMeteorData(){
		const handle = Meteor.subscribe('minerals');

		const minData = this.getMinFromDb();
		return {
			ready: handle.ready(),
			//minerals: Minerals.find({}, {sort: {name: 1}}).fetch(),
			minerals: minData,
		};
	}
	getMinFromDb(){
		const minLetter = this.state.currChar;
		const minData = Minerals.find({minName:{$regex: '^'+minLetter+''}}, {sort:{minName:1}}).fetch();
		return minData;
	}

	handleChange (event, index, value) {
		this.setState({currChar:value});
	}

	renderMinerals () {
		return  this.data.minerals.map((mineral) => (

			<MinList key={mineral._id} mineral={mineral}/>
		));
	}

	render() {
		const abc = [
			'-','A', 'B', 'C', 'D', 'E', 'F', 'G',
			'H', 'I', 'J', 'K', 'L', 'M', 'N',
			'O', 'P', 'Q', 'R', 'S', 'T', 'U',
			'V', 'W', 'X', 'Y', 'Z'
		];
		const menItem = [];
		for (let i = 0; i< abc.length; i++){
			menItem.push(<MenuItem value={abc[i]} key={i} primaryText={abc[i]}/>);
		}

		const mohsScale = ['0','1','2','3','4','5','6','7','8'];
		const minMenuItem = [];
		for (let i = 0; i< mohsScale.length; i++){
			minMenuItem.push(<MenuItem value={mohsScale[i]} key={i} primaryText={mohsScale[i]}/>);
		}
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
						<Filter
							currChar={this.state.currChar}
							mohMin={this.state.mohMin}
							mohMax={this.state.mohMax}
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
