var temP = prompt("Please Enter Your Temperature : ");

var convT = 9/5*temP+32;

document.getElementById("data").innerHTML = "Your Typed Temperature: " + temP + " Celsius" ;

document.getElementById("temp").innerHTML = "Temperature: " + convT + " Degree" ;

alert("Fahrenheit: " + convT);

console.log("Task Complete!");

