//React
import React, {Component} from 'react';
import PropTypes from 'prop-types';
//Components
import MinCard from './MinCard';
//MUI
import {ListItem} from '@material-ui/core/List';
import Avatar from '@material-ui/core/Avatar';
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
// import {deepPurple200, grey300, grey500} from '@material-ui/core/styles/colors';
import grey from '@material-ui/core/colors/grey';

const lightGrey = grey[500];


import FullScreenDialog from 'material-ui-fullscreen-dialog';

const customContentStyle = {
	width: '97%',
	maxWidth: 'none'
};

export default class MinItem extends Component {
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
			<Button
				variant="contained"
        		label="Close"
        		primary={true}
        		onTouchTap={this.handleClose.bind(this)}
      		/>
		];
		return (
			<div>
				<ListItem
					primaryText={mineral.minName}
					leftAvatar={<Avatar src={'./img/'+mineral.minName+'.jpg'}/>}
					secondaryText={mineral.formula}
					onTouchTap={this.handleOpen.bind(this)}
				/>
				<FullScreenDialog
					title={mineral.minName}
					titleStyle={{borderBottom:'none'}}
					leftAvatar={<Avatar src="minImage.jpg"/>}
					actions={actions}
					modal={false}
					open={this.state.open}
					onRequestClose={this.handleClose.bind(this)}
					autoScrollBodyContent={true}
					contentStyle={customContentStyle}
					bodyStyle={{padding:'0px', borderTop:'2px solid', borderBottom:'2px solid', borderColor:lightGrey}}
				>
				<MinCard mineral={mineral}/>
			</FullScreenDialog>
		</div>
		);
	}
}

MinItem.propTypes ={
	mineral : PropTypes.object.isRequired,
};
