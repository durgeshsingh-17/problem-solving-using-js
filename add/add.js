// Normal Function Method 1
function add(param1, param2) {
    return param1 + param2;
}

// Normal Function Method 2

function add2(...param1) {
    let sum = 0;
    param1.forEach(val => sum += val);
    return sum;
}

// ES6 Method 3

add = (...params)=>params.reduce((a,c)=> a+c, 0);

console.log(add(1, 2));
console.log(add(3, 2));

console.log(add2(1, 2, 3, 4, 5));
console.log(add2(2, 3));
