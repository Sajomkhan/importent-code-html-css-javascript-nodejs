
//time greeting code very easy

var myDate = new Date();
var hrs = myDate.getHours();

var greet;

if (hrs < 12)
  greet = 'Good Morning';
if (hrs >= 12 && hrs <= 17)
  greet = 'Good Afternoon';
if (hrs >= 17 && hrs <= 24)
  greet = 'Good Evening';

document.getElementById('greetings').innerHTML='<b>'+greet+'</b>';