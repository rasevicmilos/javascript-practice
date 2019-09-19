var promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let number = Math.random()*5;
        if (number > 2) {
            resolve('Success!');
        } else {
            reject('Error!')
        }
    }, 1000);
})

promise.then(function(value) {
    console.log(value);
}).catch(function(reason) {
    console.log(reason);
});

var promise2 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let number = Math.random()*5;
        if (number > 2) {
            resolve('Success!');
        } else {
            reject('Error!')
        }
    }, 1000);
})

var promise3 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let number = Math.random()*5;
        if (number > 2) {
            resolve('Success!');
        } else {
            reject('Error!')
        }
    }, 1000);
})

Promise.all([promise2, promise3]).then(function(values) {
    console.log(values);
}).catch(function(reason) {
    console.log(reason);
})