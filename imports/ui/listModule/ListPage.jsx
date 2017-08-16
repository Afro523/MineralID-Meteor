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
import Infinite from 'react-infinite';

//MUI
import CircularProgress from 'material-ui/CircularProgress';
import myBaseTheme from '../../../client/myBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {List} from 'material-ui/List';
import MinBanner from '../MinBanner';

export default class ListPage extends Component {

	constructor(props) {
		super(props);
		this.state = {
			mohMin: '0',
			mohMax: '10',
			currCat:'None',
			currLust:'None',
			currSearch:'',
			currColor:'None'
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
		let minData = allMin;
		let tempData = [];
		let charLen = chars.length;
		if (this.state.currSearch === '') {
			return tempData;
		} else {
			minData.forEach((value)=>{
				let minNamePartial = value.minName.substring(0, charLen);
				if(chars.toUpperCase() === minNamePartial.toUpperCase()){
					tempData.push(value);
				}
			});
			return tempData.sort(this.compare);
		}
	}

	applyCatFilter(data){
		let tempData = [];
		let len = data.length;
		for(var i=0; i < len; i++){
			//Matches the categories and pushes the matching objects
			if(data[i].category == this.state.currCat ){
				tempData.push(data[i]);
			}
		}
		return tempData;
	}

	applyColorFilter(data){
		//need to address beige
		const colorAlts =
		{	Purple:['lavander', 'violet', 'purpl', 'lilac', 'magenta'],
			Blue:['azure', 'turquoise', 'blu'],
			Beige:['cream'],
			Red:['vermilion', 'cherry'],
			Green:['olive', 'emerald'],
			Pink:['salmon'],
			Bronze:['copper'],
			Yellow:['lemon']
		};
		let tempData = [];
		let currentColors = [this.state.currColor];
		if(colorAlts[this.state.currColor] !== undefined){
			currentColors = currentColors.concat(colorAlts[this.state.currColor]);
		}
		data.map((value)=>{
			//Searches for color string based on currentColors array
			let incomingString = value.color.toUpperCase();
			//for each alt color
			for(let j = 0; j < currentColors.length; j++){
				if(incomingString.includes(currentColors[j].toUpperCase()) && !incomingString.includes('ISH')){
					tempData.push(value);
					break;
				}
			}
		});


		return tempData;
	}

	applyLustFilter(data){
		let tempData = [];
		let len = data.length;
		for(let i=0; i < len; i++){
			//Matches the categories and pushes the matching objects
			if(data[i].luster == this.state.currLust ){
				tempData.push(data[i]);
			}

			if(this.state.currLust == 'Earthy/Dull'){
				if(data[i].luster == 'Earthy' || data[i].luster == 'Dull'){
					tempData.push(data[i]);
				}
			}
		}
		return tempData;
	}

	applyMohFilter(data){
		let tempData = [];
		let len = data.length;
		for(let i=0; len >i; i++){
			//one hardness value
			if(data[i].hardness.length == 1){
				let moh = parseFloat(data[i].hardness[0]);
				//Remove all minerals where mohMin <= hardness >= mohMax
				if (moh >= parseInt(this.state.mohMin, 10) && moh <= parseInt(this.state.mohMax, 10)){
					tempData.push(data[i]);
				}
			}else if (data[i].hardness.length == 2){
				let mohMin = parseFloat(data[i].hardness[0]);
				let mohMax = parseFloat(data[i].hardness[1]);
				if (mohMin >= parseInt(this.state.mohMin, 10) && mohMax <= parseInt(this.state.mohMax, 10) ){
					tempData.push(data[i]);
				}
			} else{
				console.log('no hardness');
			}
		}
		return tempData;
	}

	setCat(incCat){
		this.setState( {currCat:incCat});
	}

	setChar(event){
		this.setState( {currChar:event.target.textContent});
	}

	setColor(value){
		this.setState( {currColor:value});
	}

	setMohMin(incNum){
		this.setState( {mohMin: incNum});
	}

	setMohMax(incNum){
		this.setState( {mohMax: incNum});
	}

	setLust(incLust){
		this.setState( {currLust:incLust});
	}

	setChars(value){
		this.setState({currSearch: value});
	}

	getChildContext() {
		return { muiTheme: getMuiTheme(myBaseTheme) };
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
		if(this.state.currColor != 'None'){
			if(minData.length <= 0){
				minData = allMin;
			}
			minData = this.applyColorFilter(minData);
		}

		//Apply category filter through this.state.currCat
		if(this.state.currCat != 'None'){
			if(minData.length <= 0){
				minData = allMin;
			}
			minData = this.applyCatFilter(minData);
		}
			//Apply Luster filter through this.state.currCat
		if(this.state.currLust != 'None'){
			if(minData.length <= 0){
				minData = allMin;
			}
			minData = this.applyLustFilter(minData);
		}

			//Filter by Hardness
		if(parseInt(this.state.mohMin) > 0 || parseInt(this.state.mohMax) < 10 ){
			if(minData.length <= 0){
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
		//react-infinit-scroll
		if(this.state.mohMin === '0' && this.state.mohMax === '10' && this.state.currCat === 'None'
			&& this.state.currLust === 'None' && this.state.currSearch === '' && this.state.currColor === 'None'){
			return(
				<div style={{textAlign:'center', marginTop:'50%', color:'grey'}}>
					You currently have nothing in your search
					<br/>
					Either enter text above or use the filter below
				</div>
				)
		} else {
			return this.data.minerals.map((mineral) => (
				<MinItem key={mineral.minName} mineral={mineral}/>
			));	
		}
	}

	render() {
		return (
			<div className="container-fluid">
				<MinBanner/>
				<SearchBar
					handleSearch={this.setChars.bind(this)}
				/>
				<Filter
					mohMin={this.state.mohMin}
					mohMax={this.state.mohMax}
					currCat={this.state.currCat}
					currLust={this.state.currLust}
					currColor={this.state.currColor}
					handleChar={this.setChar.bind(this)}
					handleColor={this.setColor.bind(this)}
					handleCat={this.setCat.bind(this)}
					handleMohMin={this.setMohMin.bind(this)}
					handleMohMax={this.setMohMax.bind(this)}
					handleLust={this.setLust.bind(this)}
				/>

				<Infinite
					useWindowAsScrollContainer={true}
					elementHeight={40}
					infiniteLoadBeginEdgeOffset={100}
					preloadBatchSize={Infinite.containerHeightScaleFactor(2)}
				>
					{	this.renderMinerals()	}
				</Infinite>
			</div>
		);
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
