import React from 'react';
import PropTypes from 'prop-types';

import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import SwipeableTabs from 'react-swipeable-tabs';

import myBaseTheme from '../../../client/myBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import FilterList from 'material-ui/svg-icons/content/filter-list';
import {deepPurple200, deepPurple300, deepPurple900, grey900, grey300, indigo100, indigo200, purpleA400} from 'material-ui/styles/colors';
import Clear from 'material-ui/svg-icons/content/clear';

export default class Filter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
		};
	}

	getChildContext() {
		return { muiTheme: getMuiTheme(myBaseTheme) };
	}

	cancelFilter(){
		this.setState({open: false});
	}

	handleToggle() {
		this.setState({open: !this.state.open});
	}

	render() {
/*
		var colors = allMin.map((item) => {
			return item.color;
		});
		var strings = colors.map((item) => {
			return item.split(',');
		});
		var stringConcat;
		for (var i = 0; i < strings.length; i++) {
			stringConcat += ', ' + strings[i];
		}
		var arr = stringConcat.split(',');
		var finalArr = [''];
		for (var i = 0; i < arr.length; i++) {
			var tempString = arr[i];
				if(finalArr.indexOf(tempString) == -1){
						finalArr.push(arr[i]);
			}
		}
		var last = '';
		for(var i = 0; i < finalArr.length; i++){
			last += ',' + finalArr[i];
		}
		console.log(last); */
		//Creates colors list for drop down
		var colorList = [
			'Black', 'Beige', 'Blue', 'Bronze',
			'Green', 'Yellow', 'Red', 'Purple',
			'Gray', 'Brown', 'Pink', 'Orange'];
		const colorMenuItem = [];
		colorList = colorList.sort();

		for (let i = 0; i< colorList.length; i++){
			colorMenuItem.push(<div value={colorList[i]} key={i} label={colorList[i]}>{colorList[i]}</div>);
		}

		//Throws a 'None' option to the top
		colorMenuItem.unshift(<div value={'None'} key={colorMenuItem.length + 1} label={'None'}>None</div>);

		//Creates Mohs Scale list for drop down
		const mohsScale = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
		const minMenuItem = [];
		for (let i = 0; i< mohsScale.length; i++){
			minMenuItem.push(<div value={mohsScale[i]} key={i} label={mohsScale[i]}>{mohsScale[i]}</div>);
		}
		//Creates Category list for drop down
		var catList = [
			'Nesosilicates', 'Oxides','Inosilicates','Sorosilicates','Phosphates',
			'Arsenites','Halides','Arsenates','Sulfates','Silicates','Sulfides',
			'Inoborates','Phyllosilicates','Tectosilicates','Zeolites','Cyclosilicates','Antimonides',
			'Sulfosalts','Molybdates','Element','Borates','Tellurates','Tellurites','Vanadates',
			'Tektoborates','Arsenides','Nesoborates','Carbonates','Tungstates','Selenates','Tellurides',
			'Selenides','Pyroxenes'];
		const catMenuItem = [];
		catList = catList.sort();

		for (let i = 0; i< catList.length; i++){
			catMenuItem.push(<div label={catList[i]} key={i}>{catList[i]}</div>);
		}

		//Throws a 'None' option to the top
		catMenuItem.unshift(<div value={'None'} key={catMenuItem.length + 1} label={'None'}>None</div>);

		//Creates Luster list for drop down
		var lustList = [
			'Adamantine', 'Metallic', 'Vitreous', 'Waxy','Pearly','Silky','Earthy/Dull'];
		const lustMenuItem = [];
		lustList = lustList.sort();

		for (let i = 0; i< lustList.length; i++){
			lustMenuItem.push(<div label={lustList[i]} key={i}> {lustList[i]} </div>);
		}

		//Throws a 'None' option to the top
		lustMenuItem.unshift(<div label={'None'} key={lustMenuItem.length + 1} >None </div>);

		return (
			<div>
				<FloatingActionButton
					style={{
						margin: 0,
						top: 'auto',
						right: 20,
						bottom: 20,
						left: 'auto',
						position: 'fixed',
						zIndex:2
					}}
					onTouchTap={this.handleToggle.bind(this)}
				>
					<FilterList />
				</FloatingActionButton>
        		<Drawer
					docked={true}
					modal={false}
					open={this.state.open}
					disableSwipeToOpen = {true}
					containerStyle={{textAlign:'center', backgroundColor:'white', height:'100%'}}
					>
						<div style={{backgroundColor:deepPurple900, height:'64px', display:'flex', alignItems:'center', justifyContent:'center'}}>
							<h4 style={{textAlign:'center', color:'white', margin:'0'}}>Filter By:</h4>
						</div>

					<Divider style={{backgroundColor:grey900, marginBottom:'10px'}} />
					<div>Mineral Color</div>
					<SwipeableTabs
						noFirstLeftPadding={false}
        				noLastRightPadding={false}
        				fitItems={false}
        				borderWidthRatio={1}
        				onItemClick={(item, index) => this.props.handleColor(item.element.props.label)}
        				items={colorMenuItem}
        				borderThickness={2}
        				borderColor={deepPurple900}
        				activeStyle={{
        				  color: deepPurple900
        				}}
						/>
					<Divider style={{marginTop:'1px', marginBottom:'10px'}} />
					<div>
						<p style={{margin:'0px', lineHeight:'30px'}}>
							Moh's Scale of Hardness: 
						</p>
					</div>
					<p>Low</p>
					<SwipeableTabs
					style= {{width:'50%'}}
						noFirstLeftPadding={false}
        				noLastRightPadding={false}
        				fitItems={false}
        				borderWidthRatio={1}
        				onItemClick={(item, index) => this.props.handleMohMin(item.element.props.label)}
        				items={minMenuItem}
        				borderThickness={2}
        				borderColor={deepPurple900}
        				activeStyle={{
        				  color: deepPurple900
        				}}
						/>
						<p>High</p>
					<SwipeableTabs
						noFirstLeftPadding={false}
        				noLastRightPadding={false}
        				fitItems={false}
        				borderWidthRatio={1}
        				activeItemIndex={10}
        				onItemClick={(item, index) => this.props.handleMohMax(item.element.props.label)}
        				items={minMenuItem}
        				borderThickness={2}
        				borderColor={deepPurple900}
        				activeStyle={{
        				  color: deepPurple900
        				}}
						/>
					<Divider style={{marginTop:'1px', marginBottom:'10px'}} />
					<div>Mineral Category</div>
					<SwipeableTabs
						noFirstLeftPadding={false}
        				noLastRightPadding={false}
        				fitItems={false}
        				borderWidthRatio={1}
        				onItemClick={(item, index) => this.props.handleCat(item.element.props.label)}
        				items={catMenuItem}
        				borderThickness={2}
        				borderColor={deepPurple900}
        				activeStyle={{
        				  color: deepPurple900
        				}}
						/>
					<Divider style={{marginTop:'1px', marginBottom:'10px'}} />
					<div>Mineral Luster</div>
					<SwipeableTabs
						noFirstLeftPadding={false}
        				noLastRightPadding={false}
        				fitItems={false}
        				borderWidthRatio={1}
        				onItemClick={(item, index) => this.props.handleLust(item.element.props.label)}
        				items={lustMenuItem}
        				borderThickness={2}
        				borderColor={deepPurple900}
        				activeStyle={{
        				  color: deepPurple900
        				}}
						/>
					<Divider style={{marginTop:'1px', marginBottom:'10px'}} />
					<RaisedButton
						style={{ width:'90%', marginTop:'10px'}}
						labelColor={deepPurple900}
						label="Close"
						primary={true}
						labelPosition="before"
						icon={<Clear />}
						onClick={this.cancelFilter.bind(this)}
						/>
				</Drawer>
      		</div>
		);
	}
}
Filter.childContextTypes = {
	muiTheme: PropTypes.object.isRequired,
};

Filter.defaultProps ={
	currCat: 'None',
	currChar: '-',
	currLust:'None',
	mohMin: '0',
	mohMax: '10',
};

Filter.propTypes = {
	handleCat: PropTypes.func.isRequired,
	handleChar: PropTypes.func.isRequired,
	handleMohMin: PropTypes.func.isRequired,
	handleMohMax: PropTypes.func.isRequired,
	handleLust: PropTypes.func.isRequired,
	currCat: PropTypes.string.isRequired,
	currLust: PropTypes.string.isRequired,
	currChar: PropTypes.string.isRequired,
	mohMin: PropTypes.string.isRequired,
	mohMax: PropTypes.string.isRequired,
};
