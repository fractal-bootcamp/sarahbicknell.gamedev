
function doThing(x) {
    return  (x + 1) / ((x*x) - 1) 
}

function plusOne(x) {
    return x + 1
}

function squareMinusOne(x) {
    return (x*x) - 1
}

function square(x) {
    return (x*x)
}

function cube(x) {
    return (x*x*x)
}

function minusSelfPlusOne(x) {
    return x - (x + 1)
}

function a(x) {
    return (x + (x*x))
}

function b(x) {
    return ((x * x) - x - 1)
}

function j(x, y) {
    // const total = (x + square(x) + y + square(y)) / square(y) - y - 1 
    const total = (a(x) + a(y)) / b(y)
    return total
}

console.log(j(2, 4))

function g(x) {
    const total = (square(x) + cube(x)) / minusSelfPlusOne(x) 
    return total
}


