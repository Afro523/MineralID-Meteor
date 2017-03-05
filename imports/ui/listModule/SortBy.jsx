import React from 'react';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

export default class SortBy extends React.Component {


	handleOpen(){
		this.setState({open: true});
	}

	handleClose(){
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
				<div>
					<nav className="nav-wrapper">
						<a className="brand-logo">Filters</a>
						<ul className="right">
							<li>
								Letter
							</li>
							<li>
							<DropDownMenu
								label={'Letter'}
								maxHeight={300}
								value={'A'}
								onChange={this.handleChange}
								className="dropdown-button"
								>
									{menItem}
							</DropDownMenu>
						</li>
						<li>
							{'Hardness: Min'}
						</li>
						<li>
							<DropDownMenu
								maxHeight={300}
								value={'0'}
								onChange={this.handleChange}
								>
									{minMenuItem}
							</DropDownMenu>
						</li>
						<li>{'-'}</li>
						<li>
							Max
						</li>
						<li>
							<DropDownMenu
								maxHeight={300}
								value={'8'}
								onChange={this.handleChange}
								>
										{minMenuItem}
							</DropDownMenu>
						</li>
						</ul>
					</nav>
				</div>

			</div>
		);
	}
}
