//5.Print the country which uses US Dollars as currency.

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);

    var countries = result.filter(function (country) {
        return country.currencies && country.currencies.USD; 
    });

    console.log(countries);
};
