// function add (a,b) {
//     return a +b;
// }

// console.log(add(3,1));

// var toAdd = [9,5];
// console.log(add(...toAdd));

// 


var person = ['John', 33];
var person2 = ['Koqe', 55];

var names = ['Mike', 'Ben'];
var final = ['Trapi', ...names];

function expand(name, age){
console.log("hello " + name + "you are " +age);
}

expand(...person2);

final.forEach( function(name) {
    console.log('HI' + name);
});

