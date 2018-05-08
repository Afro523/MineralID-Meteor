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
			selectedIndex: 0,
		};
	}

	select = (index) => this.setState({selectedIndex: index});

	getChildContext() {
		return { muiTheme: getMuiTheme(myBaseTheme) };
	}

	render() {
    return (
      <Paper
      	zDepth={1}
      	style={{
			bottom:'0',
			position:'fixed',
			width:'100%'
		}}
      >
        <BottomNavigation
        	selectedIndex={this.state.selectedIndex}
        	style={{display:'flex'}}
        >
          <BottomNavigationItem
          	style={{
          		width:'33%',
          		display:'block'
          	}}
            label="Identify"
            icon={recentsIcon}
            onClick={() => this.select(0)}
            containerElement={<Link to="/id"/>}
          >
        	<Link
				to="/id">
			</Link>
          </BottomNavigationItem>
          <BottomNavigationItem
          	style={{
          		width:'33%',
          		display:'block'
          	}}
            label="Database"
            icon={favoritesIcon}
            onClick={() => this.select(1)}
          />
          <BottomNavigationItem
          	style={{
          		width:'33%',
          		display:'block'
          	}}
            label="Learning"
            icon={nearbyIcon}
            onClick={() => this.select(2)}
          />
        </BottomNavigation>
      </Paper>
    );
  }
}

BottomNav.childContextTypes = {
	muiTheme: PropTypes.object.isRequired,
};
