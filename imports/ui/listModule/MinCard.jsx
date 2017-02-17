import React, {Component, PropTypes} from 'react';
import {Card, CardMedia, CardText} from 'material-ui/Card';
import {Table, TableBody, TableRow, TableRowColumn} from 'material-ui/Table';

const tableStyle={
	fontSize: '15px',
};


export default class MinCard extends Component {

	render() {
		const mineral = this.props.mineral;
		return (
      <Card>
				<CardMedia mediaStyle={{height: '50%', width: '50%', margin: 'auto'}}>
				<img src="minImage.jpg"/>
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
								Crystal System
							</TableRowColumn>
							<TableRowColumn style={tableStyle}>
								{mineral.crystalSystem}
							</TableRowColumn>
						</TableRow>
						<TableRow
							selectable={false}
							>
							<TableRowColumn style={tableStyle}>
								Crystal Habit
							</TableRowColumn>
							<TableRowColumn style={tableStyle}>
								{mineral.crystalHabit}
							</TableRowColumn>
						</TableRow>
						<TableRow
							selectable={false}
							>
							<TableRowColumn style={tableStyle}>
								Cleavage
							</TableRowColumn>
							<TableRowColumn style={tableStyle}>
								{mineral.cleavage}
							</TableRowColumn>
						</TableRow>
						<TableRow
							selectable={false}
							>
							<TableRowColumn style={tableStyle}>
								Luster
							</TableRowColumn>
							<TableRowColumn style={tableStyle}>
								{mineral.luster}
							</TableRowColumn>
						</TableRow>
						<TableRow
							selectable={false}
							>
							<TableRowColumn style={tableStyle}>
								Color
							</TableRowColumn>
							<TableRowColumn style={tableStyle}>
								{mineral.color}
							</TableRowColumn>
						</TableRow>
						<TableRow
							selectable={false}
							>
							<TableRowColumn style={tableStyle}>
								Streak
							</TableRowColumn>
							<TableRowColumn style={tableStyle}>
								{mineral.streak}
							</TableRowColumn>
						</TableRow>
						<TableRow
							selectable={false}
							>
							<TableRowColumn style={tableStyle}>
								Class Type
							</TableRowColumn>
							<TableRowColumn style={tableStyle}>
								{mineral.classType}
							</TableRowColumn>
						</TableRow>
						<TableRow
							selectable={false}
							>
							<TableRowColumn style={tableStyle}>
								Fracture
							</TableRowColumn>
							<TableRowColumn style={tableStyle}>
								{mineral.fracture}
							</TableRowColumn>
						</TableRow>
						<TableRow
							selectable={false}
							>
							<TableRowColumn style={tableStyle}>
								Hardness
							</TableRowColumn>
							<TableRowColumn style={tableStyle}>
								{mineral.hardness}
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
