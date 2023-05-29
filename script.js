// Write a function called printGreetingwith a parameter namethat returns a greeting with the argument interpolated into the greeting.

// let printGreeting = function(name) {
//   return 'Hello there, ' + name + '!'
// }

// console.log(printGreeting("Slimer"))

// Write a function reverseWordOrderthat accepts a single argument, a string. The function should return a string with the order of the words reversed. Don't worry about punctuation.

let str = 'Ishmael me call'
console.log(str.split(/\s/).reverse().join(' '))