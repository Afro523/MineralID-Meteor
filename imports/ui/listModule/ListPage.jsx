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
			mohMax:'8',
			currCat:'None'
		};
		this.getMinFromDb = this.getMinFromDb.bind(this);
	}

	setChar(event){
		this.setState( {currChar:event.target.textContent});
	}

	setMohMin(event){
		this.setState( {mohMin:event.target.textContent});
	}

	setMohMax(event){
		this.setState( {mohMax:event.target.textContent});
	}
	setCat(event){
		this.setState( {currCat:event.target.textContent});
	}

	getChildContext() {
		return { muiTheme: getMuiTheme(baseTheme) };
	}

	getMeteorData(){
		const handle = Meteor.subscribe('minerals');
		const minData = this.getMinFromDb();
		return {
			ready: handle.ready(),
			minerals: minData,
		};
	}
	getMinFromDb(){
		const minLetter = this.state.currChar;
		const minData = Minerals.find({minName:{$regex: '^'+minLetter+''}}, {sort:{minName:1}}).fetch();

		if(minData.length != 0){
			for(var i = 0; i < minData.length; i++){
				if(minData[i].category != this.state.currCat){
					minData.splice(i, 1);
				}
			}
		}
		return minData;
	}

	handleClick(){
		this.getMinFromDb.bind(this);
	}

	handleSelect(event){
		console.log('PARENT' +event.target.textContent);
		//this.setState({ event.target.textContent});
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
						<Filter
							currChar={this.state.currChar}
							mohMin={this.state.mohMin}
							mohMax={this.state.mohMax}
							currCat={this.state.currCat}
							handleClick={this.handleClick.bind(this)}
							handleChar={this.setChar.bind(this)}
							handleCat={this.setCat.bind(this)}
							handleMohMin={this.setMohMin.bind(this)}
							handleMohMax={this.setMohMax.bind(this)}
						/>
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
