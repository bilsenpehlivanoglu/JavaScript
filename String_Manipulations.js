
//Getting an input from user
let name=prompt('Enter your name');

//Using that input
console.log('My name is : '+name);

//length
let str='I love API testing'
let len =str.length;
console.log(len);

//indexof
let indexOfLove=str.indexOf('love');
console.log(indexOfLove);

//slice (start, end(optional))
//substring (start, end(optional)
//if there is no end index, then end index will be the last index
//When slice (-5), returns LAST 5 characters

console.log(str.slice(3)); //ove API testing
console.log(str.slice(-3));//ing
console.log(str.slice(5,1));//" " (empty)






