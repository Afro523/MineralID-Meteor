//React
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link, browserHistory} from 'react-router';
import PropTypes from 'prop-types';
import Icon from '@material-ui/core/Icon';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Paper from '@material-ui/core/Paper';
// import IconLocationOn from '@material-ui/core/icons/communication/location_on';

import myBaseTheme from '../../client/myBaseTheme';
// 'material-ui/core/styles/getMuiTheme


const recentsIcon = <Icon className="material-icons">restore</Icon>;
const favoritesIcon = <Icon className="material-icons">favorite</Icon>;
const nearbyIcon = <Icon className="material-icons">location_on</Icon>;

export default class BottomNav extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedIndex: this.props.navPos,
		};
	}
	
	select = (index, btn) => {
		this.setState({selectedIndex: index});
		
		console.log(index)
		console.log(btn)

		browserHistory.push(btn.path)

	}

	// getChildContext() {
	// 	return { muiTheme: getMuiTheme(myBaseTheme) };
	// }

	renderNavItems(){
		let btnArr = [
			{label:'Identify', icon: recentsIcon, path:"/id"},
			{label:'Database', icon: favoritesIcon, path:"/list"},
			{label:'Learning', icon: nearbyIcon, path:"/props"}
		];

			return btnArr.map((btn, index) => (
				
				<BottomNavigationAction
					key={"navBtn"+index}
          			style={{
          				width:'33%',
          				display:'block',
						textAlign: 'center',
          			}}
            		label={btn.label}
            		icon={btn.icon}
            		onClick={() => this.select(index, btn)}
        		>
					{/* <Link to={btn.path} key={"nav"+index}/> */}
				</BottomNavigationAction>
			));	
	};

	render() {
    	return (
      		<Paper
      			style={{
					bottom:'0',
					position:'fixed',
					width:'100%',
					zIndex:'1'
				}}
      		>
        	<BottomNavigation
        		value={this.state.selectedIndex}
				// onChange={this.select(value)}
				style={{display:'flex'}}
				showLabels
        	>
				{this.renderNavItems()}
        	</BottomNavigation>
      		</Paper>
    	);
  	}
}

BottomNav.propTypes = {
	navPos: PropTypes.number.isRequired,
};

