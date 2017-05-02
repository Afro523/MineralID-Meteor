//React
import React, {Component, PropTypes} from 'react';
import Divider from 'material-ui/Divider';

import MinBanner from '../MinBanner';

import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Table, TableBody, TableRow, TableRowColumn, TableHeader, TableHeaderColumn} from 'material-ui/Table';


export default class HardnessInfo extends Component {
	constructor(props) {
		super(props);
	}

	getChildContext() {
		return { muiTheme: getMuiTheme(baseTheme) };
	}

	render() {
		return (
			<div>
				<MinBanner/>
				<div className='container'>

					<h3 style={{textAlign:'center'}}>Hardness</h3>
					<b> Summary: </b>
					<Divider/>
					<p>
						The hardness of a mineral is based on the Mohs Scale. The Mohs scale of mineral hardness is based on the ability of one natural sample of mineral to scratch another mineral visibly.
					</p>
					<b> Mohs Scale </b>
					<Divider/>
					<Table selectable={false}>
            <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
              <TableHeaderColumn>
                Hardness
              </TableHeaderColumn>
              <TableHeaderColumn>
                Example Mineral
              </TableHeaderColumn>
            </TableHeader>
						<TableBody style={{textAlign:'center'}} displayRowCheckbox={false}>
							<TableRow>
								<TableRowColumn>1</TableRowColumn>
								<TableRowColumn>Talc</TableRowColumn>
							</TableRow>
							<TableRow>
								<TableRowColumn>2</TableRowColumn>
								<TableRowColumn>Gypsum</TableRowColumn>
							</TableRow>
							<TableRow>
								<TableRowColumn>3</TableRowColumn>
								<TableRowColumn>Calcite</TableRowColumn>
							</TableRow>
							<TableRow>
								<TableRowColumn>4</TableRowColumn>
								<TableRowColumn>Fluorite</TableRowColumn>
							</TableRow>
							<TableRow>
								<TableRowColumn>5</TableRowColumn>
								<TableRowColumn>Apatite</TableRowColumn>
							</TableRow>
							<TableRow>
								<TableRowColumn>6</TableRowColumn>
								<TableRowColumn>Feldspar</TableRowColumn>
							</TableRow>
							<TableRow>
								<TableRowColumn>7</TableRowColumn>
								<TableRowColumn>Quartz</TableRowColumn>
							</TableRow>
              <TableRow>
								<TableRowColumn>8</TableRowColumn>
								<TableRowColumn>Topaz</TableRowColumn>
							</TableRow>
              <TableRow>
								<TableRowColumn>9</TableRowColumn>
								<TableRowColumn>Corundum</TableRowColumn>
							</TableRow>
              <TableRow>
								<TableRowColumn>10</TableRowColumn>
								<TableRowColumn>Diamond</TableRowColumn>
							</TableRow>
						</TableBody>
					</Table>
					<b>Everyday Examples: </b>
					<Divider/>
					<p>
            These are some examples of the Mohs Scale compared to everyday objects.
					</p>
          <Table selectable={false}>
            <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
              <TableRow>
                <TableHeaderColumn>
                  Hardness
                </TableHeaderColumn>
                <TableHeaderColumn>
                  Object
                </TableHeaderColumn>
              </TableRow>
            </TableHeader>
						<TableBody style={{textAlign:'center'}} displayRowCheckbox={false}>
							<TableRow >
								<TableRowColumn>2-2.5</TableRowColumn>
								<TableRowColumn>Fingernail</TableRowColumn>
							</TableRow>
							<TableRow>
								<TableRowColumn>3</TableRowColumn>
								<TableRowColumn>Penny</TableRowColumn>
							</TableRow>
							<TableRow>
								<TableRowColumn>4</TableRowColumn>
								<TableRowColumn>Nail</TableRowColumn>
							</TableRow>
							<TableRow>
								<TableRowColumn>5.5</TableRowColumn>
								<TableRowColumn>Glass</TableRowColumn>
							</TableRow>
							<TableRow>
								<TableRowColumn>6.5</TableRowColumn>
								<TableRowColumn>Steel File</TableRowColumn>
							</TableRow>
							<TableRow>
								<TableRowColumn>6</TableRowColumn>
								<TableRowColumn>Feldspar</TableRowColumn>
							</TableRow>
              <TableRow>
								<TableRowColumn>8.5</TableRowColumn>
								<TableRowColumn>Masonry Drill Bit</TableRowColumn>
							</TableRow>
						</TableBody>
					</Table>
				</div>
			</div>
		);
	}
}

HardnessInfo.propTypes ={

};

HardnessInfo.childContextTypes = {
	muiTheme: React.PropTypes.object.isRequired,
};
