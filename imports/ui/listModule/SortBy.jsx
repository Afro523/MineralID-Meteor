import React from 'react';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';

export default class SortBy extends React.Component {
	constructor(props) {
		super(props);
		this.state = {open: false};
		this.handleToggle = this.handleToggle.bind(this);
		this.submitFilter = this.submitFilter.bind(this);
	}


	handleToggle(){
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
			<div>
        <RaisedButton
          label="Toggle Drawer"
          onTouchTap={this.handleToggle}
        />
        <Drawer docked={false} open={this.state.open}>
					<h3>Filters:</h3>
					<MenuItem>
					Hardness: Low-High
					</MenuItem>
					<DropDownMenu
						maxHeight={300}
						value={'0'}
						onChange={this.handleChange}
						>
							{minMenuItem}
					</DropDownMenu>
					<DropDownMenu
						maxHeight={300}
						value={'8'}
						onChange={this.handleChange}
						>
							{minMenuItem}
					</DropDownMenu>
					<button className="btn waves-effect waves-light" onClick={this.submitFilter}>Submit
						<i className="material-icons right">send</i>
					</button>
        </Drawer>
      </div>
		);
	}
}
