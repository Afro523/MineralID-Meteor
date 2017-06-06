/*import {Meteor,Assets} from 'meteor/meteor';
import {Ground} from 'meteor/ground:db';
Meteor.startup(function () {
	var Min2 = new Ground.Collection('min2', { connection: null });
	var testDb = Min2.find().fetch();
	console.log(testDb);
	if(testDb.length == 0){
		allMin.forEach(function (item, index, array) {
			Min2.insert(item);
			console.log(item);
		});
	}
});
*/
