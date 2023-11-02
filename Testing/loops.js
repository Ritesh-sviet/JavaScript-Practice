var array = [1,2,3,4,5,6,7];

// forEach loop only for array
array.forEach(function(params) {
     console.log(params+2);
    })





var obj = {name : "Ritesh",Age:20,domain:true};

//forin loop for object

for(var tiktok in obj)
{
    // console.log(tiktok);
    // console.log(obj);
    // console.log(tiktok[obj]); // undefined
    console.log(tiktok, obj[tiktok]);
    // console.log(tiktok, obj.name);
}
