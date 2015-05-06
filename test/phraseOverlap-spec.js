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
        phrases.push('unmatchable');

        po = phraseOverlap(phrases);
        po.sort();

    });

    it("the 1st phrase 1st word should match with the 2cnd phrase 2cnd word", () => {
        expect(po.sanitized[0].relations.get(1)).to.deep.equal([[0, 1]]);
    });

    it("the 1st phrase 1st and 2cnd word should match with the 3rd phrase 5th and 6th word", () => {
        expect(po.sanitized[0].relations.get(2)).to.deep.equal([[0, 5],[1,6]]);
    });

    it("the 1st phrase should not have a relation with the 4th phrase", () => {
         expect(po.sanitized[0].relations.get(3)).to.be.undefined;
    });

    afterEach(() => {
        po = null;
    });
});