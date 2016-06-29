// 1. Make the assertion(s) pass, then answer below (in a comment) why the assertion is that value.
// variable hoisting

var myvar = 'my value'

(function() {
    console.assert(myvar === undefined);
    var myvar = 'local value';
})()

COMMENT: myvar is local to (within) the function and is therefore undefined in the first pass

// 2. Make the assertion(s) pass, then answer below (in a comment) why the assertion is that value.
var flag = true

function test() {
    if(flag) {
        var flag = false
    }
    else {
        flag = true
    }
    console.assert(flag === true)
}
test()

COMMENT: flag within function test is originally undefined and therefore false

// 3. Make the assertion(s) pass, then answer below (in a comment) why the assertion is that value.
var message = 'Hello world'

function saySomething() {
    console.assert(message === undefined)
    var message = 'Foo bar'
}
saySomething()

COMMENT: message  within function saySomething is originally undefined

// 4. Make the assertion(s) pass, then answer below (in a comment) why the assertion is that value.
var message = 'Hello world'

function saySomething() {
    console.assert(message === undefined)
    message = 'Foo bar'
}
saySomething()

COMMENT: message  within function saySomething is originally undefined

// 5. Make the assertion(s) pass, then answer below (in a comment) why the assertion is that value.
function test() {
    console.assert(a ===  undefined)
    console.assert(foo() === 2)

    var a = 1
    function foo() {
        return 2
    }
}
test()

COMMENT: a within function test is originally undefined
COMMENT: foo within function test is defined by the function definition below it, which gets executed first, which returns 2

// 6. Make the assertion(s) pass, then answer below (in a comment) why the assertion is that value.

(function() {
    console.assert(bar === undefined);
    console.assert(foo() === "undefined - :)");

    function foo() {
        return bar+' - :)';
    }

    var bar = 1;
})();

COMMMENT: bar is intially undefined, so when foo gets executed, as it will, it combines "undefined" with the given string
