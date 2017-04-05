// ## Task
//
// Create a promise that after a delay of 300ms, rejects with an Error object.
// The Error object should be constructed with parameter 'REJECTED!', which is
// the textual message of the error.
//
// Create a function onReject to print error.message using console.log. Pass
// this function as a rejection handler to the then method of your promise.

let reject_Promise = new Promise(function(resolve, reject) {
  setTimeout(function () {
    reject(new Error('REJECTED!'))
  }, 300);
});

function onReject(error) {
  console.log(error.message);
}

reject_Promise.then(null, onReject);
