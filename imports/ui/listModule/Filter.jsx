import React from 'react';
import PropTypes from 'prop-types';

import RaisedButton from 'material-ui/RaisedButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
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
		//Creates Character list for drop down
		const abc = [
			'-', 'A', 'B', 'C', 'D', 'E', 'F', 'G',
			'H', 'I', 'J', 'K', 'L', 'M', 'N',
			'O', 'P', 'Q', 'R', 'S', 'T', 'U',
			'V', 'W', 'X', 'Y', 'Z'
		];
		const charMenuItem = [];
		for (let i = 0; i< abc.length; i++){
			charMenuItem.push(<MenuItem value={abc[i]} key={i} primaryText={abc[i]}/>);
		}
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
        <Drawer docked={false} modal={false} open={this.state.open}>
					<h4>Sort By:</h4>
					<Divider />
					<MenuItem>
					Letter
					</MenuItem>

					<DropDownMenu
						id='CharMenu'
						maxHeight={300}
						value={this.props.currChar}
						onChange={this.props.handleChar}
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
					Category
					</MenuItem>
					<DropDownMenu
						maxHeight={300}
						value={this.props.currCat}
						onChange={this.props.handleCat}
						>
							{catMenuItem}
					</DropDownMenu>
					<Divider />
					<div className='container'>
						<RaisedButton
							style={{display:'inline'}}
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
	mohMin: 0,
	mohMax: 10,
};

Filter.propTypes = {
	handleCat: PropTypes.func.isRequired,
	handleChar: PropTypes.func.isRequired,
	handleMohMin: PropTypes.func.isRequired,
	handleMohMax: PropTypes.func.isRequired,
	currCat: PropTypes.string.isRequired,
	currChar: PropTypes.string.isRequired,
	mohMin: PropTypes.number.isRequired,
	mohMax: PropTypes.number.isRequired,
};
