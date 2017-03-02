import {Meteor} from 'meteor/meteor';
import {Minerals} from '../imports/api/minerals';
Meteor.methods({

	getMinerals(mineral){
		Minerals.find(player._id,
		{ $set: player});
	},

});
