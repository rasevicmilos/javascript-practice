var array = [1,2,3,4,5];
var square = function(a) { return a * a };

array.map(number => console.log(square(number)));

var sum = function(a,b) { return a + b };

(function() {
    var sumOfNumbers = sum(4, 5);

    console.log(sumOfNumbers);

})();

var timesTwo = (number) => {
    return number * 2;
}

console.log(timesTwo(5));