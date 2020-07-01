let numbers = _.range(-50, 30, 4);

numbers = _.shuffle(numbers);

console.log('Shuffling arrey :' + numbers);
console.log('Index of max value :' + _.indexOf(numbers, _.max(numbers)));
console.log('Index of min value :' + _.indexOf(numbers, _.min(numbers)));