//4.Print the total population of countries using reduce function

var reques = new XMLHttpRequest();

reques.open("GET","https://restcountries.com/v3.1/all");
reques.send();
reques.onload=function(){
    var result=JSON.parse(reques.response);
    var total = result.reduce((total,country) => total + country.population,0);
     console.log(total);
}

