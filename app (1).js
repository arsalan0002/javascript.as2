var city0 = "Karachi";
var city1 = "Islamabad";
var city2 = "Lahore";
var city3 = "Peshawar";
var city4 = "faialabad";
var city5 = "Sawaat";

console.log(city0);
console.log("Welcome to " + city0);

var cities = ["Karachi", "Islamabad", "Lahore", "Peshawar", "Faialabad", "Sawaat"];

console.log(cities[0]);
console.log("WELCOME TO" + cities [0]);

var mixedArray = [1, "Bob", "Now is", true];
console.log(mixedArray[0]);

var pets = [];
pets[0] = "dog";
pets[1] = "cat";
pets[2] = "bird";
pets[3] = "ox";

 alert(pets[1]);

 pets[3] = "mouse";
 pets[6] = "sheep";

 alert(pets[3]);

pets[3] = "mouse";
pets[4] = "fish";
pets[5] = "gerbil";
pets[6] = "sheep";

 alert(pets[4]);

pets.push("fish", "ferret");
console.log(pets);

 pets.pop();
console.log(pets);

pets.shift();
console.log(pets);

pets.unshift("fish", "ferret");
console.log(pets);

pets.splice(2, 2, "chick", "duck", "butterfly");
console.log(pets);

pets.splice(2, 0, "chick", "duck", "butterfly");
console.log(pets);

pets.splice(2, 2);
console.log(pets);

var cleanestCities = ["Karachi", "Lahore", "Islamabad", "Peshawar", "Multan"];
var cityToCheck = prompt("write a city name")

if (cityToCheck == cleanestCities[0]) {
    alert("It's one of the cleanest cities");
 } 
 else if (cityToCheck == cleanestCities[1]) {
    alert("It's one of the cleanest cities");
 } 
 else if (cityToCheck == cleanestCities[2]) {
     alert("It's one of the cleanest cities");
 } 
  else if (cityToCheck == cleanestCities[3]) { 
     alert("It's one of the cleanest cities");
 } 
  else if (cityToCheck == cleanestCities[4]) {
     alert("It's one of the cleanest cities");
 } 
  else { alert("It's not on the list");
 }

var cityToCheck = prompt("write a city name")
for (var i = 0; i <= 4; i++) { 
    if (cityToCheck === cleanestCities[i]) {
    alert("It's one of the cleanest cities");
 }
}

//////TABLE
for(var i = 1; 1 <= 10; i++){
    console.log("2 x" + i + "=" + i*2);
}

var table = prompt("Number");
for(var i = 1; 1 <= 10; i++){
    console.log(table + "x" + i + "=" + i*table);
}


var matchFound = prompt("Match");
for (var i = 0; i <= 4; i++);{
    if (cityToCheck == cleanestCities[i]) {
     matchFound = "yes";
         alert("It's one of the cleanest cities"); }
     }
     if (matchFound == "no") { 
        alert("It's not on the list");
    }

    //Boolean

    var matchFound = prompt("Match");
for (var i = 0; i <= 4; i++);{
    if (cityToCheck == cleanestCities[i]) {
    matchFound == "true";
         alert("It's one of the cleanest cities"); 
        }
    }

     if (matchFound == "false") { 
        alert("It's not on the list");
    }

var matchFound = prompt("Match");
 for (var i = 0; i <= 4; i++); {
 if (cityToCheck === cleanestCities[i]) {
     matchFound = true; 
     alert("It's one of the cleanest cities");
    break; 
    } 
} 
 if (matchFound === false) { 
    alert("It's not on the list"); 
}