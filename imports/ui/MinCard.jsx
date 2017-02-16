import React, {Component} from 'react';
import {Card, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {Table, TableBody, TableRow, TableRowColumn} from 'material-ui/Table';


const mineral = {
	'minName': 'Acanthite',
	'summary': 'Named after the Greek word "acanthi", meaning “thorn,” in reference to the mineral’s common crystal habit. Acanthite is a common mineral that occurs in medium- to low-temperature hydrothermal sulfide veins and in secondary enrichment zones. It can be found in association with silver, pyrargyrite, proustite, polybasite, stephanite, aguilarite, galena, chalcopyrite, sphalerite, calcite, and quartz. A widespread mineral, but fine crystals can be found in localities in the Czech Republic, Germany, Mexico, the United States, Canada, and Chile. Found in silver rich deposits as lead grey to black tarnished, soft, metallic pseudocubic crystals or elongatic prismatic crystals with rounded corners commonly associated with Silver. Sectile and easily cut by a knife.',
	'formula': 'Ag2S',
	'crystalSystem': 'Monoclinic',
	'crystalHabit': 'Blocky, Skeletal, Arborescent',
	'cleavage': 'poor to none',
	'luster': 'Metallic',
	'color': 'lead gray, gray, iron black',
	'streak': 'shining black',
	'classType': 'Monoclinic - Prismatic',
	'fracture': 'Sectile',
	'hardness': '2-2.5'
};

const tableStyle={
	fontSize: '15px',
};


export default class MinCard extends Component {

	render() {
		return (
      <Card
				style={{border:'2px black solid'}}>
        <CardTitle>
					<h4>{mineral.minName}</h4>
				</CardTitle>
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
								{mineral.crystalHabit
							}</TableRowColumn>
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
