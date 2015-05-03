// GET Json from file system
var phrases = require('./phrases.json');
console.log(phrases[0]);

// use third party library
var overlapLib = require('word-overlap/lib/lib');
console.log(overlapLib.tokenize(phrases[0].quote));

var System = require('systemjs');
var wordRank;

// system js import
System.import('./es6/wordRank').then(function(m) {
  wordRank = new m.WordRank(overlapLib);
});

// es6 import requires  babel-node
import {phraseFactory} from './es6/phraseFactory'
let phrase = phraseFactory("programming! gets out the best, in people");
