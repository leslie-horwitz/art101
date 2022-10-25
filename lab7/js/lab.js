/**
 * Author:    Leslie
 * Created:   10/20/22
 * Art 101 Lab 7
 *
 **/

 //sortUserName - a function that takes user input and sorts the letters
 //of their sortUserName
 function sortUserName() {
   var userName = window.prompt ("Hi. Please tell me your name so I can fix it.");
   console.log("userName=", userName);
   //split string to array
   var nameArray = userName.split ('');
   console.log("nameArray=", nameArray);
   //sort the array
   var nameArraySort = nameArray.sort();
   console.log ("nameArraySort =", nameArraySort);
   //join array back to string
   var nameSorted = nameArraySort.join ('');
   console.log("nameSorted=", nameSorted);
   //note this coule also be done as userNAme.toLower().split("").sort().join("")
   return nameSorted;
 }


 //Output
document.writeln("Oh hey, I've fixed your name:", sortUserName (), "</br>");
