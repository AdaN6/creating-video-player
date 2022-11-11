import React from 'react'
import "./video.css";
import VideoSrc from "../assets/video/lando_friday.mp4";
import { DefaultPlayer as Video } from 'react-html5video';
// import 'react-html5video/dist/styles.css'



const VideoPlay = () => {

  return (

    // <Video autoPlay loop >
    //     <source src={ VideoSrc } type='video/webm'/>
    //  </Video>

    <div className="player">
      <video controls>
        <source src={VideoSrc} type="video/mp4" />
        {/* <source src="rabbit320.webm" type="video/webm" /> */}
      </video>
      <div class="controls">
        <button
          class="play"
          data-icon="P"
          aria-label="play pause toggle"
        ></button>
        <button class="stop" data-icon="S" aria-label="stop"></button>
        <div class="timer">
          <div></div>
          <span aria-label="timer">00:00</span>
        </div>
        <button class="rwd" data-icon="B" aria-label="rewind"></button>
        <button class="fwd" data-icon="F" aria-label="fast forward"></button>
      </div>
    </div>
  );
}

export default VideoPlay
