
// // normal function statement

// function sayHi(){
//     console.log("hii");
// }

// sayHi();

// //function expression
// var sayBye = function(){
//     console.log("bye");
// };

// sayBye();

function callFunction(fun){
    fun();
}

var sayBye = function(){
    console.log("bye");
};

callFunction(sayBye)