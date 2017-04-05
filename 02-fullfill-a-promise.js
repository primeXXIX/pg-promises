// ## Task
//
// Create a promise. Have it fulfilled with a value of 'FULFILLED!' in
// executor after a delay of 300ms, using setTimeout.
//
// Then, print the contents of the promise after if has been fulfilled by passing
// console.log to then.
//
// ## Boilerplate
//
//     'use strict';
//
//     var promise = new Promise(function (fulfill, reject) {
//       // Your solution here
//     });
//
//     // Your solution here

let delay_Promise = new Promise(function(fulfill, reject) {

  setTimeout(function () {
      fulfill('FULFILLED!');
  }, 300);
});

delay_Promise.then(console.log);
