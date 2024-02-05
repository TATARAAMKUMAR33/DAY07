//3.Print the following details name, capital, flag using forEach function

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    result.forEach(function (country) {
        console.log("Name:", country.name.common);
        console.log("Capital:", country.capital);
        console.log("Flag:", country.flags);

    });
};
