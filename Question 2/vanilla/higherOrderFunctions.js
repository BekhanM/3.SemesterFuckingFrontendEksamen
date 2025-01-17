//A function that takes another function as an argument.
function functThatTakesAnotherFunc(func) {
    func();
    func();
    func();
}

//Normal function that prints hello
function sayHello() {
    console.log('Hello!');
}

//Passing the simple function as an argument
functThatTakesAnotherFunc(sayHello);

//________________________________________________________________//

//A function that returns another function.
function returnFunc() {
    return function() {
        return "Goodbye!";
    }
}

//Calling the function that returns another function
console.log(returnFunc());

//Calling the returned function
console.log(returnFunc()());

