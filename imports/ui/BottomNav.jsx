//React
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import PropTypes from 'prop-types';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';

import myBaseTheme from '../../client/myBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
const nearbyIcon = <IconLocationOn />;

export default class BottomNav extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedIndex: this.props.navPos,
		};
	}

	select = (index) => this.setState({selectedIndex: index});

	getChildContext() {
		return { muiTheme: getMuiTheme(myBaseTheme) };
	}

	renderNavItems(){
		let btnArr = [
			{label:'Identify', icon: recentsIcon, path:"/id"},
			{label:'Database', icon: favoritesIcon, path:"/list"},
			{label:'Learning', icon: nearbyIcon, path:"/props"}
		];

			return btnArr.map((btn, index) => (
				<BottomNavigationItem
						key={"nav"+index}
          	style={{
          		width:'33%',
          		display:'block',
							textAlign: 'center',
          	}}
            label={btn.label}
            icon={btn.icon}
            onClick={() => this.select(0)}
            containerElement={<Link to={btn.path}/>}
        	/>
			));	
	}

	render() {
    return (
      <Paper
      	zDepth={1}
      	style={{
					bottom:'0',
					position:'fixed',
					width:'100%',
					zIndex:'1'
				}}
      >
        <BottomNavigation
        	selectedIndex={this.state.selectedIndex}
        	style={{display:'flex'}}
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

BottomNav.childContextTypes = {
	muiTheme: PropTypes.object.isRequired,
};
