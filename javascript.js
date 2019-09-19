var colors = ['red', 'green', 'blue', 'yellow', 'orange', 'purple', 'black'];

console.log('Using a for loop');
console.log('---------------------');
for (i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

console.log('---------------------');

console.log('Using a forEach loop');
console.log('---------------------');
colors.forEach(color => {
    console.log(color);
});

console.log('---------------------');


console.log('Rotating the array');
console.log('---------------------');

function rotateArray(array, offset) {
    var newArray = [];
    
    for(i = (array.length-offset); i < array.length; i++) {
        newArray.push(array[i]);
    }

    for(i = 0; i < (array.length - offset); i++) {
        newArray.push(array[i]);
    }

    return newArray;
}

var array = [1,2,3,4,5,6,7,8];

console.log(array);

array = rotateArray(array, 5);

console.log(array);

console.log('---------------------');

console.log('Sum up using .reduce');
console.log('---------------------');

var numbers = [1,2,3,4,5,6,7];

function getSum(total, num) {
    return total + num;
}

var start = 50;
var sum = numbers.reduce(getSum,start);
console.log(numbers + ' - starting from ' + start);

console.log(sum);
console.log('---------------------');

console.log('Generate array')
console.log('---------------------');

function generateArray(number) { 
    var array = [];
    var value = 0;

    array.push(value);
    for(i = 0; i < number; i++) {
        value++;
        array.push(value);
    }

    for(i = 0; i < number; i++) {
        value--;
        array.push(value);
    }

    return array;
}

var generatedArray = generateArray(5);
console.log(generatedArray);
console.log('---------------------');

console.log('Zoo inventory')
console.log('---------------------');

var myZoo = [
    ['King Kong', ['gorilla', 42]],
    ['Nemo', ['fish', 5]],
    ['Punxsutawney Phil', ['groundhog', 11]]
];

function zooInventory(zoo) {
    var strings = []
    for(i = 0; i < zoo.length; i++) {
       strings.push(zoo[i][0] + ' the ' + zoo[i][1][0] + ' is ' + zoo[i][1][1]);
    }
    return strings;
}

var output = zooInventory(myZoo);
console.log(output);
console.log('---------------------');