// ctrl + / daje nam komentarz
// shift + alt + strzałka w dół kopiuje linijkę
// clg = console.log(object);

/* skrypt do wyświetlania Userowi przeglądającemu stronę
odpowiedniego powitania
w zależności od czasu systemowego jego komputera */

let today = new Date();
let hourNow = today.getHours();
let greeting;

if (hourNow > 20)
{
    greeting = "Good Night!";
}
else if (hourNow > 19)
{
    greeting = "Good Evening!";
}
else if (hourNow > 17) 
{
    greeting = "Good Afternoon!";
}
else if (hourNow > 9)
{
    greeting = "Good Morning!";
}
else 
{
    greeting = "Welcome!"
}
document.write("<h3><em>" + greeting + "</em></h3>");