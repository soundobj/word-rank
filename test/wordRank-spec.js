import {WordRank} from '../es6/wordRank'
var assert = require('assert');
var should = require('should');
require('./sinon-cleanup');
var overlapLib = require('word-overlap/lib/lib');
var wordRank;
beforeEach(function(){
	console.log('see.. this function is run EACH time')
	wordRank = new WordRank(overlapLib);
});

describe('word rank scenarios', () => {

	it("should compare rows lengths", () => {
		
		console.log("running tests");
		console.log(wordRank);
	});

});