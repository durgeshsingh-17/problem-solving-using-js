// Normal Funtion Method 1

function addTwoDigits(n) {
    const nums = n.toString().split('');
    return nums.reduce((a, c) => a + +c, 0);
}

// ES6 Method 2

// addTwoDigits = num => (num + "").split("").reduce((a, c) => a + +c, 0);

console.log(addTwoDigits(29));
