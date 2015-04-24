import {WordRank} from '../es6/wordRank'
var assert = require('assert');
var should = require('should');
var expect = require('chai').expect;
require('./sinon-cleanup');
var overlapLib = require('word-overlap/lib/lib');
var wordRank;
beforeEach(function(){
	wordRank = new WordRank(overlapLib);
});

describe('word rank scenarios', () => {

	it("should compare rows lengths", () => {
		expect(true).to.equal(true);
	});

});