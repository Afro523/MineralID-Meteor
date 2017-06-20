//React
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';

//My Components
import WhatIsBtn from './WhatIsBtn';

const btnStyle={

	marginTop:'30px'
};

export default class Question extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentQuestion: 'luster',
			current:'default'
		};
	}

	renderQuestion(answer){

		switch (answer) {
			//Metallic
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
								onClick={()=>this.setState({current:'mhard', currentQuestion:'color'})}
							/>

							<RaisedButton
								labelPosition={'before'}
								label={'Soft'}
								children={'Hardness < 5.5'}
								fullWidth={true}
								style={btnStyle}
								onClick={()=>this.setState({current:'msoft', currentQuestion:'color'})}
							/>
						</div>
					</div>
			);
			//Non-Metallic
		case 'nm':
			return(
				<div>
					<h3 style={{textAlign:'center'}}>What is the color of the mineral?</h3>
					<div style={{display:'flex', flexWrap:'wrap', alignContent:'center'}}>
						<RaisedButton
							labelPosition={'before'}
							label={'Light'}
							fullWidth={true}
							style={btnStyle}
							onClick={()=>this.setState({current:'nmlight', currentQuestion:'hardness'})}
						/>

						<RaisedButton
							labelPosition={'before'}
							label={'Dark'}
							fullWidth={true}
							style={btnStyle}
							onClick={()=>this.setState({current:'nmdark',  currentQuestion:'hardness'})}
						/>
					</div>
				</div>
			);
			//Metallic - Hard
		case 'mhard':
			return(
			<div>
				<h3 style={{textAlign:'center'}}>What is the color of the mineral?</h3>
				<div style={{display:'flex', flexWrap:'wrap', alignContent:'center'}}>
					<RaisedButton
						labelPosition={'before'}
						label={'Color:'}
						children={'Grey - Dark Grey'}
						fullWidth={true}
						style={btnStyle}
						onClick={()=>this.setState({current:'mharddg'})}
					/>

					<RaisedButton
						labelPosition={'before'}
						label={'Color:'}
						children={'other'}
						fullWidth={true}
						style={btnStyle}
						onClick={()=>this.setState({current:'mhardother'})}
					/>
				</div>
			</div>
			);
			//Metallic - Hard - Dark Grey
		case 'mharddg':
			return(
				<div>
					<h3 style={{textAlign:'center'}}>Other Distinctive Factors</h3>
					<div style={{display:'flex', flexWrap:'wrap', alignContent:'center'}}>
						<RaisedButton
							labelPosition={'before'}
							label={'Magnetic - Attracted to magnets'}
							fullWidth={true}
							style={btnStyle}
							onClick={()=>this.setState({current:'msoftgrey'})}
						/>

						<RaisedButton
							labelPosition={'before'}
							label={'Cubic Habit - Shows cubic crystals'}
							fullWidth={true}
							style={btnStyle}
							onClick={()=>this.setState({current:'msoftgrey'})}
						/>
					</div>
				</div>
			);
			//Metallic - Soft
		case 'msoft':
			return(
				<div>
					<h3 style={{textAlign:'center'}}>What is the Color of the mineral?</h3>
					<div style={{display:'flex', flexWrap:'wrap', alignContent:'center'}}>
						<RaisedButton
							labelPosition={'before'}
							label={'Grey - Dark Grey'}
							fullWidth={true}
							style={btnStyle}
							onClick={()=>this.setState({current:'msoftgrey'})}
						/>
						<RaisedButton
							labelPosition={'before'}
							label={'Yellow - Brownish Yellow'}
							fullWidth={true}
							style={btnStyle}
							onClick={()=>this.setState({current:'msoftyellow'})}
						/>
						<RaisedButton
							labelPosition={'before'}
							label={'White / Whiteish'}
							fullWidth={true}
							style={btnStyle}
							onClick={()=>this.setState({current:'msoftwhite'})}
						/>
						<RaisedButton
							labelPosition={'before'}
							label={'Copper'}
							fullWidth={true}
							style={btnStyle}
							onClick={()=>this.setState({current:'msoftcopper'})}
						/>
						<RaisedButton
							labelPosition={'before'}
							label={'Gold'}
							fullWidth={true}
							style={btnStyle}
							onClick={()=>this.setState({current:'msoftgold'})}
						/>
					</div>
				</div>
			);

		case 'minde':
			break;

			//Non-Metallic - Light
		case 'nmlight':
			return(
			<div>
				<h3 style={{textAlign:'center'}}>What is the Hardness of the mineral?</h3>
				<div style={{display:'flex', flexWrap:'wrap', alignContent:'center'}}>
					<RaisedButton
						labelPosition={'before'}
						label={'Hard'}
						children={'Hardness > 5.5'}
						fullWidth={true}
						style={btnStyle}
						onClick={()=>this.setState({current:'nmlighthard',  currentQuestion:'cleavage'})}
					/>
					<RaisedButton
						labelPosition={'before'}
						label={'Soft'}
						children={'Hardness < 5.5'}
						fullWidth={true}
						style={btnStyle}
						onClick={()=>this.setState({current:'nmlightsoft',  currentQuestion:'cleavage'})}
					/>
				</div>
			</div>
			);

			//Non-Metallic - Dark
		case 'nmdark':
			return(
			<div>
				<h3 style={{textAlign:'center'}}>What is the Hardness of the mineral?</h3>
				<div style={{display:'flex', flexWrap:'wrap', alignContent:'center'}}>
					<RaisedButton
						labelPosition={'before'}
						label={'Hard'}
						children={'Hardness > 5.5'}
						fullWidth={true}
						style={btnStyle}
						onClick={()=>this.setState({current:'nmdarkhard',  currentQuestion:'cleavage'})}
					/>
					<RaisedButton
						labelPosition={'before'}
						label={'Soft'}
						children={'Hardness < 5.5'}
						fullWidth={true}
						style={btnStyle}
						onClick={()=>this.setState({current:'nmdarksoft',  currentQuestion:'cleavage'})}
					/>
				</div>
			</div>
			);

			//Non-Metallic - Light -Hard
		case 'nmlighthard':
			return(
			<div>
				<h3 style={{textAlign:'center'}}>What is the Cleavage of the mineral?</h3>
				<div style={{display:'flex', flexWrap:'wrap', alignContent:'center'}}>
					<RaisedButton
						labelPosition={'before'}
						label={'Excellent - Good'}
						fullWidth={true}
						style={btnStyle}
						onClick={()=>this.setState({current:''})}
					/>
					<RaisedButton
						labelPosition={'before'}
						label={'Poor - Indistinct'}
						fullWidth={true}
						style={btnStyle}
						onClick={()=>this.setState({current:''})}
					/>
				</div>
			</div>
			);

			//Non-Metallic - Light - Soft
		case 'nmlightsoft':
			return(
				<div>
					<h3 style={{textAlign:'center'}}>What is the Cleavage of the mineral?</h3>
					<div style={{display:'flex', flexWrap:'wrap', alignContent:'center'}}>
						<RaisedButton
							labelPosition={'before'}
							label={'Excellent - Good'}
							fullWidth={true}
							style={btnStyle}
							onClick={()=>this.setState({current:''})}
						/>
						<RaisedButton
							labelPosition={'before'}
							label={'Poor - Indistinct'}
							fullWidth={true}
							style={btnStyle}
							onClick={()=>this.setState({current:''})}
						/>
					</div>
				</div>
			);

			//Non-Metallic - Dark - Hard
		case 'nmdarkhard':
			return(
			<div>
				<h3 style={{textAlign:'center'}}>What is the Cleavage of the mineral?</h3>
				<div style={{display:'flex', flexWrap:'wrap', alignContent:'center'}}>
					<RaisedButton
						labelPosition={'before'}
						label={'Excellent - Good'}
						fullWidth={true}
						style={btnStyle}
						onClick={()=>this.setState({current:'nmdarkhardgood'})}
					/>
					<RaisedButton
						labelPosition={'before'}
						label={'Poor - Indistinct'}
						fullWidth={true}
						style={btnStyle}
						onClick={()=>this.setState({current:'nmdarkhardpoor'})}
					/>
				</div>
			</div>
			);

			//Non-Metallic - Dark - Soft
		case 'nmdarksoft':
			return(
			<div>
				<h3 style={{textAlign:'center'}}>What is the Hardness of the mineral?</h3>
				<div style={{display:'flex', flexWrap:'wrap', alignContent:'center'}}>
					<RaisedButton
						labelPosition={'before'}
						label={'Excellent - Good'}
						fullWidth={true}
						style={btnStyle}
						onClick={()=>this.setState({current:'nmdarksoftgood'})}
					/>
					<RaisedButton
						labelPosition={'before'}
						label={'Poor - Indistinct'}
						fullWidth={true}
						style={btnStyle}
						onClick={()=>this.setState({current:'nmdarksoftpoor'})}
					/>
				</div>
			</div>
			);
		default:
			return(
					<div>
						<h3 style={{textAlign:'center'}}>What is the luster of the mineral?</h3>
						<div style={{display:'flex', flexWrap:'wrap', justifyContent:'space-around', alignContent:'center'}}>
							<RaisedButton
								label={'Metallic'}
								fullWidth={true}
								style={btnStyle}
								onClick={()=>this.setState({current:'m', currentQuestion:'hardness'})}
							/>
							<RaisedButton
								label={'Non-Metallic'}
								fullWidth={true}
								style={btnStyle}
								onClick={()=>this.setState({current:'nm', currentQuestion:'color'})}
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
					<WhatIsBtn
						currentQuestion={this.state.currentQuestion}
					/>
			</div>
		);
	}
}

Question.propTypes ={

};

Question.childContextTypes = {
	muiTheme: PropTypes.object.isRequired,
};
