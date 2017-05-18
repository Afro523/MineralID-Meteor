//React
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Help from 'material-ui/svg-icons/action/help';

const btnStyle={

	marginTop:'30px'
};

export default class Question extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentQuestion: 'luster',
		};
	}

	renderQuestion(answer){

		switch (answer) {

		case 'm':
			return(
					<div>
						<h3 style={{textAlign:'center'}}>What is the hardness of the mineral?</h3>
						<div style={{display:'flex', flexWrap:'wrap', alignContent:'center'}}>
							<RaisedButton
								labelPosition={'before'}
								label={'Hard'}
								children={'Hardness > 5.5'}
								fullWidth={true}
								style={btnStyle}
								onClick={()=>this.setState({current:'mhard'})}
							/>

							<RaisedButton
								fullWidth={true}
								style={btnStyle}
								onClick={()=>this.setState({current:'msoft'})}
								>
									<h4>Soft</h4>
									<h5>Hardness {'<'} 5.5 </h5>
							</RaisedButton>
						</div>
					</div>
			);

		case 'nm':
			return(
				<div>
					<h3 style={{textAlign:'center'}}>What is the streak of the mineral?</h3>
					<div style={{display:'flex', flexWrap:'wrap', alignContent:'center'}}>
						<RaisedButton
							style={btnStyle}
							onClick={()=>this.setState({current:'mhard'})}
							>
								<h4>Hard</h4>
								<h5>Hardness {'>'} 5.5 </h5>
						</RaisedButton>

						<RaisedButton
							style={btnStyle}
							onClick={()=>this.setState({current:'msoft'})}
							>
								<h4>Soft</h4>
								<h5>Hardness {'<'} 5.5 </h5>
						</RaisedButton>
					</div>
				</div>
			);

		case 'mhard':
			return(
			<div>
				<h3 style={{textAlign:'center'}}>What is the color of the mineral?</h3>
				<div style={{display:'flex', flexWrap:'wrap', alignContent:'center'}}>
					<RaisedButton
						style={btnStyle}
						onClick={()=>this.setState({current:'mharddg'})}
						>
							<h4>Grey - Dark Grey</h4>
					</RaisedButton>

					<RaisedButton
						style={btnStyle}
						onClick={()=>this.setState({current:'msoft'})}
						>
							<h4>Other</h4>
					</RaisedButton>
				</div>
			</div>
			);

		case 'mharddg':
			return(
				<div>
					<h3 style={{textAlign:'center'}}>Other Distinctive Factors</h3>
					<div style={{display:'flex', flexWrap:'wrap', alignContent:'center'}}>
						<RaisedButton
							style={btnStyle}
							onClick={()=>this.setState({current:'mhard'})}
						>
							<h4>Magnetic</h4>
							<h5>Strongly attracted to magnets</h5>
						</RaisedButton>

						<RaisedButton
							style={btnStyle}
							onClick={()=>this.setState({current:'msoft'})}
						>
							<h4>Cubic Habit</h4>
							<h5>Shows cubic crystals</h5>
						</RaisedButton>
					</div>
				</div>
			);

		case 'msoft':
			break;

		case 'minde':
			break;

		default:
			return(
					<div>
						<h3 style={{textAlign:'center'}}>What is the luster of the mineral?</h3>
						<div style={{display:'flex', flexWrap:'wrap', justifyContent:'space-around', alignContent:'center'}}>
							<RaisedButton
								label={'Metallic'}
								fullWidth={true}
								style={btnStyle}
								onClick={()=>this.setState({current:'m'})}
							/>
							<RaisedButton
								label={'Non-Metallic'}
								fullWidth={true}
								style={btnStyle}
								onClick={()=>this.setState({current:'nm'})}
							/>
						</div>
					</div>
			);
		}
	}

	render() {
		return (
			<div>
				{this.renderQuestion(this.state.current)}
					<FloatingActionButton
						style={{marginTop:'20px', position:'absolute', bottom:10, right:10}}
						>
						<Help/>
					</FloatingActionButton>
			</div>
		);
	}
}

Question.propTypes ={

};

Question.childContextTypes = {
	muiTheme: PropTypes.object.isRequired,
};
