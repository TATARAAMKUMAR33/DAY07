//1.Solving problems using array functions on the rest countries' data 
//a.Get all the countries from the Asia continent /region using the Filter function


var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);

var countries = result.filter((country) => country.region==="Asia");
     console.log(countries);


 var CountryName =countries.map((country) => country.name.common ); 
console.log(CountryName);
}
