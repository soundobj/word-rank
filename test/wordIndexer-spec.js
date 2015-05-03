import {wordIndexer} from '../es6/wordIndexer'
var assert = require('assert');
var should = require('should');
var expect = require('chai').expect;
var wordOverlap = require('../node_modules/word-overlap/lib/lib');

describe('word indexer scenarios', () => {

    it("should build a word index", () => {

        let phrases = [];

        phrases.push(['program','get','out','the','best','in','person']);
        phrases.push(['Master','web','application','development','with','angularjs']);
        phrases.push(['my','mac','allow','me','to','learn','angularjs']);
        phrases.push(['program','on','a','mac','is','best','than','pc']);

        let wi = wordIndexer(phrases);
        wi.index();

        expect(wi.wordIndex["program"]).to.deep.equal([{phrase:0,pos:0},{phrase:3,pos:0}]);
        expect(wi.wordIndex).should.not.have.any.keys("on","is","the","out");

    });
});