var phrases = require('./phrases.json');
var overlap = require('word-overlap');
var overlapLib = require('word-overlap/lib/lib');

console.log(phrases[0]);
console.log(overlapLib.tokenize(phrases[0].quote));

var System = require('systemjs');
var wordRank;
System.import('./es6/wordRank').then(function(m) {
  wordRank = new m.WordRank(overlapLib);
});
