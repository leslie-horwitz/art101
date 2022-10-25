/**
 * Author:    Leslie
 * Created:   10/25/22
 * Art 101 Lab 8
 *
 **/
 function isEven(x){
   return (x % 2 ==0);
 }

 //test function
 console.log("Is 1 even?", isEven(1));
 console.log("Is 2 even?", isEven(2));

 array = [100,81,4,16,42,144,10000]
 console.log("My arrary",array)

 var result = array.map(isEven);
 //should return [true, flase, true, true, true, true, ]
 console.log("Test of eveness of array:",result);

 var result = array.map(function(x){
   return x **0.5;
 })
 //should return [10,9,2,4,6.48074069840786,12,100]
 console.log("Squareroot of array:", result);
