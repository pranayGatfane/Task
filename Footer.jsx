import React from 'react'
import fb from "../assets/facebook.png"
import wp from "../assets/whatsapp.png";
import twitter from "../assets/twitter.jpg";
import yt from "../assets/youtube.png";

export const Footer = () => {
  return (
    <div className='main'>
        <div>
          <p>Home</p>
          <p>About</p>
        </div>

        <div>
        <p>Facebook</p>
        <p>Instagram</p>
        </div>

        <div>
          <p>Microsoft</p>
          <p>Google</p>
        </div>

        <div>
          <img src={wp} alt="whatsapp" />
          <img src={fb} alt="facebook" />
          <img src={yt} alt="yt" />
          <img src={twitter} alt="Twitter" />
        </div>

    </div>
  )
}
