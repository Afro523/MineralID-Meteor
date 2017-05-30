import {Meteor} from 'meteor/meteor';
import {Ground} from 'meteor/ground:db';
import SimpleSchema from 'simpl-schema';

export const Minerals = new Ground.Collection('minerals');

const MineralSchema = new SimpleSchema ({
	_id: {type: String},
	minName: {type: String},
	summary: {type: String},
	formula: {type: String},
	crystalSystem: {type: String},
	crystalHabit: {type: String},
	cleavage: {type: String},
	luster: {type: String},
	color: {type: String},
	streak: {type: String},
	classType : {type: String},
	fracture: {type:String},
	hardness: {type:Array},
	'hardness.$':{type:Number},
	category: {type:String},
});

Minerals.attachSchema(MineralSchema);
