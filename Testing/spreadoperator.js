// Spread operator is used to copy the data to one array or object to another one

// Let's first take the example of Array

var array = [1,2,3,4,5,6,7];
var copied_array = [...array];
console.log(copied_array); // The result is : [1,2,3,4,5,6,7] 

var obj = {name : "Ritesh",Age:20,domain:true};
var copied_obj = {...obj};
 console.log(copied_obj);   


