//2.Get all the countries with a population of less than 2 lakhs using Filter function

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);

var countries = result.filter((country)=> country.population>200000);
     console.log(countries);

     var CountryName =countries.map((country) => country.name.common ); 
     console.log(CountryName);
     }
