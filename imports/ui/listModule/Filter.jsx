import React from 'react';

import RaisedButton from 'material-ui/RaisedButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';

import Clear from 'material-ui/svg-icons/content/clear';
import Send from 'material-ui/svg-icons/content/send';

export default class Filter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
			currChar:'',
			currCat:'',
			mohMin:'0',
			mohMax:'8'
		};
	}
	cancelFilter(){
		this.setState({open: false});
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
	handleSelect(event){
		console.log(event.target.textContent);
		return event.target.textContent;
	}

	handleToggle() {
		this.setState({open: !this.state.open});
	}
	submitFilter(){
		this.setState({open: false, currChar: this.state.currChar, currCat: this.state.currCat, mohMin: this.state.mohMin, mohMax:this.state.mohMax});
	}
	render() {
		//Creates Character list for drop down
		const abc = [
			'A', 'B', 'C', 'D', 'E', 'F', 'G',
			'H', 'I', 'J', 'K', 'L', 'M', 'N',
			'O', 'P', 'Q', 'R', 'S', 'T', 'U',
			'V', 'W', 'X', 'Y', 'Z'
		];
		const charMenuItem = [];
		for (let i = 0; i< abc.length; i++){
			charMenuItem.push(<MenuItem value={abc[i]} key={i} primaryText={abc[i]}/>);
		}
		//Creates Mohs Scale list for drop down
		const mohsScale = ['0','1','2','3','4','5','6','7','8'];
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
		return (
			<div>
        <RaisedButton
          label="Toggle Filter Pane"
          onTouchTap={this.handleToggle.bind(this)}
        />
        <Drawer docked={false} open={this.state.open}>
					<h4>Sort By:</h4>
					<Divider />
					<MenuItem>
					Letter
					</MenuItem>

					<DropDownMenu
						id='CharMenu'
						maxHeight={300}
						value={this.state.currChar}
						onChange={this.setChar.bind(this)}
						>
							{charMenuItem}
					</DropDownMenu>
					<Divider />

					<MenuItem>
					Hardness: Low - High
					</MenuItem>
					<DropDownMenu
						maxHeight={300}
						value={this.state.mohMin}
						onChange={this.setMohMin.bind(this)}
						>
							{minMenuItem}
					</DropDownMenu>
					<DropDownMenu
						maxHeight={300}
						value={this.state.mohMax}
						onChange={this.setMohMax.bind(this)}
						>
							{minMenuItem}
					</DropDownMenu>
					<Divider />

					<MenuItem>
					Category
					</MenuItem>
					<DropDownMenu
						maxHeight={300}
						value={this.state.currCat}
						onChange={this.setCat.bind(this)}
						>
							{catMenuItem}
					</DropDownMenu>
					<Divider />

						<RaisedButton
							label="Cancel"
							labelPosition="before"
							icon={<Clear />}
							onTouchTap={this.cancelFilter.bind(this)}

						/>
						<RaisedButton
							label="Submit"
							labelPosition="before"
							icon={<Send />}
							onTouchTap={this.submitFilter.bind(this)}

						/>
        </Drawer>
      </div>
		);
	}
}
