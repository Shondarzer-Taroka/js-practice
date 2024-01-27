let storeOfString= new String('hello')
console.log(storeOfString.charAt(4));

console.log(storeOfString[4]);
// console.log(indexOf);


let str1='2+5'
let str2= String('2+5')
let str3= new String('2+5')

console.log(eval(str1) );
console.log(eval(str2) );
console.log(eval(str3.valueOf()) );