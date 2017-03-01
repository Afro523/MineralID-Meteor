import { Meteor } from 'meteor/meteor';
import {Minerals} from '../imports/api/minerals';

Meteor.startup(() => {

	Meteor.publish('minerals', function () {
		return Minerals.find({}, {sort:{minName:1}});
	});
});
