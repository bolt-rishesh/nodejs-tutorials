var counter = function(arr){
    return "there are "+arr.length + " elements in this array";
};


var adder = function(a,b){
    return `the sum of two no's is ${a+b}`;
};

var pi = 3.14;

// module.exports.counter = counter;
// module.exports.adder = adder;
// module.exports.pi = pi;

module.exports = {
    counter : counter,
    adder : adder,
    pi : pi
};