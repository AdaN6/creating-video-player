
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
          <div className="not_friday_container">
            <h1 className="not_friday_text">{day} ...</h1>
            <h2>nope, not today... no video sorry!</h2>
            <iframe
              src="https://giphy.com/embed/MuztdWJQ4PR7i"
              width="410"
              height="480"
              frameBorder="0"
              class="giphy-embed"
              allowFullScreen
            ></iframe>
            <p>
              <a href="https://giphy.com/gifs/MuztdWJQ4PR7i">via GIPHY</a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
