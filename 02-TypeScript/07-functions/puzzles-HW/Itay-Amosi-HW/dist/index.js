// HW
// level 1 
console.log("level 1.1");
function negativeNumber(a) {
    return a * -1;
}
console.log(negativeNumber(50));
console.log("level 1.2");
function sqrtNumber(b) {
    return (b = Math.sqrt(b));
}
console.log(sqrtNumber(9));
console.log("level 1.3");
function celsiusTemp(celsius) {
    var cTemp = celsius;
    var cToFahr = (cTemp * 9) / 5 + 32;
    var message = cTemp + '\xB0C is ' + cToFahr + ' \xB0F.';
    console.log(message);
}
function fahrenheitTemp(fahrenheit) {
    var fTemp = fahrenheit;
    var fToCel = ((fTemp - 32) * 5) / 9;
    var message = fTemp + '\xB0F is ' + fToCel + '\xB0C.';
    console.log(message);
}
celsiusTemp(40);
fahrenheitTemp(30);
// level 2
console.log("level 2.1");
function maxOfTwo(number1, number2) {
    if (parseFloat(number1) < parseFloat(number2)) {
        return number2;
    }
    else if (parseFloat(number1) > parseFloat(number2)) {
        return number1;
    }
    else {
        console.log(number1 + ' and ' + number2 + ' are equal!');
    }
}
console.log(maxOfTwo(1, 5));
console.log(maxOfTwo(9, 12));
console.log("level 2.2");
function genderHeightAvrge(avr, male) {
    if (male === "male") {
        return avr - 174;
    }
}
console.log(genderHeightAvrge(168, "male"));
// level 3
console.log("level 3");
function reverseNum(x) {
    return (x
        .toString()
        .split('')
        .reverse()
        .join(''));
}
console.log("" + reverseNum(987654321));