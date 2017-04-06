// promse.then(null, function (err) {
//   console.error('there is an error!');
//   console.error(err.message);
// })
//
// //handle the rejection and not success
// promise.catch(function (err) {
//   console.error('there is an error');
//   console.error(err.message);
// })
//
// {//standard promise constructor
// var promise = new Promise(function(fulfill, reject) {
//   fulfill('secret value')
// });
//
// //Likewise...
// var promise = new Promise(function(fulfill, reject) {
//   reject(new Error('secret value'))
// });
//
// var promise = Promise.reject(new Error('secret value'));

let promise = Promise.reject(new Error('secret stuff'));

promise.catch(function (err) {
  console.error('some error');
  console.error(err.message);
})
