//React
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {Card, CardText, CardTitle} from '@material-ui/core/Card';
import {Table, TableBody, TableRow, TableRowColumn} from '@material-ui/core/Table';
import Divider from '@material-ui/core/Divider';
import myBaseTheme from '../../../client/myBaseTheme';
// 'material-ui/core/styles/getMuiTheme

const tableStyle={
	whiteSpace: 'pre-wrap',
	wordWrap: 'break-word',
	textAlign: 'center'
};

export default class Back extends Component {
	constructor(props) {
		super(props);
	}

	getChildContext() {
		return { muiTheme: getMuiTheme(myBaseTheme) };
	}

	setHardness(arr){
		if(arr.length == 1){
			return arr[0];
		} else {
			return arr[0] +'-'+ arr[1];
		}
	}

	capWord(str){
		//start of string or whitespace character followed by a letter
		return str.replace(/(^|\s|-)[a-z]/g,function(f){return f.toUpperCase();});
	}
	
	render() {
		const mineral = this.props.mineral;
		return (
			<div className='back tile' style={{overflow:'scroll'}}>
				<Card>
				<CardText>
					<b>Summary</b>
					<Divider/>
					<p>{mineral.summary}</p>
				<b>{mineral.minName}'s Properties Chart</b>
				<Divider/>
				<Table>
					<TableBody
						displayRowCheckbox={false}
						>
						<TableRow
							selectable={false}
							>
							<TableRowColumn style={tableStyle}>
								Formula
							</TableRowColumn>
							<TableRowColumn style={tableStyle}>
								{mineral.formula}
							</TableRowColumn>
						</TableRow>
						<TableRow
							selectable={false}
							>
							<TableRowColumn style={tableStyle}>
								Category
							</TableRowColumn>
							<TableRowColumn style={tableStyle}>
								{this.capWord(mineral.category)}
							</TableRowColumn>
						</TableRow>
						<TableRow
							selectable={false}
							>
							<TableRowColumn style={tableStyle}>
								Crystal System
							</TableRowColumn>
							<TableRowColumn style={tableStyle}>
								{this.capWord(mineral.crystalSystem)}
							</TableRowColumn>
						</TableRow>
						<TableRow
							selectable={false}
							>
							<TableRowColumn style={tableStyle}>
								Crystal Habit
							</TableRowColumn>
							<TableRowColumn style={tableStyle}>
								{this.capWord(mineral.crystalHabit)}
							</TableRowColumn>
						</TableRow>
						<TableRow
							selectable={false}
							>
							<TableRowColumn style={tableStyle}>
								Cleavage
							</TableRowColumn>
							<TableRowColumn style={tableStyle}>
								{this.capWord(mineral.cleavage)}
							</TableRowColumn>
						</TableRow>
						<TableRow
							selectable={false}
							>
							<TableRowColumn style={tableStyle}>
								Luster
							</TableRowColumn>
							<TableRowColumn style={tableStyle}>
								{this.capWord(mineral.luster)}
							</TableRowColumn>
						</TableRow>
						<TableRow
							selectable={false}
							>
							<TableRowColumn style={tableStyle}>
								Color
							</TableRowColumn>
							<TableRowColumn style={tableStyle}>
								{this.capWord(mineral.color)}
							</TableRowColumn>
						</TableRow>
						<TableRow
							selectable={false}
							>
							<TableRowColumn style={tableStyle}>
								Streak
							</TableRowColumn>
							<TableRowColumn style={tableStyle}>
								{this.capWord(mineral.streak)}
							</TableRowColumn>
						</TableRow>
						<TableRow
							selectable={false}
							>
							<TableRowColumn style={tableStyle}>
								Class Type
							</TableRowColumn>
							<TableRowColumn style={tableStyle}>
								{this.capWord(mineral.classType)}
							</TableRowColumn>
						</TableRow>
						<TableRow
							selectable={false}
							>
							<TableRowColumn style={tableStyle}>
								Fracture
							</TableRowColumn>
							<TableRowColumn style={tableStyle}>
								{this.capWord(mineral.fracture)}
							</TableRowColumn>
						</TableRow>
						<TableRow
							selectable={false}
							>
							<TableRowColumn style={tableStyle}>
								Hardness
							</TableRowColumn>
							<TableRowColumn style={tableStyle}>
								{this.setHardness(mineral.hardness)}
							</TableRowColumn>
						</TableRow>
					</TableBody>
				</Table>
				</CardText>
      </Card>
    	</div>
		);
	}
}

Back.propTypes ={
	mineral: PropTypes.object.isRequired,
};

Back.childContextTypes = {
	muiTheme: PropTypes.object.isRequired,
};
