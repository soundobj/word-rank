import {phraseFactory} from '../es6/phraseFactory'
var expect = require('chai').expect;
var should = require('should');

describe('Phrase scenarios', () => {

    let phrase;

    beforeEach(() => {
        phrase = phraseFactory("programming! gets out the best, in people");
        phrase.sanitize();
    });

    it("should sanitize words in a phrase", () => {
        expect(phrase.sanitized).to.have.members(
            ['program','get','out','the','best','in','person'])
        ;
    });

    it("should tokenise phrase elements", () => {
        expect(phrase.elements).to.have.members(
            ['programming!','gets','out','the','best,','in','people'])
        ;
    });

    afterEach(() => {
        phrase = null;
    });
});