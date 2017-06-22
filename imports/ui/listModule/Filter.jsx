import React from 'react';
import PropTypes from 'prop-types';

import RaisedButton from 'material-ui/RaisedButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';

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
			colorMenuItem.push(<MenuItem value={colorList[i]} key={i} primaryText={colorList[i]}/>);
		}

		//Throws a 'None' option to the top
		colorMenuItem.unshift(<MenuItem value={'None'} key={colorMenuItem.length + 1} primaryText={'None'}/>);

		//Creates Mohs Scale list for drop down
		const mohsScale = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
		const minMenuItem = [];
		for (let i = 0; i< mohsScale.length; i++){
			minMenuItem.push(<MenuItem value={mohsScale[i]} key={i} primaryText={mohsScale[i]}/>);
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
			catMenuItem.push(<MenuItem value={catList[i]} key={i} primaryText={catList[i]}/>);
		}

		//Throws a 'None' option to the top
		catMenuItem.unshift(<MenuItem value={'None'} key={catMenuItem.length + 1} primaryText={'None'}/>);

		//Creates Luster list for drop down
		var lustList = [
			'Adamantine', 'Vitreous', 'Waxy','Pearly','Silky','Earthy/Dull'];
		const lustMenuItem = [];
		lustList = lustList.sort();

		for (let i = 0; i< lustList.length; i++){
			lustMenuItem.push(<MenuItem value={lustList[i]} key={i} primaryText={lustList[i]}/>);
		}

		//Throws a 'None' option to the top
		lustMenuItem.unshift(<MenuItem value={'None'} key={lustMenuItem.length + 1} primaryText={'None'}/>);

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
					docked={false}
					modal={false}
					open={this.state.open}
					disableSwipeToOpen = {true}
					containerStyle={{textAlign:'center', backgroundColor:'white'}}
					>
						<div style={{backgroundColor:deepPurple900, height:'64px', display:'flex', alignItems:'center', justifyContent:'center'}}>
							<h4 style={{textAlign:'center', color:'white', margin:'0'}}>Sort By:</h4>
						</div>

					<Divider style={{backgroundColor:grey900}} />
						<MenuItem>
							Mineral Color
						</MenuItem>
						<DropDownMenu
							maxHeight={300}
							value={this.props.currColor}
							underlineStyle={{borderColor:deepPurple900}}
							iconStyle={{paddingRight:'0px', paddingLeft:'0px', fill:deepPurple900}}
							onChange={(event,index, value) => this.props.handleColor(value)}
							selectedMenuItemStyle={{color:purpleA400}}
							>
								{colorMenuItem}
						</DropDownMenu>

					<Divider style={{backgroundColor:grey900}} />
					<MenuItem>
						<p style={{margin:'0px', lineHeight:'30px'}}>
							Moh's Scale of Hardness: <br/> Low - High
						</p>
					</MenuItem>
					<DropDownMenu
						maxHeight={300}
						value={this.props.mohMin}
						underlineStyle={{borderColor:deepPurple900}}
						iconStyle={{paddingRight:'0px', paddingLeft:'0px', fill:deepPurple900}}
						onChange={this.props.handleMohMin}
						selectedMenuItemStyle={{color:purpleA400}}
						>
							{minMenuItem}
					</DropDownMenu>
					<DropDownMenu
						maxHeight={300}
						value={this.props.mohMax}
						underlineStyle={{borderColor:deepPurple900}}
						iconStyle={{paddingRight:'0px', paddingLeft:'0px', fill:deepPurple900}}
						onChange={this.props.handleMohMax}
						selectedMenuItemStyle={{color:purpleA400}}
						>
							{minMenuItem}
					</DropDownMenu>
					<Divider style={{backgroundColor:grey900}} />

					<MenuItem>
						Mineral Category
					</MenuItem>
					<DropDownMenu
						maxHeight={300}
						value={this.props.currCat}
						underlineStyle={{borderColor:deepPurple900}}
						iconStyle={{paddingRight:'0px', paddingLeft:'0px', fill:deepPurple900}}
						onChange={this.props.handleCat}
						selectedMenuItemStyle={{color:purpleA400}}
						>
							{catMenuItem}
					</DropDownMenu>
					<Divider style={{backgroundColor:grey900}} />

					<MenuItem>
					Mineral Luster
					</MenuItem>
					<DropDownMenu
						maxHeight={300}
						value={this.props.currLust}
						underlineStyle={{borderColor:deepPurple900}}
						iconStyle={{paddingRight:'0px', paddingLeft:'0px', fill:deepPurple900}}
						onChange={this.props.handleLust}
						selectedMenuItemStyle={{color:purpleA400}}
						>
							{lustMenuItem}
					</DropDownMenu>
					<Divider style={{backgroundColor:grey900}} />

						<RaisedButton
							style={{ width:'90%', position:'absolute', bottom:10, left:'5%'}}
							labelColor={deepPurple900}
							label="Close"
							primary={true}
							labelPosition="before"
							icon={<Clear />}
							onTouchTap={this.cancelFilter.bind(this)}
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
