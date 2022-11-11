const weekDay = new Date();

console.log(weekDay);

const day = weekDay.getDay();

console.log(day);

const message = day === 5 ? "it's friday, play the video" : "Not friday :(";

console.log(message);

let dayMessage = "";

console.log(dayMessage);

switch (7) {
  case 0:
    dayMessage = "Sunday";
    break;
  case 1:
    dayMessage = "Monday";
    break;
  case 2:
    dayMessage = "Tuesday";
    break;
  case 3:
    dayMessage = "Wednesday";
    break;
  case 4:
    dayMessage = "Thursday";
    break;
  case 5:
    dayMessage = "Friday";
    break;
  case 6:
    dayMessage = "Saturday";
    break;
  default:
    dayMessage = "Your week is weak";
}

console.log(dayMessage);
