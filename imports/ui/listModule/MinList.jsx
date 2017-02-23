import React, {Component, PropTypes} from 'react';
import {ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import MinCard from './MinCard';

const customContentStyle = {
	width: '95%',
	maxWidth: 'none',
};

export default class MinList extends Component {
	constructor(props) {
		super(props);
		//Setting up state for dialog
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
		const mineral =  this.props.mineral;
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
					primaryText={mineral.minName}
					leftAvatar={<Avatar src={'./img/'+mineral.minName+'.jpg'}/>}
					secondaryText={mineral.formula}
					onTouchTap={this.handleOpen.bind(this)}
				/>
				<Dialog
					title={mineral.minName}
					leftAvatar={<Avatar src="minImage.jpg"/>}
					actions={actions}
					modal={false}
					open={this.state.open}
					onRequestClose={this.handleClose.bind(this)}
					autoScrollBodyContent={true}
					contentStyle={customContentStyle}
				>
				<MinCard mineral={mineral}/>
				</Dialog>
		</div>
		);
	}
}

MinList.propTypes ={
	minerals: PropTypes.array.isRequired,
	mineral : PropTypes.object.isRequired,
};
