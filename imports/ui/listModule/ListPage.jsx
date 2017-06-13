//React, React Router
import React, { Component } from 'react';
import ReactMixin from 'react-mixin';
import PropTypes from 'prop-types';

//Meteor
import {ReactMeteorData} from 'meteor/react-meteor-data';

//Components and API
import SearchBar from './SearchBar';
import MinItem from './MinItem';
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
			mohMin: 0,
			mohMax: 10,
			currCat:'None',
			currLust:'None',
			currSearch:''
		};
		this.getMinFromDb = this.getMinFromDb.bind(this);
	}

	compare(a, b) {
	// Use toUpperCase() to ignore character casing
		const minA = a.minName.toUpperCase();
		const minB = b.minName.toUpperCase();

		let comparison = 0;
		if (minA > minB) {
			comparison = 1;
		} else if (minA < minB) {
			comparison = -1;
		}
		return comparison;
	}

	applySearchFilter(chars){
		var minData = allMin;
		var tempData = [];
		var charLen = chars.length;
		if (this.state.currSearch === '') {
			return tempData;
		} else {
			minData.forEach((value)=>{
				var minNamePartial = value.minName.substring(0, charLen);
				if(chars.toUpperCase() === minNamePartial.toUpperCase()){
					tempData.push(value);
				}
			});
			return tempData.sort(this.compare);
		}
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

	setChars(value){
		console.log(value);
		this.setState({currSearch: value});
	}

	getChildContext() {
		return { muiTheme: getMuiTheme(baseTheme) };
	}

	getMeteorData(){
		const minData = this.getMinFromDb();
		this.data.ready = true;
		return {
			ready: this.data.ready,
			minerals: minData
		};
	}

	getMinFromDb(){
		this.data.ready = false;
		const searchTerm = this.state.currSearch;

		var minData = this.applySearchFilter(this.state.currSearch);

		//Apply category filter through this.state.currCat
		if(this.state.currCat != 'None'){
			if(this.state.currSearch == ''){
				minData = allMin;
			}
			minData = this.applyCatFilter(minData);
		}
			//Apply Luster filter through this.state.currCat
		if(this.state.currLust != 'None'){
			if(this.state.currSearch == ''){
				minData = allMin;
			}
			minData = this.applyLustFilter(minData);
		}

			//Filter by Hardness
		if(parseInt(this.state.mohMin) > 0 || parseInt(this.state.mohMax) < 10 ){
			if(this.state.currSearch == '-'){
				minData = allMin;
			}
			minData = this.applyMohFilter(minData);
		}

		return minData.sort(this.compare);
	}

	handleSelect(event){
		console.log('PARENT' +event.target.textContent);
		//this.setState({ event.target.textContent});
	}

	renderMinerals () {
		return this.data.minerals.map((mineral) => (
			<MinItem key={mineral.minName} mineral={mineral}/>
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
						<SearchBar
							handleSearch={this.setChars.bind(this)}
						/>
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

					<List

						>
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
