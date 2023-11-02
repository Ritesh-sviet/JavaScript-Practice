




// jab bhi function as a value use ho tb use ham first class functionkhte hai

var a = function(){
    console.log("Hello champ 😊");
};
a();


// Higher order function
// this is a functions that takes a function as a parameter or return a function or both

function abcd(pal){
    pal();  // yha pe pal ko isiliye call kiya kyunki pal me function bheja
}

abcd( function () {
    var a = 5;
    console.log("ye normal/regular function hai 😊");
    deko = () =>
    console.log("Hello ye arrow function hai 🏹")
    return deko()
}
)