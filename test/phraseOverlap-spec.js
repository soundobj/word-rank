import {phraseOverlap} from '../es6/phraseOverlap'
var assert = require('assert');
var should = require('should');
var expect = require('chai').expect;

describe('phraseOverlap scenarios ', () => {

    let po;

    beforeEach(() => {

        let phrases = [];

        phrases.push('program angular is an industry requirement');
        phrases.push("the program isn't hard to develop");
        phrases.push('my mac allow me to program angular');

        po = phraseOverlap(phrases);
        po.sort();

    });

    it("should build phraseOverlap", () => {
        console.log("sanitized 0");
        console.log(po.sanitized[0].relations.toString());
        console.log("sanitized 1");
        console.log(po.sanitized[1].relations.toString());
        console.log("sanitized 2");
        console.log(po.sanitized[2].relations.toString());
        //expect(po.sanitized[0]).to.deep.equal
    });

    afterEach(() => {
        po = null;
    });
});