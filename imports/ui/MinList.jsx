import React, {Component, PropTypes} from 'react';
import {ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import MinCard from './MinCard';

const customContentStyle = {
	width: '85%',
	maxWidth: 'none',
	height: '85%',
	maxHeight: 'none'
};

export default class MinList extends Component {
	constructor(props) {
		super(props);

		//Setting up state
		this.state = {
			open:false
		};
	}

	handleOpen() {
		this.setState({open: true});
	}

	handleClose() {
		this.setState({open: false});
	}

	render() {
		const actions = [
			<FlatButton
        label="Close"
        primary={true}
        onTouchTap={this.handleClose.bind(this)}
      />,
		];
		return (
			<div>
				<ListItem
					primaryText={this.props.mineral.minName}
					leftAvatar={<Avatar src="minImage.jpg"/>}
					secondaryText={this.props.mineral.formula}
					onTouchTap={this.handleOpen.bind(this)} />
				<Dialog
					title={this.props.mineral.minName}
					leftAvatar={<Avatar src="minImage.jpg"/>}
					actions={actions}
					modal={false}
					open={this.state.open}
					onRequestClose={this.handleClose.bind(this)}
					autoScrollBodyContent={true}
					contentStyle={customContentStyle}
				>
				<MinCard mineral={this.props.mineral}/>
				</Dialog>
		</div>
		);
	}
}

MinList.PropTypes ={
	mineral: PropTypes.object.isRequired,
	minName: PropTypes.string.isRequired,
};
