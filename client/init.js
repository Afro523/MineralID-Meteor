
/*import {Meteor} from 'meteor/meteor';
import {Ground} from 'meteor/ground:db';

export var groundDb = new Ground.Collection('minerals', { connection: null });
Meteor.startup(() => {
	//Meteor.disconnect();
	//groundDb = new Ground.Collection('wooooo', { connection: null });
	console.log(localStorage);

	localStorage.clear();
	allMin.map(function(value, index, array){
		groundDb.insert(value);
	});
	console.log(JSON.parse(localStorage['_storage.minerals.db.data']));
});

*/
