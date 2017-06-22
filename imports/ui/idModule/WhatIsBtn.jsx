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
					This is color
				</p>
			);
		case 'cleavage':
			return(
				<p>
					This is cleavage
				</p>
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
					style={{marginTop:'20px', position:'absolute', bottom:20, right:10}}
					onClick={this.handleOpen.bind(this)}
					>
					<Help/>
				</FloatingActionButton>
				<Dialog
					contentStyle={{width:'98%', maxWidth: 'none'}}
          title={'What is '+this.props.currentQuestion+'?'}
          actions={actions}
          open={this.state.open}
					autoScrollBodyContent={true}
        >
          {this.renderSummary(this.props.currentQuestion)}
        </Dialog>
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
