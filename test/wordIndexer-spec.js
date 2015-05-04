import {wordIndexer} from '../es6/wordIndexer'
var expect = require('chai').expect;
var should = require('should');

var chai = require('chai');
var chaiImmutable = require('chai-immutable');
chai.use(chaiImmutable);

describe('word indexer scenarios', () => {

    let wi;

    beforeEach(() => {
        let phrases = [];

        phrases.push(['program','get','out','the','best','in','person']);
        phrases.push(['Master','web','application','development','with','angular']);
        phrases.push(['my','mac','allow','me','to','learn','angular']);
        phrases.push(['mac','on','program','is','best','than','pc']);

        wi = wordIndexer(phrases);
        wi.index();
        console.log(`i is :${wi.wordIndex.get("i")}`);
    })

    it("should build a word index", () => {
        expect(wi.wordIndex.get("program")).to.deep.equal([{phrase:0,pos:0},{phrase:3,pos:2}]);
    });

    it("The index should not contain common words ", () => {
        expect(wi.wordIndex.get("i")).to.be.undefined;
        expect(wi.wordIndex.get("the")).to.be.undefined;
    });

    afterEach(() => {
       wi = null;
    });
});