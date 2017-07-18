//React
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import ReactCardFlip from 'react-card-flip';

import {Card, CardMedia, CardTitle} from 'material-ui/Card';

import myBaseTheme from '../../../client/myBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

export default class FlipCard2 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isFlipped: false
		};
	}

	getChildContext() {
		return { muiTheme: getMuiTheme(myBaseTheme) };
	}

	handleClick() {
    	this.setState({ isFlipped: !this.state.isFlipped });
  	}

 	getData(minName){
  		for (let i = 0; i < allMin.length; i++) {
  			if(allMin[i].minName === minName){
  				return allMin[i];
  			}
  		}
  	}
	render() {
		var frontRef = this.props.mineral.minName + 'Ref';
		return (
			<div style={{display:'flex', flexWrap:'wrap'}}>
			<ReactCardFlip
          		isFlipped={this.state.isFlipped}

          		>
           		<Card key={'front'} onClick={() => this.handleClick()}>
					<CardMedia
						overlayContentStyle={{paddingTop:'0px'}}
						overlayStyle={{paddingTop:'0px'}}
						overlay={<CardTitle style={{paddingTop:'0px', paddingBottom:'0px'}} title={this.props.mineral} />}
						>
							<img src={'/img/'+this.props.mineral+'.jpg'}/>
					</CardMedia>
				</Card>

          		<div key={'back'}>
            		<div >Back</div>
            		<button type="button" ref={'backButton'} onClick={() => this.handleClick()}>Show front</button>
          		</div>
        	</ReactCardFlip>
        	</div>

		);
	}
}

FlipCard2.propTypes ={
	mineral: PropTypes.string.isRequired,
};

FlipCard2.childContextTypes = {
	muiTheme: PropTypes.object.isRequired,
};
