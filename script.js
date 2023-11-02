//  //1.use the rest countries API URL https://restcountries,com/v3.1/all and display all the country flags in the console
 
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

var request1 = new XMLHttpRequest();
request1.open("GET", "https://restcountries.com/v3.1/all",true)
request1.send();
request1.onload = function(){
    var result1=JSON.parse(request1.response);
    console.log(result1);
    
    for(var i = 0;i<result1.length;i++){
        console.log(result1[i].name.common,result1[i].region,result1[i].subregion,result1[i].population);
    }
} 
//3.how to compare two JSON have the same properties without order?
const obj1 = {name: "person1",age: 5};
const obj2 = {age: 5,name: "person1"};
let json1 = JSON.stringify(obj1);
console.log(json1);
let json2 = JSON.stringify(obj2);
console.log(json2);
if(json1===json2){
  console.log("both are equal");
}
else{
  console.log("both are different");
}