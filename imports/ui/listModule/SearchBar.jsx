//React
import React, {Component} from 'react';
import PropTypes from 'prop-types';
//Material UI
import TextField from 'material-ui/TextField';
import FontIcon from 'material-ui/FontIcon';
import {deepPurple200} from 'material-ui/styles/colors';

export default class SearchBar extends Component {
	constructor(props) {
		super(props);
		//Setting up state for dialog
		this.state = {
			open:false
		};
	}

	render() {
		return (
			<div style={{height:'48px', position:'relative'}}>
				<div
					style={{
						border:'1px grey solid',
						borderRadius:'0px 0px 10px 10px',
						width:'100%',
						position:'fixed',
						display:'flex',
						alignItems:'center',
						zIndex:5,
						backgroundColor:deepPurple200}}>
					<FontIcon style={{fontSize:'32px'}} className="material-icons">search</FontIcon>
					<TextField
						hintText="Search"
						fullWidth={true}
						style={{marginBottom:'0px'}}
						onChange={ (event, newValue) => this.props.handleSearch(newValue)}
					/>
				</div>
			</div>
		);
	}
}

SearchBar.propTypes = {
	handleSearch: PropTypes.func.isRequired,
};
