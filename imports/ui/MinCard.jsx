import React, {Component} from 'react';
import {Card, CardActions, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';
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
	fontSize: '25px',
};


export default class MinCard extends Component {

	render() {
		return (
      <Card>
        <CardTitle title={mineral.minName}/>
				<div className="row">
				<CardMedia className="col s6" style={{height: '50%', width: '50%'}} >
				<img src="minImage.jpg"/>
				</CardMedia>
				<CardText className="col s6">
					<h5>Summary</h5>
				<Divider/>
          {mineral.summary}
        </CardText>
			</div>
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
							<TableRowColumn>{mineral.crystalSystem}</TableRowColumn>
						</TableRow>
						<TableRow
							selectable={false}
							>
							<TableRowColumn>Crystal Habit</TableRowColumn>
							<TableRowColumn>{mineral.crystalHabit}</TableRowColumn>
						</TableRow>
						<TableRow
							selectable={false}
							>
							<TableRowColumn>Cleavage</TableRowColumn>
							<TableRowColumn>{mineral.cleavage}</TableRowColumn>
						</TableRow>
						<TableRow
							selectable={false}
							>
							<TableRowColumn>Luster</TableRowColumn>
							<TableRowColumn>{mineral.luster}</TableRowColumn>
						</TableRow>
						<TableRow
							selectable={false}
							>
							<TableRowColumn>Color</TableRowColumn>
							<TableRowColumn>{mineral.color}</TableRowColumn>
						</TableRow>
						<TableRow
							selectable={false}
							>
							<TableRowColumn>Streak</TableRowColumn>
							<TableRowColumn>{mineral.streak}</TableRowColumn>
						</TableRow>
						<TableRow
							selectable={false}
							>
							<TableRowColumn>Class Type</TableRowColumn>
							<TableRowColumn>{mineral.classType}</TableRowColumn>
						</TableRow>
						<TableRow
							selectable={false}
							>
							<TableRowColumn>Fracture</TableRowColumn>
							<TableRowColumn>{mineral.fracture}</TableRowColumn>
						</TableRow>
						<TableRow
							selectable={false}
							>
							<TableRowColumn>Hardness</TableRowColumn>
							<TableRowColumn>{mineral.hardness}</TableRowColumn>
						</TableRow>
					</TableBody>
				</Table>
        <CardActions>
          <FlatButton label="Action1" />
          <FlatButton label="Action2" />
        </CardActions>
      </Card>
		);
	}
}
