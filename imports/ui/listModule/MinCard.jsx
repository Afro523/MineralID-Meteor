//React
import React, {Component, PropTypes} from 'react';

//MUI
import {Card, CardMedia, CardText} from 'material-ui/Card';
import {Table, TableBody, TableRow, TableRowColumn} from 'material-ui/Table';

const tableStyle={
	fontSize: '15px',
};


export default class MinCard extends Component {

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
      <Card>
				<CardMedia mediaStyle={{height: '75%', width: '75%', margin: 'auto'}}>
				<img src={'./img/'+mineral.minName+'.jpg'}/>
				</CardMedia>
				<CardText>
					<h5>Summary</h5>
          {mineral.summary}
        </CardText>
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
      </Card>
		);
	}
}

MinCard.propTypes = {
	mineral: PropTypes.object.isRequired,
};
