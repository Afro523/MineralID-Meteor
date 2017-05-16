//React
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Help from 'material-ui/svg-icons/action/help';

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
								style={{width:'100%', height:'20vh', marginTop:'20px'}}
								onClick={()=>this.setState({current:'mhard'})}
								>
									<h4>Hard</h4>
									<h5>Hardness {'>'} 5.5 </h5>
							</RaisedButton>

							<RaisedButton
								style={{width:'100%', height:'20vh', marginTop:'30px'}}
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
							style={{width:'100%', height:'20vh', marginTop:'20px'}}
							onClick={()=>this.setState({current:'mhard'})}
							>
								<h4>Hard</h4>
								<h5>Hardness {'>'} 5.5 </h5>
						</RaisedButton>

						<RaisedButton
							style={{width:'100%', height:'20vh', marginTop:'30px'}}
							onClick={()=>this.setState({current:'msoft'})}
							>
								<h4>Soft</h4>
								<h5>Hardness {'<'} 5.5 </h5>
						</RaisedButton>
					</div>
				</div>
			);

		case 'mhard':
			break;

		case 'msoft':
			break;

		case 'minde':
			break;

		default:
			return(
					<div>
						<h3 style={{textAlign:'center'}}>What is the luster of the mineral?</h3>
						<div style={{display:'flex', flexWrap:'wrap', alignContent:'center'}}>
							<RaisedButton
								style={{width:'100%', height:'20vh', marginTop:'20px'}}
								onClick={()=>this.setState({current:'m'})}
							>
								<h4>Metallic</h4>
							</RaisedButton>
							<RaisedButton
								style={{width:'100%', height:'20vh', marginTop:'30px'}}
								onClick={()=>this.setState({current:'nm'})}
							>
								<h4>Non-Metallic</h4>
							</RaisedButton>
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
						style={{float:'right', marginTop:'20px'}}
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
