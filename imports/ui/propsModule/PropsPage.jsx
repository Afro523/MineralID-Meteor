//React
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
import MinBanner from '../MinBanner';

//MUI
import myBaseTheme from 'material-ui/styles/baseThemes/myBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';

export default class PropsPage extends Component {
	constructor(props) {
		super(props);
	}

	getChildContext() {
		return { muiTheme: getMuiTheme(myBaseTheme) };
	}

	render() {
		return (
			<div>
				<MinBanner/>
				<div className='container' style={{marginBottom:'10px'}}>
				<h4 style={{paddingTop:'30px', textAlign:'center'}}>Physical Properties</h4>
				<Divider/>
				<p>
					These are a list of the main physial properties which minerals are commonly defined by.
				</p>
				<div style={{display:'flex', flexDirection:'column'}}>
					<FlatButton style={{marginTop:'15px'}}>
						<Link
							style={{width:'65%'}}
							to="/props/cleavage"
							className="waves-effect waves-light btn"
						>
							<div>Cleavage</div>
						</Link>
					</FlatButton>
					<FlatButton style={{marginTop:'15px'}}>
						<Link
							style={{width:'65%'}}
							to="/props/crystalhabit"
							className="waves-effect waves-light btn"
						>
							<div>Crystal Habit</div>
						</Link>
					</FlatButton>
					<FlatButton style={{marginTop:'15px'}}>
						<Link
							style={{width:'65%'}}
							to="/props/crystalsystem"
							className="waves-effect waves-light btn"
						>
							<div>Crystal System</div>
						</Link>
					</FlatButton>
					<FlatButton style={{marginTop:'15px'}}>
						<Link
							style={{width:'65%'}}
							to="/props/fluorescence"
							className="waves-effect waves-light btn"
						>
							<div>Fluorescence</div>
						</Link>
					</FlatButton>
					<FlatButton style={{marginTop:'15px'}}>
						<Link
							style={{width:'65%'}}
							to="/props/fracture"
							className="waves-effect waves-light btn"
						>
							<div>Fracture</div>
						</Link>
					</FlatButton>
					<FlatButton style={{marginTop:'15px'}}>
						<Link
							style={{width:'65%'}}
							to="/props/hardness"
							className="waves-effect waves-light btn"
						>
							<div>Hardness</div>
						</Link>
					</FlatButton>
					<FlatButton style={{marginTop:'15px'}}>
						<Link
							style={{width:'65%'}}
							to="/props/luster"
							className="waves-effect waves-light btn"
						>
							<div>Luster</div>
						</Link>
					</FlatButton>
					<FlatButton style={{marginTop:'15px'}}>
						<Link
							style={{width:'65%'}}
							to="/props/streak"
							className="waves-effect waves-light btn"
						>
							<div>Streak</div>
						</Link>
					</FlatButton>
				</div>
				</div>
			</div>
		);
	}
}

PropsPage.propTypes ={

};

PropsPage.childContextTypes = {
	muiTheme: PropTypes.object.isRequired,
};
