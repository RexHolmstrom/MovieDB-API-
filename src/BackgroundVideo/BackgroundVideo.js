import React from 'react';
import videoSource from '../video/Boat.mp4'
import '../BackgroundVideo/BackgroundVideo.css'


const BackgroundVideo = () => {
    const videoSource = "Boat.mp4"
    return (
      <div className='BackgroundVideo'>
        <video video autoplay muted loop autoplay="true">
            <source src={require('../video/Boat.mp4')}/>
        </video>
      </div>
    )
  }

  export default BackgroundVideo