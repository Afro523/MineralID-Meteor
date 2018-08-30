//React
import React, {Component} from 'react';
import PropTypes from 'prop-types';

//MUi
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Help from 'material-ui/svg-icons/action/help';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import myBaseTheme from '../../../client/myBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {grey500} from 'material-ui/styles/colors';

import FullScreenDialog from 'material-ui-fullscreen-dialog';

export default class WhatIsBtn extends Component {
	constructor(props) {
		super(props);
		this.state ={
			open:false
		};
	}

	getChildContext() {
		return { muiTheme: getMuiTheme(myBaseTheme) };
	}

	handleOpen() {
		this.setState({open: true});
	}

	handleClose() {
		this.setState({open: false});
	}

	renderSummary(currentQuestion){
		switch (currentQuestion) {

		case 'luster':
			return(
				<p>
					Luster  is the way light interacts with the surface of a crystal, rock, or mineral. The word traces its origins back to the latin lux, meaning "light", and generally implies radiance, gloss, or brilliance.
					<br/>
					<br/>
					A range of terms are used to describe luster, such as earthy, metallic, greasy, and silky. Similarly, the term vitreous (derived from the Latin for glass, vitrum) refers to a glassy luster. A list of these terms is given below.
					<br/>
					<br/>
					Luster varies over a wide continuum, and so there are no rigid boundaries between the different types of luster.
				</p>
			);

		case 'hardness':
			return(
				<p>
					Hardness / The Mohs scale is based on the ability of one natural sample
					of mineral to scratch another mineral visibly.  It is a 1-10 system with Diamond
					being the hardest mineral at 10 and Talc being the softest at 1.
				</p>
			);
		case 'color':
			return(
				<p>
					Observe the mineral in question and select the color that it coresponds most closely with.  Sometimes color can be very
					ineffective at helping to determine a mineral because a particular species such as quartz can come in almost every color in the rainbow.
				</p>
			);
		case 'cleavage':
			return(
				<div>
					<h5>Definition:</h5>
					The tendency of a mineral to break along flat planar surfaces as determined by the structure of its crystal lattice. These two-dimensional surfaces are known as cleavage planes and are caused by the alignment of weaker bonds between atoms in the crystal lattice. Cleavage planes are distinguished from fracture by being smooth and often having reflective surfaces.
					<br/>
					<h5>Usage:</h5>					
						Observe the mineral, minerals that have "perfect" cleavage almost always break in a preferred direction. Minerals that have "good" cleavage will sometimes break in a particular direction, and other times, they may not.
				</div>
			);
		default:
		console.log('error in WhatIsBtn(switch)')

		}
	}

	render() {
		const actions = [
			<FlatButton
        label="Close"
        primary={true}
        onTouchTap={this.handleClose.bind(this)}
      />
		];

		return (
			<div>
				<FloatingActionButton
					style={{marginTop:'20px', position:'fixed', bottom:65, right:20, zIndex:1000}}
					onClick={this.handleOpen.bind(this)}
					>
					<Help/>
				</FloatingActionButton>
				<FullScreenDialog
					containerStyle={{ margin:'15px'}}
          title={'What is '+this.props.currentQuestion+'?'}
          actions={actions}
          open={this.state.open}
					autoScrollBodyContent={true}
					onRequestClose={this.handleClose.bind(this)}
        >
          {this.renderSummary(this.props.currentQuestion)}
        </FullScreenDialog>
			</div>
		);
	}
}

WhatIsBtn.propTypes ={
	currentQuestion: PropTypes.string,
};

WhatIsBtn.childContextTypes = {
	muiTheme: PropTypes.object.isRequired,
};
