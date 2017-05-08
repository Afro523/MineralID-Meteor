//React, React Router
import React, { Component, PropTypes } from 'react';

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

export default class ListPage2 extends Component {


	constructor(props) {
		super(props);
		this.state = {
			currChar: '-',
			mohMin: 0,
			mohMax: 10,
			currCat:'None'
		};
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

	getChildContext() {
		return { muiTheme: getMuiTheme(baseTheme) };
	}
	checkLetter(){

	}

	handleSelect(event){
		console.log('PARENT' +event.target.textContent);
		//this.setState({ event.target.textContent});
	}

	renderMinerals () {
		var minData = MinData.sort((a,b)=>{
			var nameA = a.minName.toUpperCase();
			var nameB = b.minName.toUpperCase();
			if (nameA < nameB) {
				return -1;
			}
			if (nameA > nameB) {
				return 1;
			}
		});

		//Apply category filter through this.state.currCat
		if(this.state.currCat != 'None'){
			minData = this.applyCatFilter(minData);
		}

		//Filter by Hardness
		if(parseInt(this.state.mohMin) > 0 || parseInt(this.state.mohMax) < 10 ){
			minData = this.applyMohFilter(minData);
		}

		return  minData.map((mineral, index)  => (

			<MinList key={index} mineral={mineral}/>
		));
	}

	render() {
		return (
				<div className="container-fluid">
					<MinBanner/>
						<Filter
							currChar={this.state.currChar}
							mohMin={this.state.mohMin}
							mohMax={this.state.mohMax}
							currCat={this.state.currCat}
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

ListPage2.childContextTypes = {
	muiTheme: React.PropTypes.object.isRequired,
};
