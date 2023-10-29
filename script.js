 //1.use the rest countries API URL https://restcountries,com/v3.1/all and display all the country flags in the console
 
 var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all",true)
request.send();
request.onload = function(){
    var result=JSON.parse(request.response);
    console.log(result);
    
    for(var i = 0;i<result.length;i++){
        console.log(result[i].fifa,result[i].area);
    }
} 
//2.use the rest countries API URL https://restcountries,com/v3.1/all and display all the country name,region,sub-regionand population in the console.

var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all",true)
request.send();
request.onload = function(){
    var result=JSON.parse(request.response);
    console.log(result);
    
    for(var i = 0;i<result.length;i++){
        console.log(result[i].name.common,result[i].region,result[i].subregion,result[i].population);
    }
} 
//3.how to compare two JSON have the same properties without order?

var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };


    console.log(obj1);
    console.log(obj2);

//4.Declare four variables without assigning values and print them in console
var variable1;
let variable2;
let variable3;
var variable4;

console.log("variable1:", variable1);
console.log("variable2:", variable2);
console.log("variable3:", variable3);
console.log("variable4:", variable4);
