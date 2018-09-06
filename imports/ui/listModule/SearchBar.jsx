//React
import React, {Component} from 'react';
import PropTypes from 'prop-types';
//Material UI
import TextField from '@material-ui/core/TextField';
// import FontIcon from '@material-ui/core/FontIcon';
// import {indigo200} from '@material-ui/core/styles/colors';
import indigo from '@material-ui/core/colors/indigo';

const indigo200 = indigo[200];

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
						backgroundColor:indigo200}}>
					<i style={{fontSize:'32px'}} className="material-icons">search</i>
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
