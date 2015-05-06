var Benchmark = require('../node_modules/benchmark');

var suite = new Benchmark.Suite;

var els = [
    {phrase:0,pos:1},
    {phrase:2,pos:4},
    {phrase:1,pos:3},
    {phrase:6,pos:3},
];

var index = 2;

// add tests
suite.add('if#test', function() {
    var process = 0;
    for(var i=0; i < els.length; i++) {
        if(i !== index){
            process++;
        }
    }
})
    .add('spliceTest#test', function() {
        var process = 0;
        var clonedEls = els.slice(0);
        clonedEls.splice(index,1);
        for(var i=0; i < els.length; i++) {
            process++;
        }
    })
// add listeners
    .on('cycle', function(event) {
        console.log(String(event.target));
    })
    .on('complete', function() {
        console.log('Fastest is ' + this.filter('fastest').pluck('name'));
    })
// run async
    .run({ 'async': true });