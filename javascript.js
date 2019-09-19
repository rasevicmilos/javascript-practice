var person = {
    firstName: 'Milos',
    lastName: 'Rasevic',
    age: 22
}

var personAsJSON = JSON.stringify(person);

var personAsObj = JSON.parse(personAsJSON);

console.log('Person as JSON');
console.log('-------------------------------------------------');
console.log(personAsJSON);
console.log('-------------------------------------------------');
console.log('Person as Object');
console.log('-------------------------------------------------');
console.log(personAsObj);
console.log('-------------------------------------------------');

var jsNumbers = [1,2,3,4,5,6,7];

var JSON_numbers = "[ 1, 2, 3, 4, 5, 6, 7 ]";

var JSON_to_JS_numbers = JSON.parse(JSON_numbers);

console.log('Loop over parsed numbers');
console.log('-------------------------------------------------');

for (number in JSON_to_JS_numbers) {
    console.log(JSON_to_JS_numbers[number]);
}
console.log('-------------------------------------------------');