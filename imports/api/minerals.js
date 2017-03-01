import {Mongo} from 'meteor/mongo';

export const Minerals = new Mongo.Collection('minerals');

const MineralSchema = new SimpleSchema ({
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
