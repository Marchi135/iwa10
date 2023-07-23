const maxNumber = Math.pow(10, 1000); // Max positive number

if (maxNumber === Infinity) {
    console.log('let\'s call it Infinity!');
}

console.log(Math.pow(10, 1000));

function test(t) {
    if (t === undefined) {
        return 'Undefined value!';
    }
    return t;
}

let x;

console.log(test(x));

