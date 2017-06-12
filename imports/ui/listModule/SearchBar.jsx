//React
import React, {Component} from 'react';

//Material UI
import TextField from 'material-ui/TextField';
import FontIcon from 'material-ui/FontIcon';

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
						width:'100%',
						position:'fixed',
						display:'flex',
						alignItems:'center',
						zIndex:5,
						backgroundColor:'white'}}>
					<FontIcon style={{fontSize:'32px'}} className="material-icons">search</FontIcon>
					<TextField
						hintText="Search"
					/>
				</div>
			</div>
		);
	}
}
