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

export default class ListPage extends Component {


	constructor(props) {
		super(props);
		this.state = {
			currChar: '-',
			mohMin:'0',
			mohMax:'10',
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
			var tempData=[];
			//Apply category filter through this.state.currCat
			if(this.state.currCat != 'None'){
				for(var i=0; i < minData.length; i++){
					//Matches the categories and pushes the matching objects
					if(minData[i].category == this.state.currCat ){
						tempData.push(minData[i]);
					}
				}
			}

			//Filter by Hardness
			if(parseInt(this.state.mohMin) > 0 || parseInt(this.state.mohMax) < 10 ){
				//Temp Data Exists
				if(tempData.length > 0){
					for(var k=0; tempData.length>k; k++){
						//one hardness value
						if(tempData[k].hardness.length == 1){
							var moh = tempData[k].hardness[0];
							//Remove all minerals where mohMin <= hardness >= mohMax
							if (moh < this.state.mohMin || moh > this.state.mohMax){
								tempData.splice(k, 1);
							}
						}else if (tempData[k].hardness.length == 2){
							var mohMin = tempData[k].hardness[0];
							var mohMax = tempData[k].hardness[1];
							if (mohMin < this.state.mohMin || mohMax > this.state.mohMax){
								tempData.splice(k, 1);
							}
						} else{
							console.log('no hardness');
						}
					}

					//tempData doesnt exist
				}else if(tempData.length == undefined){
					for(var j=0; minData.length>j; j++){
						//one hardness value
						if(minData[j].hardness.length == 1){
							moh = minData[j].hardness[0];
							//Remove all minerals where mohMin <= hardness >= mohMax
							if (moh < this.state.mohMin || moh > this.state.mohMax){
								minData.splice(j, 1);
							}
						}else if (minData[j].hardness.length == 2){
							mohMin = minData[j].hardness[0];
							mohMax = minData[j].hardness[1];
							if (mohMin < this.state.mohMin || mohMax > this.state.mohMax){
								minData.splice(j, 1);
							}
						} else{
							console.log('no hardness');
						}
					}
				}
			}

			if(tempData.length > 0)
				return tempData;
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

ListPage.defaultProps ={
	minerals:[],
};

ListPage.childContextTypes = {
	muiTheme: React.PropTypes.object.isRequired,
};
