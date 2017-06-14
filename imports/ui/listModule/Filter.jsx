import React from 'react';
import PropTypes from 'prop-types';

import RaisedButton from 'material-ui/RaisedButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import FilterList from 'material-ui/svg-icons/content/filter-list';

import Clear from 'material-ui/svg-icons/content/clear';

export default class Filter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
		};
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
			'Blue', 'Green', 'Yellow', 'Red', 'Purple', 'Gray', 'Brown', 'Pink', 'Orange'];
		const colorMenuItem = [];
		colorList = colorList.sort();

		for (let i = 0; i< colorList.length; i++){
			colorMenuItem.push(<MenuItem value={colorList[i]} key={i} primaryText={colorList[i]}/>);
		}

		//Throws a 'None' option to the top
		colorMenuItem.unshift(<MenuItem value={'None'} key={colorMenuItem.length + 1} primaryText={'None'}/>);



		//Creates Mohs Scale list for drop down
		const mohsScale = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
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
					containerStyle={{textAlign:'center'}}
					>
					<h4 style={{textAlign:'center'}}>Sort By:</h4>
					<Divider />

					<MenuItem>
						Mineral Color
					</MenuItem>
					<DropDownMenu
						maxHeight={300}
						value={this.props.currColor}
						onChange={(event,index, value) => this.props.handleColor(value)}
						>
							{colorMenuItem}
					</DropDownMenu>
					<Divider />

					<MenuItem>
						<p style={{margin:'0px', lineHeight:'30px'}}>
							Moh's Scale of Hardness: <br/> Low - High
						</p>

					</MenuItem>
					<DropDownMenu
						maxHeight={300}
						value={this.props.mohMin}
						onChange={this.props.handleMohMin}
						>
							{minMenuItem}
					</DropDownMenu>
					<DropDownMenu
						maxHeight={300}
						value={this.props.mohMax}
						onChange={this.props.handleMohMax}
						>
							{minMenuItem}
					</DropDownMenu>
					<Divider />

					<MenuItem>
						Mineral Category
					</MenuItem>
					<DropDownMenu
						maxHeight={300}
						value={this.props.currCat}
						onChange={this.props.handleCat}
						>
							{catMenuItem}
					</DropDownMenu>
					<Divider />

					<MenuItem>
					Mineral Luster
					</MenuItem>
					<DropDownMenu
						maxHeight={300}
						value={this.props.currLust}
						onChange={this.props.handleLust}
						>
							{lustMenuItem}
					</DropDownMenu>
					<Divider />
					<div className='container'>
						<RaisedButton
							style={{display:'inline', paddingBottom:'10px'}}
							label="Close"
							labelPosition="before"
							icon={<Clear />}
							onTouchTap={this.cancelFilter.bind(this)}

						/>
					</div>
        </Drawer>
      </div>
		);
	}
}

Filter.defaultProps ={
	currCat: 'None',
	currChar: '-',
	currLust:'None',
	mohMin: 0,
	mohMax: 10,
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
	mohMin: PropTypes.number.isRequired,
	mohMax: PropTypes.number.isRequired,
};
