//React
import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import MinBanner from '../MinBanner';

//MUI
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';

export default class PropsPage extends Component {
	constructor(props) {
		super(props);
	}

	getChildContext() {
		return { muiTheme: getMuiTheme(baseTheme) };
	}

	render() {
		return (
			<div>
				<MinBanner/>
				<div className='container'>
				<h4 style={{paddingTop:'30px', textAlign:'center'}}>Physical Properties</h4>
				<Divider/>
				<p>
					These are a list of the main physial properties which minerals are defined by.
				</p>
				<div style={{display:'flex', flexDirection:'column'}}>
					<FlatButton style={{marginTop:'15px'}}>
						<Link
							style={{width:'65%'}}
							to="/props/cleavage"
							className="waves-effect waves-light btn light-blue darken-3"
						>
							<div>Cleavage</div>
						</Link>
					</FlatButton>
					<FlatButton style={{marginTop:'15px'}}>
						<Link
							style={{width:'65%'}}
							to="/props/crystalhabit"
							className="waves-effect waves-light btn light-blue darken-3"
						>
							<div>Crystal Habit</div>
						</Link>
					</FlatButton>
					<FlatButton style={{marginTop:'15px'}}>
						<Link
							style={{width:'65%'}}
							to="/props/crystalsystem"
							className="waves-effect waves-light btn light-blue darken-3"
						>
							<div>Crystal System</div>
						</Link>
					</FlatButton>
					<FlatButton style={{marginTop:'15px'}}>
						<Link
							style={{width:'65%'}}
							to="/props/fluorescence"
							className="waves-effect waves-light btn light-blue darken-3"
						>
							<div>Fluorescence</div>
						</Link>
					</FlatButton>
					<FlatButton style={{marginTop:'15px'}}>
						<Link
							style={{width:'65%'}}
							to="/props/fracture"
							className="waves-effect waves-light btn light-blue darken-3"
						>
							<div>Fracture</div>
						</Link>
					</FlatButton>
					<FlatButton style={{marginTop:'15px'}}>
						<Link
							style={{width:'65%'}}
							to="/props/hardness"
							className="waves-effect waves-light btn light-blue darken-3"
						>
							<div>Hardness</div>
						</Link>
					</FlatButton>
					<FlatButton style={{marginTop:'15px'}}>
						<Link
							style={{width:'65%'}}
							to="/props/luster"
							className="waves-effect waves-light btn light-blue darken-3"
						>
							<div>Luster</div>
						</Link>
					</FlatButton>
					<FlatButton style={{marginTop:'15px'}}>
						<Link
							style={{width:'65%'}}
							to="/props/streak"
							className="waves-effect waves-light btn light-blue darken-3"
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
	muiTheme: React.PropTypes.object.isRequired,
};
