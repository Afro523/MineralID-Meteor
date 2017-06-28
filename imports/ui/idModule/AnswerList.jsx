//React
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import myBaseTheme from '../../../client/myBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Infinite from 'react-infinite';
import MinItem from '../listModule/MinItem';

import Divider from 'material-ui/Divider';

export default class AnswerList extends Component {
	constructor(props) {
		super(props);
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

	getChildContext() {
		return { muiTheme: getMuiTheme(myBaseTheme) };
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
		let currentColors = [this.props.currColor];
		if(colorAlts[this.props.currColor] !== undefined){
			currentColors = currentColors.concat(colorAlts[this.props.currColor]);
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
			if(data[i].luster == this.props.currLust ){
				tempData.push(data[i]);
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
				if (moh >= parseInt(this.props.mohMin, 10) && moh <= parseInt(this.props.mohMax, 10)){
					tempData.push(data[i]);
				}
			}else if (data[i].hardness.length == 2){
				let mohMin = parseFloat(data[i].hardness[0]);
				let mohMax = parseFloat(data[i].hardness[1]);
				if (mohMin >= parseInt(this.props.mohMin, 10) && mohMax <= parseInt(this.props.mohMax, 10) ){
					tempData.push(data[i]);
				}
			} else{
				console.log('no hardness');
			}
		}
		return tempData;
	}	

	getMinFromDb(){
		
		var minData = allMin;

		//Apply category filter through this.state.currCat
		if(this.props.currColor != undefined){
			minData = this.applyColorFilter(minData);
		}
		console.log(minData);
		//Apply Luster filter through this.state.currCat
		if(this.props.currLust != undefined){
			minData = this.applyLustFilter(minData);
		}

			//Filter by Hardness
		if(parseInt(this.props.mohMin) > 0 || parseInt(this.props.mohMax) < 10 ){
			minData = this.applyMohFilter(minData);
		}
		console.log(minData);
		return minData.sort(this.compare);
	}

	renderMinerals () {
		//react-infinit-scroll
		let minData = this.getMinFromDb();
		
		return minData.map((mineral) => (
			<MinItem key={mineral.minName} mineral={mineral}/>
		));
	}	

	render() {
		return (
			<div>
				<h5 style={{textAlign:'center'}} >Other Matching Minerals</h5>
				<Divider/>
				<Infinite
					containerHeight={500}
					elementHeight={60}
					infiniteLoadBeginEdgeOffset={300}
				>
					{ this.renderMinerals()	}
				</Infinite>
			</div>
		);
	}
}

AnswerList.propTypes ={
	currColor: PropTypes.string,
	currLust: PropTypes.string,
	monMin: PropTypes.string,
	monMax: PropTypes.string,
};

AnswerList.childContextTypes = {
	muiTheme: PropTypes.object.isRequired,
};
