// a. Get all the countries from Asia continent /region using Filter function

const request = new XMLHttpRequest();

request.open("GET", "https://restcountries.com/v3.1/all", true)

request.send();

request.onload=function(){

var data = request.response;

var result = JSON.parse(data)

var res = result.filter((ele)=>ele.region==="Asia")

var final= res.forEach((ele)=>console.log(ele.name.common))
}

// Get all the countries with a population of less than 2 lakhs using Filter function

const pop = new XMLHttpRequest();

pop.open("GET", "https://restcountries.com/v3.1/all", true)

pop.send();

pop.onload=function(){

var data = pop.response;

var result1 = JSON.parse(data)

var res = result1.filter((ele)=>ele.population)

var final1= res.forEach((ele)=>console.log( ele.population,ele.population<200000)) 
}

// Print the following details name, capital, flag, using forEach function  capital ,flags.svg

const kodi = new XMLHttpRequest();

kodi.open("GET", "https://restcountries.com/v3.1/all", true)

kodi.send();

kodi.onload=function(){

var data = kodi.response;          

var result = JSON.parse(data)

var res = result.filter((ele)=>ele.capital)

var final= res.forEach((ele)=>console.log(ele.flags.svg,ele.capital,ele.name.common))
}

// Print the total population of countries using reduce function

const count = new XMLHttpRequest();

count.open("GET", "https://restcountries.com/v3.1/all", true)

count.send();

count.onload=function(){

var data = count.response;          

var a = JSON.parse(data);

var res1 = a.reduce((acc,cv)=>acc+cv.population,0)
console.log(res1);

}

// Print the country that uses US dollars as currency

const curr = new XMLHttpRequest();

curr.open("GET", "https://restcountries.com/v3.1/all", true)

curr.send();

curr.onload=function(){

var data = curr.response;          

var output = JSON.parse(data);

var currency = output.filter((value)=> value.currencies && value.currencies.USD)
 currency.forEach((value)=>console.log(value.name.common))
}