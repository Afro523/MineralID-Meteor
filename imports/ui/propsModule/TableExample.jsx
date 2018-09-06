//React
import React, {Component} from 'react';
import PropTypes from 'prop-types';

import myBaseTheme from '../../../client/myBaseTheme';
// 'material-ui/core/styles/getMuiTheme
import {Table, TableBody, TableRow, TableRowColumn, TableHeader, TableHeaderColumn} from '@material-ui/core/Table';
import {Card, CardMedia, CardTitle} from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';

const columnStyle = {
	whiteSpace: 'pre-wrap',
	wordWrap: 'break-word'
};

export default class TableExample extends Component {
	constructor(props) {
		super(props);
	}

	getChildContext() {
		return { muiTheme: getMuiTheme(myBaseTheme) };
	}

	renderStyle(){
		if(this.props.columnStyle === undefined){
			return columnStyle
		} else {
			return this.props.columnStyle
		}
	}

	render() {
		return (
			<div>
				<Table selectable={false}>
					<TableBody displayRowCheckbox={false}>
						<TableRow>
							<TableRowColumn>{this.props.name}</TableRowColumn>
							<TableRowColumn style={this.renderStyle()}>{this.props.description}</TableRowColumn>
						</TableRow>
					</TableBody>
				</Table>
				<b>Example:</b>
					<Card>
						<CardMedia
							overlay={<CardTitle title={this.props.img}/>}
							>
								<img src={'/img/'+this.props.img+'.jpg'} />
						</CardMedia>
					</Card>
					<br/>
					<Divider/>
			</div>

		);
	}
}

TableExample.propTypes ={
	plainPicture: PropTypes.string,
	plainDescription: PropTypes.string,
	uvPicture: PropTypes.string,
	uvDescription: PropTypes.string
};

TableExample.childContextTypes = {
	muiTheme: PropTypes.object.isRequired,
};
