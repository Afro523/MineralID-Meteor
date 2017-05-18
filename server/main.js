import { Meteor } from 'meteor/meteor';
import {Minerals} from '../imports/api/minerals';

Meteor.startup(() => {
	Meteor.AppCache.config({onlineOnly: ['/img','/exampleImg']});
	Meteor.publish('minerals', function () {
		return Minerals.find({});
	});

});
