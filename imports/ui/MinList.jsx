import React, {Component} from 'react';
import {ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

export default class MinList extends Component {

	render() {
		return (
			<div>
      <ListItem
				primaryText="Mah Mineral"
				leftAvatar={<Avatar src="dog_face.png"/>}
			/>
		</div>
		);
	}
}
