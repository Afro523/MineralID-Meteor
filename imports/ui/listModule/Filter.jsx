import React, { Component, PropTypes } from 'react';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

export default class Filter extends Component {
	render() {
		const abc = [
			'-','A', 'B', 'C', 'D', 'E', 'F', 'G',
			'H', 'I', 'J', 'K', 'L', 'M', 'N',
			'O', 'P', 'Q', 'R', 'S', 'T', 'U',
			'V', 'W', 'X', 'Y', 'Z'
		];
		const menItem = [];
		for (let i = 0; i< abc.length; i++){
			menItem.push(<MenuItem value={abc[i]} key={i} primaryText={abc[i]}/>);
		}
		const mohsScale = ['0','1','2','3','4','5','6','7','8'];
		const minMenuItem = [];
		for (let i = 0; i< mohsScale.length; i++){
			minMenuItem.push(<MenuItem value={mohsScale[i]} key={i} primaryText={mohsScale[i]}/>);
		}
		return (
			<Toolbar>
				<ToolbarTitle text="Filters:"/>
				<ToolbarGroup firstChild={true}>
					Letter:
					<DropDownMenu
						maxHeight={300}
						value={this.props.currChar}
						onChange={this.handleChange}
						>
							{menItem}
						</DropDownMenu>
				</ToolbarGroup>
				<ToolbarGroup>
					Hardness: Min:
					<DropDownMenu
						maxHeight={300}
						value={this.props.mohMin}
						onChange={this.handleChange}
						>
							{minMenuItem}
					</DropDownMenu>
				</ToolbarGroup>
				<ToolbarGroup lastChild={true}>
					Max:
					<DropDownMenu
						maxHeight={300}
						value={this.props.mohMax}
						onChange={this.handleChange}
						>
							{minMenuItem}
					</DropDownMenu>
				</ToolbarGroup>
			</Toolbar>
		);
	}
}

Filter.propTypes = {
	currChar: PropTypes.string,
	mohMin: PropTypes.string,
	mohMax: PropTypes.string,
};
