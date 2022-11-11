
import Video from "./components/video"
import "./main.css"

function App() {

  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];


  const weekDay = new Date();

  console.log(weekDay);

  const day = weekdays[weekDay.getDay()];

  console.log(day);

  

  return (
    <div>
      <div className="body-container">
        <h1>Today is</h1>
        {day === "Friday" ? (
          <div className="body-container">
            <h1>you will find out from the video</h1> <Video />
          </div>
        ) : (
          <h1>{day} FCK OFF!</h1>
        )}
      </div>
    </div>
  );
}

export default App;
