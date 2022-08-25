// 1. Reverse a String:


 
// 1. Reverse a String:
const foo = "JAVASCRIPT";

function reverseStr(foo) {
    let output = '';
    for (let i = foo.length - 1; i >= 0; i--) {
        output = output + foo[i]
    }
    return output;
}
console.log(reverseStr(foo));



// 2. Find the longest Word in a String:

const mystring = "Pune Taking cue from nature, animal communicator decodes";

function longestword(msg) {
    msg = msg.split(' ');
    let longest = msg.reduce((current, previous) => {
        return current.length > previous.length ? current : previous;

    }
    );
    return longest;
}
const result = longestword(mystring)
console.log(result);



// 3. Match Literal Strings:

let reg = /dog/;
let s = "jems has a pet dog";
let result2 = reg.test(s);
console.log(result2);

// 4. Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending:

function turncatestring(str, num) {
    if (str.length > num) {
        return str.slice(0, num) + "...";
    }
    else {
        return str;
    }
}
console.log(turncatestring("i'm afreen & i'm doing javascripts questions?", 15));



// 5. Check if a string ends with the given target string without using endsWith() method:

function confirmEnding(str, target) {
    let result = str.slice(-target.length);
    if (result == target) {
        return true
    }
    else {
        return false
    }
}

console.log(confirmEnding("java python js", "java"));



// 6. Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case:

const str1 = ("a sentence is a set of words that is complete in itself");

function touppercase(str) {
    return str.split(" ").map((value) => value.slice(0, 1).toUpperCase() + value.slice(1)).join(" ")

}

console.log(touppercase(str1));



// 1. Sum All Numbers in a Range
// You will pass an array of two numbers. 
// Return the sum of those two numbers plus the sum of all the numbers between them. 
// The lowest number will not always come first:

const arr = [5, 10];

function sumAll(arr) {
    let fullArr = [];
    for (let i = arr[0]; i <= arr[1]; i++) {
        fullArr.push(i);
    }
    let sum = fullArr.reduce((plus, currentvalue) => { return plus + currentvalue });
    return sum;
}

console.log(sumAll(arr));




//  2. Diff Two Arrays
//  Compare two arrays and return a new array with any items only found in one of the two given arrays,
//  but not both. In other words, 
//  return the symmetric difference of the two array:


const arrays1 = [1, 2, 3, 6]
const arrays2 = [1, 7, 8, 4, 3]
function diffArrays(arrays1, arrays2) {
    let newArr = arrays1.concat(arrays2);
    return newArr.filter(data => !(arrays1.includes(data)
        && arrays2.includes(data)));
}
console.log(diffArrays(arrays1, arrays2));




// 3. Sum All Odd Fibonacci Numbers
// Given a positive integer num,
// return the sum of all odd Fibonacci numbers that 
// are less than or equal to num:


function sumfibs(num) {
    let a = 1;     //fibonacci series ki actual  list
    let b = 1;
    let sum = 1;

    while (b <= num) {
        if (b % 2 == 1) {
            sum = sum + b;
        }
        let temp = b;
        b = a + b;
        a = temp;
    }
    return sum;
}
console.log(sumfibs(13));

// 3. Fibonacci Numbers:(Series)

const fib = (n) => {
    const fibarrays = [0, 1];

    for (var i = 2; i < n; i++) {
        fibarrays.push(fibarrays[i - 2] + fibarrays[i - 1]);


    }
    return fibarrays;
}
console.log(fib(10));





const myset = new Set(['afreen']);
myset.add('that');
myset.add(23);
myset.add('harry');
myset.add(true);
myset.add('that2');
console.log(myset); 

let myset2 = new Set([1, 34, true, "afreen"])
// console.log(myset2.has(34)); 
console.log(myset2.size); 
console.log(myset2.delete("afreen")); 
console.log(myset2.clear()); 


let myvalueArray = Array.from(myset);
console.log(myvalueArray); 
    


//let arr = [1,2,3,4,5,6]
//console.log(arr.length);
//console.log(arr.slice(2,-3));

