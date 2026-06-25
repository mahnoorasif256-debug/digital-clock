setInterval(function(){
    let date = new Date();

let currenthour = date.getHours();
let hours = String(currenthour).padStart(2, '0')
let currentMinutes = date.getMinutes(); 
let minutes = String(currentMinutes).padStart(2, '0');
let currentseconds = date.getSeconds();
let seconds = String(currentseconds).padStart(2, '0')

console.log(hours);
console.log(seconds);
console.log(minutes);



let hour = document.getElementById("time");
hour.innerText = hours ;

let mint = document.getElementById("min");
mint.innerText = minutes ;

let secs = document.getElementById("sec");
secs.innerText = seconds ;

let currentDate = date.toLocaleDateString("en-US", {
    weekday: "long",  
    month: "long",   
    day: "numeric",  
    year: "numeric"   
});

var change = document.getElementById("date");
change.innerText = currentDate;

},1000)