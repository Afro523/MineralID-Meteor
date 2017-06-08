import {Meteor} from 'meteor/meteor';
import {Ground} from 'meteor/ground:db';

export var groundDb = new Ground.Collection('wooooo', { connection: null });
Meteor.startup(() => {
	//Meteor.disconnect();
	//groundDb = new Ground.Collection('wooooo', { connection: null });
	groundDb.clear();
	allMin.map(function(value, index, array){
		groundDb.insert(value);
	});
});
