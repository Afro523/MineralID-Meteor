//React, React Router
import React, { Component } from 'react';
import ReactMixin from 'react-mixin';
import PropTypes from 'prop-types';
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
import MinBanner from '../MinBanner';

export default class ListPage extends Component {


	constructor(props) {
		super(props);
		this.state = {
			currChar: 'A',
			mohMin: 0,
			mohMax: 10,
			currCat:'None',
			currLust:'None'
		};
		this.getMinFromDb = this.getMinFromDb.bind(this);
	}

	applyCatFilter(data){
		var tempData = [];
		for(var i=0; i < data.length; i++){
			//Matches the categories and pushes the matching objects
			if(data[i].category == this.state.currCat ){
				tempData.push(data[i]);
			}
		}
		return tempData;
	}

	applyLustFilter(data){
		var tempData = [];
		for(var i=0; i < data.length; i++){
			//Matches the categories and pushes the matching objects
			if(data[i].luster == this.state.currLust ){
				tempData.push(data[i]);
			}
		}
		return tempData;
	}

	applyMohFilter(data){
		var tempData = [];
		for(var i=0; data.length>i; i++){
			//one hardness value
			if(data[i].hardness.length == 1){
				var moh = parseFloat(data[i].hardness[0]);
				//Remove all minerals where mohMin <= hardness >= mohMax
				if (moh >= this.state.mohMin && moh <= this.state.mohMax){
					tempData.push(data[i]);
				}
			}else if (data[i].hardness.length == 2){
				var mohMin = parseFloat(data[i].hardness[0]);
				var mohMax = parseFloat(data[i].hardness[1]);
				if (mohMin >= this.state.mohMin && mohMax <= this.state.mohMax){
					tempData.push(data[i]);
				}
			} else{
				console.log('no hardness');
			}
		}
		return tempData;
	}

	setChar(event){
		this.setState( {currChar:event.target.textContent});
	}

	setMohMin(event){
		this.setState( {mohMin: parseFloat(event.target.textContent)});
	}

	setMohMax(event){
		this.setState( {mohMax:parseFloat(event.target.textContent)});
	}
	setCat(event){
		this.setState( {currCat:event.target.textContent});
	}

	setLust(event){
		this.setState( {currLust:event.target.textContent});
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

	//Uses the subscription to find minerals
	getMinFromDb(){
		const minLetter = this.state.currChar;
		var minData;
		//const minData = Minerals.find({minName:{$regex: '^'+minLetter+''}}, {sort:{minName:1}}).fetch();

		if(this.state.currChar == '-'){
			minData = Minerals.find({}, {sort:{minName:1}}).fetch();
		} else {
			minData = Minerals.find({minName:{$regex: '^'+minLetter+''}}, {sort:{minName:1}}).fetch();
		}

		//minData is loaded
		if(minData.length > 0){

			//Apply category filter through this.state.currCat
			if(this.state.currCat != 'None'){
				minData = this.applyCatFilter(minData);
			}

			//Apply Luster filter through this.state.currCat
			if(this.state.currLust != 'None'){
				minData = this.applyLustFilter(minData);
			}

			//Filter by Hardness
			if(parseInt(this.state.mohMin) > 0 || parseInt(this.state.mohMax) < 10 ){
				minData = this.applyMohFilter(minData);
			}
		}
		return minData;
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
				<div className="container-fluid">
					<MinBanner/>
					<div style={{textAlign: 'center'}}>
						<CircularProgress
							style={{marginTop:'30px'}}
							size={300}
							thickness={10}
						/>
					</div>
			</div>
			);
		} else {

			return (
				<div className="container-fluid">
					<MinBanner/>
						<Filter
							currChar={this.state.currChar}
							mohMin={this.state.mohMin}
							mohMax={this.state.mohMax}
							currCat={this.state.currCat}
							currLust={this.state.currLust}
							handleChar={this.setChar.bind(this)}
							handleCat={this.setCat.bind(this)}
							handleMohMin={this.setMohMin.bind(this)}
							handleMohMax={this.setMohMax.bind(this)}
							handleLust={this.setLust.bind(this)}
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

ListPage.defaultProps ={
	minerals:[],
};

ListPage.childContextTypes = {
	muiTheme: PropTypes.object.isRequired,
};
