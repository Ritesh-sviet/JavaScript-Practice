// jis code ko chalne me tym lage and baad me function chale

// setTimeout(function(){
//     console.log("2 second ho gaye 😍");
// }, 2000);


// function display(data){
//     console.log(data);
// }

// function action(number1, number2, result)
// {
//     let sum = number1 + number2;
//     result(sum);
//     // result = sum;
// }

// action(10,10,display);



// function display(error,solve)
// {
//     // console.log(error,solve)
//     if (error)
//     {
//         console.log(error);//---------------------
//     }
//     else
//     {
//         console.log(solve)
//     }
// }

function checking(raju, rani, result)
{
    let age = raju + rani;
    if (age>12)
    {
        result('smaller',age) //----------------------
    }
    else
    {
        result(null,age);
    }

}

checking(2, 5, (err,solution) => {
    if(err) console.log(err);
    else console.log(solution);
})




















let days = ["mon","tue","wed","thu","fri"];
let chartdata = [{date:"mon",count:1},{date:"wed", count:3},{date: "fri", count: 5}];

days.forEach(
    (date) => {
        const nut = chartdata.find(
            // (item) => item.date == date
            (item) => item.date == date
        );
        if(!nut)
            chartdata.push({date:date,count:0})
    }
)
console.log(chartdata);