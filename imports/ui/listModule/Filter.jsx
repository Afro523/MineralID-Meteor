import React, {PropTypes} from 'react';

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
		this.state = {open: false};
	}
	cancelFilter(){
		this.setState({open: false});
	}

	handleSelect(event){
		console.log(event.target.textContent);
		this.value = event.target.textContent;
	}

	handleToggle() {
		this.setState({open: !this.state.open});
	}
	submitFilter(){
		this.setState({open: false});
	}
	render() {
		const abc = [
			'-','A', 'B', 'C', 'D', 'E', 'F', 'G',
			'H', 'I', 'J', 'K', 'L', 'M', 'N',
			'O', 'P', 'Q', 'R', 'S', 'T', 'U',
			'V', 'W', 'X', 'Y', 'Z'
		];
		const charMenuItem = [];
		for (let i = 0; i< abc.length; i++){
			charMenuItem.push(<MenuItem value={abc[i]} key={i} primaryText={abc[i]}/>);
		}
		const mohsScale = ['0','1','2','3','4','5','6','7','8'];
		const minMenuItem = [];
		for (let i = 0; i< mohsScale.length; i++){
			minMenuItem.push(<MenuItem value={mohsScale[i]} key={i} primaryText={mohsScale[i]}/>);
		}
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
		return (
			<div>
        <RaisedButton
          label="Toggle Drawer"
          onTouchTap={this.handleToggle.bind(this)}
        />
        <Drawer docked={false} open={this.state.open}>
					<h3>Sort By:</h3>
					<Divider />
					<MenuItem>
					Letter
					</MenuItem>

					<DropDownMenu
						maxHeight={300}
						value={this.props.currChar}
						onChange={this.handleSelect}
						>
							{charMenuItem}
					</DropDownMenu>
					<Divider />
					<MenuItem>
					Hardness: Low - High
					</MenuItem>

					<DropDownMenu
						maxHeight={300}
						value={this.props.mohMin}
						onChange={this.handleSelect}
						>
							{minMenuItem}
					</DropDownMenu>
					<DropDownMenu
						maxHeight={300}
						value={this.props.mohMax}
						onChange={this.handleSelect}
						>
							{minMenuItem}
					</DropDownMenu>
					<Divider />
					<MenuItem>
					Category
					</MenuItem>
					<DropDownMenu
						maxHeight={300}
						value={this.props.currCat}
						onChange={this.handleSelect}
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

Filter.propTypes ={
	currChar: PropTypes.string.isRequired,
	mohMin : PropTypes.string.isRequired,
	mohMax: PropTypes.string.isRequired,
	currCat: PropTypes.string.isRequired
};
