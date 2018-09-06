//React
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
import MinBanner from '../MinBanner';
import BottomNav from '../BottomNav';
//MUI
import myBaseTheme from '../../../client/myBaseTheme';
// 'material-ui/core/styles/getMuiTheme
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

export default class PropsPage extends Component {
	constructor(props) {
		super(props);
	}

	getChildContext() {
		return { muiTheme: getMuiTheme(myBaseTheme) };
	}

	renderRouteBtns () {
		let paths = [
			{ name: 'Cleavage', path: 'cleavage'},
			{ name: 'Crystal Habit', path: 'crystalhabit'},
			{ name: 'Crystal System', path: 'crystalsystem'},
			{ name: 'Fluorescence', path: 'fluorescence'},
			{ name: 'Fracture', path: 'fracture'},
			{ name: 'Hardness', path: 'hardness'},
			{ name: 'Luster', path: 'luster'},
			{ name: 'Streak', path: 'streak'}
		]

		return paths.map((pathObj, index) => (
			<Button 
				style={{marginTop:'15px'}}
				key={index}
			>
				<Link
					style={{width:'60vw'}}
					to={`props/${pathObj.path}`}
					className="waves-effect waves-light btn"
				>
					<div>{pathObj.name}</div>
				</Link>
			</Button>
		));	
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
				<div style={{
					textAlign:'center',
					padding: '0 20%',
					paddingBottom: '60px'
					}}>
					{this.renderRouteBtns()}
				</div>
				</div>
				<BottomNav navPos={2}/>
			</div>
		);
	}
}

PropsPage.propTypes ={

};

PropsPage.childContextTypes = {
	muiTheme: PropTypes.object.isRequired,
};
