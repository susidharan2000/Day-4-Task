//Task 1
//1)
//a=>Print Odd Numbers in an Array.
var arr = [1,2,3,7,9,0,5,54,56,76,4,10,77,87,99]
result = [];
const odd  = function (arr){
    for(let i = 0;i< arr.length;i++){
        if(arr[i] % 2 !== 0){
             result.push(arr[i]);
        }
    }
    return result;
}
console.log(`Odd Numbers: ${odd(arr).join(" ")}`);

// b=>Convert all strings to tiltle cap in a string array.

var str1 = "susidharan palraj";
(function(str){
    const newstr = str.split(' ').map((w)=> w[0].toUpperCase()+ w.substring(1).toLowerCase())
    console.log(newstr.join(" "));
})(str1);

// c=>sum of all numbers in array.

var arr3 =[1,2,3,4,5,6,7,8,9,10];
addFun = function(arr){
    let sum = 0;
    arr.map((element)=>sum+=element);
    return sum;
}
console.log(`Sum Of Array: ${addFun(arr3)}`);

// d=> Return all prime number in array

var arr4 = [...Array(100).keys()];
var result = [];
var primeNumbers = function(num){
    if(num <= 1){
        return false;
    }
    for(let i = 2;i< num/2;i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;
} 
var display = function(){
    for(let i = 0;i< arr4.length;i++){
        if(primeNumbers(arr4[i])){
            result.push(arr4[i]);
        }
    }
    return result;
}
console.log("PrimeNumber Array:",display().join(' '));

//e=>return all palindrome in an array.
var arr5 = ["madam","daa","dad","cop","susi","mam"];
var result2 = [];
const Palindrome = function(str){
return str === str.split("").reverse().join("");
} 
var display2 = function(){
    for(let i = 0;i< arr5.length;i++){
        if(Palindrome(arr5[i])){
            result2.push(arr5[i]);
        }
    }
    return result2;
 }
console.log(`Palindrome Array: ${display2().join(" ")}`);

//f=> return median of two sorted array of same size.

var arr6 = [3,4,5,6];
var arr61 = [2,3,4,5]; 
const median  = function(arr1,arr2){
   var mid = Math.round((arr1.length/2)-1);
    if(arr1.length % 2 === 0){
        console.log (`Median: ${((arr1[mid]+arr1[mid+1])/2)+((arr2[mid]+arr2[mid+1])/2)}`)
    }else if(arr1.length % 2 !== 0){
        console.log("Median: "+(arr1[mid]+arr2[mid])/2);
    }
}
median(arr6,arr61);

//g=>Remove Duplicates from an array.
var arr7 = [1,2,3,1,2,2,2,3,4,5,4];
(function(arr){
    nodup = arr.filter((item,index)=>(arr.indexOf(item) === index));
    console.log("No Duplicates :"+nodup.join(" "));
})(arr7);

//h=>rotate an array by k times.
var arr8 = [1,2,3,4,5,6,7];
var k= 8;
(function(k,arr){
    if(k>=arr.length){
        k = k % arr.length;
    }
    for(let i = 0;i<k;i++){
            arr.unshift(arr.pop());
    }
   console.log("Rotate K times: "+arr);
})(k,arr8)

console.log("---------------------------------");
console.log("TASK: 2 (Arrow Function)");
//Task 2
//2)
//a=>Print Odd Numbers in an Array.

var arr9 = [1,2,3,7,9,8,10,11,12,13,14,15,16,17,18,191]
var result3 = [];
const oddNum  = (arr)=>{
    for(let i = 0;i< arr.length;i++){
        if(arr[i] % 2 !== 0){
             result3.push(arr[i]);
        }
    }
    return result3;
}
console.log(`Odd Numbers: ${oddNum(arr9).join(" ")}`);

// b=>Convert all strings to tiltle cap in a string array.

var str2 = "hello world bro"
const tocap2 = (str)=>{
    var newstr2 = str.split(" ").map(w=>w[0].toUpperCase() + w.substring(1).toLowerCase());
    console.log(newstr2.join(" "))
}
tocap2(str2);

// c=>sum of all numbers in array.

var arr11 =[1,2,3,4,5];
addFun = (arr)=>{
    let sum = 0;
    arr.map((element)=>sum+=element);
    return sum;
}
console.log(`Sum Of Array: ${addFun(arr11)}`);

// d=> Return all prime number in array

var arr12 = [...Array(50).keys()];
var result4 = [];
var primeNumbers = (num)=>{
    if(num <= 1){
        return false;
    }
    for(let i = 2;i< num/2;i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;
} 
var display3 = ()=>{
    for(let i = 0;i< arr12.length;i++){
        if(primeNumbers(arr12[i])){
            result4.push(arr12[i]);
        }
    }
    return result4;
}
console.log("PrimeNumber Array:",display3().join(' '));

//e=>return all palindrome in an array.
var arr13 = ["folower","daa","mom","cop","susi","mam","sus"];
var result5 = [];
const Palindromes = (str)=>{
return str === str.split("").reverse().join("");
} 
var display4 = ()=>{
    for(let i = 0;i< arr13.length;i++){
        if(Palindromes(arr13[i])){
            result5.push(arr13[i]);
        }
    }
    return result5;
 }
console.log(`Palindrome Array: ${display4().join(" ")}`);







