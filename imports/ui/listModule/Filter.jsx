import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
// import DropDownMenu from '@material-ui/core/DropDownMenu';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';

import SwipeableViews from 'react-swipeable-views';

import myBaseTheme from '../../../client/myBaseTheme';
// 'material-ui/core/styles/getMuiTheme
// import FloatingActionButton from '@material-ui/core/FloatingActionButton';
// import FilterList from '@material-ui/core/icons/content/filter-list';
// import {deepPurple200, deepPurple300, deepPurple900, grey900, grey300, indigo100, indigo200, purpleA400} from '@material-ui/core/styles/colors';
import deepPurple from '@material-ui/core/colors/deepPurple';
import grey from '@material-ui/core/colors/grey';
// import Clear from '@material-ui/core/icons/content/clear';

const lightGrey = grey[900];
const deeperPurper = deepPurple[900];

export default class Filter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
			currLust: 'None',
			currCat: 'None',
			currColor:'None',
			mohMin: '0',
			mohMax: '10',
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
			colorMenuItem.push(<Button primary={true} value={colorList[i]} key={i} label={colorList[i]}/>);
		}

		//Throws a 'None' option to the top
		colorMenuItem.unshift(<Button primary={true} value={'None'} key={colorMenuItem.length + 1} label={'None'}/>);

		//Creates Mohs Scale list for drop down
		const mohsScale = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
		const minMenuItem = [];
		for (let i = 0; i< mohsScale.length; i++){
			minMenuItem.push(<Button primary={true} style={{height:'40px',textAlign:'center', verticalAlign: 'middle', lineHeight:'40px'}} value={mohsScale[i]} key={i} label={mohsScale[i]}/>);
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
			catMenuItem.push(<Button primary={true} label={catList[i]} key={i}/>);
		}

		//Throws a 'None' option to the top
		catMenuItem.unshift(<Button primary={true} value={'None'} key={catMenuItem.length + 1} label={'None'}/>);

		//Creates Luster list for drop down
		var lustList = [
			'Adamantine', 'Metallic', 'Vitreous', 'Waxy','Pearly','Silky','Earthy/Dull'];
		const lustMenuItem = [];
		lustList = lustList.sort();

		for (let i = 0; i< lustList.length; i++){
			lustMenuItem.push(<Button primary={true} label={lustList[i]} key={i}/>);
		}

		//Throws a 'None' option to the top
		lustMenuItem.unshift(<Button primary={true} label={'None'} key={lustMenuItem.length + 1} />);

		return (
			<div>
				<Button
					variant="fab"
					style={{
						margin: 0,
						top: 'auto',
						right: 20,
						bottom: 65,
						left: 'auto',
						position: 'fixed',
						zIndex:2
					}}
					onTouchTap={this.handleToggle.bind(this)}
				>
				<FilterList />
				<i className="material-icons">filter_list</i>
				</Button>
        		<Drawer
					docked={true}
					modal={false}
					open={this.state.open}
					disableSwipeToOpen = {true}
					containerStyle={{textAlign:'center', backgroundColor:'white', height:'100%'}}
					>
						<div style={{backgroundColor:deeperPurper, height:'64px', display:'flex', alignItems:'center', justifyContent:'center'}}>
							<h4 style={{textAlign:'center', color:'white', margin:'0'}}>Filter By:</h4>
						</div>
					<Divider style={{backgroundColor:lightGrey, marginBottom:'10px'}} />
					<div className='flow-text' style={{marginBottom:'5px'}}>Mineral Color</div>
					<SwipeableViews
						onTransitionEnd={() => this.props.handleColor(this.state.currColor)}
						onChangeIndex={(index, indexLatest) => this.setState({currColor:colorMenuItem[index].props.label})}
						>
 						{colorMenuItem}
 					</SwipeableViews>
					<Divider style={{marginTop:'10px', marginBottom:'10px'}} />
					<div className='flow-text' style={{marginBottom:'5px'}}>
						<p style={{margin:'0px', lineHeight:'30px'}}>
							Moh's Scale of Hardness: 
							<br/>
							Low - High
						</p>
					</div>
					
					<div style={{display:'flex', justifyContent:'space-around'}}>
						<SwipeableViews
							onTransitionEnd={() => this.props.handleMohMin(this.state.mohMin)}
							onChangeIndex={(index, indexLatest) => this.setState({mohMin:minMenuItem[index].props.label})}
							axis={'y'}
							animateHeight={true}
							
							threshold={9}
							style={{overflowScroll:'true'}}
							>
 							{minMenuItem}
 						</SwipeableViews>
							
						<SwipeableViews
							index={10}
							onTransitionEnd={() => this.props.handleMohMax(this.state.mohMax)}
							onChangeIndex={(index, indexLatest) => this.setState({mohMax:minMenuItem[index].props.label})}
							axis={'y'}
							animateHeight={true}
							
							threshold={9}
							style={{overflowScroll:'true'}}
							>
 							{minMenuItem}
 						</SwipeableViews>
 					</div>
					<Divider className='flow-text' style={{marginTop:'10px', marginBottom:'10px'}} />
					<div className='flow-text' style={{marginBottom:'5px'}}>Mineral Category</div>
					<SwipeableViews
						onTransitionEnd={() => this.props.handleCat(this.state.currCat)}
						onChangeIndex={(index, indexLatest) => this.setState({currCat:catMenuItem[index].props.label})}
						>
 						{catMenuItem}
 					</SwipeableViews>
					<Divider style={{marginTop:'10px', marginBottom:'10px'}} />
					<div className='flow-text' style={{marginBottom:'5px'}}>Mineral Luster</div>
					<SwipeableViews
						onTransitionEnd={() => this.props.handleLust(this.state.currLust)}
						onChangeIndex={(index, indexLatest) => this.setState({currLust:lustMenuItem[index].props.label})}
						>
 						{lustMenuItem}
 					</SwipeableViews>
					<Divider style={{marginTop:'10px', marginBottom:'10px'}} />
					<Button
						style={{ width:'90%', marginTop:'10px', position:'absolute', bottom:'13px', left:'13px' }}
						labelColor={deeperPurper}
						label="Close"
						primary={true}
						labelPosition="before"
						icon={<i className="material-icons">clear</i>}
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

Filter.propTypes = {
	handleCat: PropTypes.func.isRequired,
	handleChar: PropTypes.func.isRequired,
	handleMohMin: PropTypes.func.isRequired,
	handleMohMax: PropTypes.func.isRequired,
	handleLust: PropTypes.func.isRequired,
};
