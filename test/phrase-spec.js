import {phraseFactory} from '../es6/phraseFactory'
var assert = require('assert');
var should = require('should');
var expect = require('chai').expect;
var wordOverlap = require('../node_modules/word-overlap/lib/lib');

describe('Phrase scenarios', () => {

    it("should build matchableWordsMap", () => {

        let phrase = phraseFactory("programming! gets out the best, in people");
        phrase.sanitizePhrase();

        expect(phrase.sanitized).to.have.members(
            ['program','get','out','the','best','in','person'])
        ;

        expect(phrase.elements).to.have.members(
            ['programming!','gets','out','the','best,','in','people'])
        ;
    });
});