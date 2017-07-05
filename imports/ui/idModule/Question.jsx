//React
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';

//My Components
import ResetBtn from './ResetBtn';
import AnswerList from './AnswerList';
import WhatIsBtn from './WhatIsBtn';
import Answer from './Answer';

const btnStyle={

	marginTop:'30px'
};

export default class Question extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentQuestionType: 'luster',
			currentQuestion:'default',
			isAnswer:false
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
								label={'Hard:'}
								children={'Hardness > 5.5'}
								fullWidth={true}
								style={btnStyle}
								onClick={()=>this.setState({currentQuestion:'mhard', currentQuestionType:'color'})}
							/>

							<RaisedButton
								labelPosition={'before'}
								label={'Soft:'}
								children={'Hardness < 5.5'}
								fullWidth={true}
								style={btnStyle}
								onClick={()=>this.setState({currentQuestion:'msoft', currentQuestionType:'color'})}
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
							onClick={()=>this.setState({currentQuestion:'nmlight', currentQuestionType:'hardness'})}
						/>

						<RaisedButton
							labelPosition={'before'}
							label={'Dark'}
							fullWidth={true}
							style={btnStyle}
							onClick={()=>this.setState({currentQuestion:'nmdark',  currentQuestionType:'hardness'})}
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
						onClick={()=>this.setState({currentQuestion:'mharddg'})}
					/>

					<RaisedButton
						labelPosition={'before'}
						label={'Color:'}
						children={'other'}
						fullWidth={true}
						style={btnStyle}
						onClick={()=>this.setState({currentQuestion:'mhardother', isAnswer:true})}
					/>
				</div>
			</div>
			);
			//Metallic - Hard - Grey
		case 'mharddg':
			return(
				<div>
					<h3 style={{textAlign:'center'}}>Other Distinctive Factors</h3>
					<div style={{display:'flex', flexWrap:'wrap', alignContent:'center'}}>
						<RaisedButton
							labelPosition={'before'}
							label={'Magnetic:'}
							children={'Attracted to magnets'}
							fullWidth={true}
							style={btnStyle}
							onClick={()=>this.setState({currentQuestion:'mharddgmag', isAnswer:true })}
						/>

						<RaisedButton
							labelPosition={'before'}
							label={'Cubic Habit:'}
							children={'Shows cubic crystals'}
							fullWidth={true}
							style={btnStyle}
							onClick={()=>this.setState({currentQuestion:'mharddgcube', isAnswer:true})}
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
							label={'Grey to Dark Grey'}
							fullWidth={true}
							style={btnStyle}
							onClick={()=>this.setState({currentQuestion:'msoftgrey', isAnswer:true})}
						/>
						<RaisedButton
							labelPosition={'before'}
							label={'Yellow to Brownish Yellow'}
							fullWidth={true}
							style={btnStyle}
							onClick={()=>this.setState({currentQuestion:'msoftyellow', isAnswer:true})}
						/>
						<RaisedButton
							labelPosition={'before'}
							label={'White / Whiteish'}
							fullWidth={true}
							style={btnStyle}
							onClick={()=>this.setState({currentQuestion:'msoftwhite', isAnswer:true})}
						/>
						<RaisedButton
							labelPosition={'before'}
							label={'Copper'}
							fullWidth={true}
							style={btnStyle}
							onClick={()=>this.setState({currentQuestion:'msoftcopper', isAnswer:true})}
						/>
						<RaisedButton
							labelPosition={'before'}
							label={'Gold'}
							fullWidth={true}
							style={btnStyle}
							onClick={()=>this.setState({currentQuestion:'msoftgold', isAnswer:true})}
						/>
					</div>
				</div>
			);

			//Non-Metallic - Light
		case 'nmlight':
			return(
			<div>
				<h3 style={{textAlign:'center'}}>What is the Hardness of the mineral?</h3>
				<div style={{display:'flex', flexWrap:'wrap', alignContent:'center'}}>
					<RaisedButton
						labelPosition={'before'}
						label={'Hard:'}
						children={'Hardness > 5.5'}
						fullWidth={true}
						style={btnStyle}
						onClick={()=>this.setState({currentQuestion:'nmlighthard',  currentQuestionType:'cleavage'})}
					/>
					<RaisedButton
						labelPosition={'before'}
						label={'Soft:'}
						children={'Hardness < 5.5'}
						fullWidth={true}
						style={btnStyle}
						onClick={()=>this.setState({currentQuestion:'nmlightsoft',  currentQuestionType:'cleavage'})}
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
						label={'Hard:'}
						children={'Hardness > 5.5'}
						fullWidth={true}
						style={btnStyle}
						onClick={()=>this.setState({currentQuestion:'nmdarkhard',  currentQuestionType:'cleavage'})}
					/>
					<RaisedButton
						labelPosition={'before'}
						label={'Soft:'}
						children={'Hardness < 5.5'}
						fullWidth={true}
						style={btnStyle}
						onClick={()=>this.setState({currentQuestion:'nmdarksoft',  currentQuestionType:'cleavage'})}
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
						label={'Excellent to Good'}
						fullWidth={true}
						style={btnStyle}
						onClick={()=>this.setState({currentQuestion:'nmlighthardgood', isAnswer:true})}
					/>
					<RaisedButton
						labelPosition={'before'}
						label={'Poor to Indistinct'}
						fullWidth={true}
						style={btnStyle}
						onClick={()=>this.setState({currentQuestion:'nmlighthardpoor', isAnswer:true})}
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
							label={'Excellent to Good'}
							fullWidth={true}
							style={btnStyle}
							onClick={()=>this.setState({currentQuestion:'nmlightsoftgood', isAnswer:true})}
						/>
						<RaisedButton
							labelPosition={'before'}
							label={'Poor to Indistinct'}
							fullWidth={true}
							style={btnStyle}
							onClick={()=>this.setState({currentQuestion:'nmlightsoftpoor', isAnswer:true})}
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
						label={'Excellent to Good'}
						fullWidth={true}
						style={btnStyle}
						onClick={()=>this.setState({currentQuestion:'nmdarkhardgood', isAnswer:true})}
					/>
					<RaisedButton
						labelPosition={'before'}
						label={'Poor to Indistinct'}
						fullWidth={true}
						style={btnStyle}
						onClick={()=>this.setState({currentQuestion:'nmdarkhardpoor', isAnswer:true})}
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
						label={'Excellent to Good'}
						fullWidth={true}
						style={btnStyle}
						onClick={()=>this.setState({currentQuestion:'nmdarksoftgood', isAnswer:true})}
					/>
					<RaisedButton
						labelPosition={'before'}
						label={'Poor to Indistinct'}
						fullWidth={true}
						style={btnStyle}
						onClick={()=>this.setState({currentQuestion:'nmdarksoftpoor', isAnswer:true})}
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
								onClick={()=>this.setState({currentQuestion:'m', currentQuestionType:'hardness'})}
							/>
							<RaisedButton
								label={'Non-Metallic'}
								fullWidth={true}
								style={btnStyle}
								onClick={()=>this.setState({currentQuestion:'nm', currentQuestionType:'color'})}
							/>
						</div>
					</div>
			);
		}
	}

	renderAnswer(endState){
		switch (endState) {
			case'msoftgrey':
				return(
					<div>
						<Answer
							commonMin={['Chalcopyrite', 'Bornite', 'Galena', 'Graphite']}
						/>
						<AnswerList
							currColor={'Gray'}
							currLust={'Metallic'}
							mohMin={'0'}
							mohMax={'5'}
						/>
					</div>

				);
				break;
			case'msoftyellow':
				return(
					<div>
						<Answer
							commonMin={['Goethite']}
						/>
						<AnswerList
							currColor={'Yellow'}
							currLust={'Metallic'}
							mohMin={'0'}
							mohMax={'5'}
						/>
					</div>
				);
				break;
			case'msoftwhite':
				return(
					<div>
						<Answer
							commonMin={['Sphalerite']}
						/>
						<AnswerList
							currColor={'White'}
							currLust={'Metallic'}
							mohMin={'0'}
							mohMax={'5'}
						/>
					</div>
				);
				break;
			case'msoftcopper':
				return(
					<div>
						<Answer
							commonMin={['Copper']}
						/>
						<AnswerList
							currColor={'Copper'}
							currLust={'Metallic'}
							mohMin={'0'}
							mohMax={'5'}
						/>
					</div>
				);
				break;
			case'msoftgold':
				return(
					<div>
						<Answer
							commonMin={['Gold']}
						/>
						<AnswerList
							currColor={'Gold'}
							currLust={'Metallic'}
							mohMin={'0'}
							mohMax={'5'}
						/>
					</div>
				);
				break;
			case'mhardother':
				return(
					<div>
						<Answer
							commonMin={['Limonite', 'Chromite', 'Hematite']}
						/>
						<AnswerList
							currColor={'Light'}
							currLust={'Metallic'}
							mohMin={'5'}
							mohMax={'10'}
						/>
					</div>
				);
				break;
			case'mharddgmag':
				return(
					<div>
						<Answer
							commonMin={['Magnetite']}
						/>
						<AnswerList
							currColor={'Gray'}
							currLust={'Metallic'}
							mohMin={'5'}
							mohMax={'10'}
						/>
					</div>
				);
				break;
			case'mharddgcube':
				return(
					<div>
						<Answer
							commonMin={['Pyrite']}
						/>
					</div>
				);
				break;
			case'nmlighthardgood':
				return(
					<div>
						<Answer
							commonMin={['Sillimanite', 'Kyanite']}
						/>
						<AnswerList
							color={'Light'}
							luster={'Non-Metallic'}
							cleavage={'Good'}
							mohMin={'5'}
							mohMax={'10'}
						/>
					</div>
				);
				break;
			case'nmlighthardpoor':
				return(
					<div>
						<Answer
							commonMin={['Corundum', 'Quartz', 'Olivine']}
						/>
						<AnswerList
							color={'Light'}
							luster={'Non-Metallic'}
							cleavage={'Poor'}
							mohMin={'5'}
							mohMax={'10'}
						/>
					</div>
				);
				break;
			case'nmlightsoftgood':
				return(
					<div>
						<Answer
							commonMin={['Calcite', 'Dolomite', 'Baryte', 'Gypsum', 'Natrolite', 'Halite', 'Fluorite', 'Muscovite']}
						/>
						<AnswerList
							color={'Light'}
							luster={'Non-Metallic'}
							cleavage={'Good'}
							mohMin={'0'}
							mohMax={'5'}
						/>
					</div>
				);
				break;
			case'nmlightsoftpoor':
				return(
					<div>
						<Answer
							commonMin={['Sulfur', 'Chrysocolla', 'Talc', 'Kaolinite']}
						/>
						<AnswerList
							color={'Light'}
							luster={'Non-Metallic'}
							cleavage={'Poor'}
							mohMin={'0'}
							mohMax={'5'}
						/>
					</div>
				);
				break;
			case'nmdarkhardgood':
				return(
					<div>
						<Answer
							commonMin={['Actinolite', 'Hornblende', 'Augite']}
						/>
						<AnswerList
							color={'Dark'}
							luster={'Non-Metallic'}
							cleavage={'Good'}
							mohMin={'5'}
							mohMax={'10'}
						/>
					</div>
				);
				break;
			case'nmdarkhardpoor':
				return(
					<div>
						<Answer
							commonMin={['Staurolite', 'Tourmaline', 'Garnet', 'Jasper']}
						/>
						<AnswerList
							color={'Dark'}
							luster={'Non-Metallic'}
							cleavage={'Poor'}
							mohMin={'5'}
							mohMax={'10'}
						/>
					</div>
				);
				break;
			case'nmdarksoftgood':
				return(
					<div>
						<Answer
							commonMin={['Sphalerite', 'Fluorite', 'Biotite']}
						/>
						<AnswerList
							color={'Dark'}
							luster={'Non-Metallic'}
							cleavage={'Good'}
							mohMin={'0'}
							mohMax={'5'}
						/>
					</div>
				);
				break;
			case'nmdarksoftpoor':
				return(
					<div>
						<Answer
							commonMin={['Limonite', 'Bauxite', 'Azurite', 'Malachite', 'Talc', 'Hematite']}
						/>
						<AnswerList
							color={'Dark'}
							luster={'Non-Metallic'}
							cleavage={'Poor'}
							mohMin={'0'}
							mohMax={'5'}
						/>
					</div>
				);
				break;
			default:
				console.log('Shit aint working in answer');
				break;

		}
	}

	resetState(){
		this.setState({isAnswer:false, currentQuestionType:'luster', currentQuestion: 'default'});
	}

	renderQuestionBtn(isAnswer){
		if(isAnswer != true){
			return (
				<WhatIsBtn
					currentQuestion={this.state.currentQuestionType}
				/>
			)
		}
	}

	renderReturnBtn(){
			return(
				<ResetBtn
					isAnswer={this.state.isAnswer}
					resetState = { () => this.resetState()}
					currentQuestion={this.state.currentQuestion}
				/>
			)
	}

	renderQuestionOrAnswer(isAnswer){
		if(isAnswer != true){
			return (this.renderQuestion(this.state.currentQuestion));
		} else {
			return(this.renderAnswer(this.state.currentQuestion));
		}
	}

	render() {
		return (
			<div>
				{this.renderQuestionOrAnswer(this.state.isAnswer)}
				{this.renderQuestionBtn(this.state.isAnswer)}
				{this.renderReturnBtn()}
			</div>
		);
	}
}

Question.propTypes ={

};

Question.childContextTypes = {
	muiTheme: PropTypes.object.isRequired,
};
