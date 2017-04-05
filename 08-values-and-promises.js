// Construct a promise chain that returns values to prove to yourself that
// promise handlers will wrap your returned values in promises allowing
// additional chaining.
//
//   * Declare a function `attachTitle` which prepends `'DR. '` to its firstargument and returns the result.
//   * Create a fulfilled promise with a value of `'MANHATTAN'`.
//   * Build a promise chain off the promise we just constructed that first calls`attachTitle` then calls `console.log`.
//
function attachTitle(value) { //
  return 'DR. ' + value;      //prepends...to 'value'
}

Promise.resolve('MANHATTAN') //fulfilled promise with value of:
  .then(attachTitle)         //calls the attachTitle
  .then(console.log);        //calls console.log
