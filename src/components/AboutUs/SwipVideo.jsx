
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import VideoPlayer from 'react-video-js-player'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";
import { useState } from "react";
import { useRef } from "react";

export default function App({ videos }) {

  const [video1, setVideo1] = useState(true)
  const [video2, setVideo2] = useState(false)
  const [video3, setVideo3] = useState(false)
  const [video4, setVideo4] = useState(false)
  const [video5, setVideo5] = useState(false)
  const [video6, setVideo6] = useState(false)


  const handlerVideo = (id) => {
      if(id === 1) {
        setVideo1(true)
        setVideo2(false)
        setVideo3(false)
        setVideo4(false)
        setVideo5(false)
      }else if(id === 2) {
        setVideo1(false)
        setVideo2(true)
        setVideo3(false)
        setVideo4(false)
        setVideo5(false)
      }else if(id === 3) {
        setVideo1(false)
        setVideo2(false)
        setVideo3(true)
        setVideo4(false)
        setVideo5(false)
      }else if(id === 4) {
        setVideo1(false)
        setVideo2(false)
        setVideo3(false)
        setVideo4(true)
        setVideo5(false)
      }else if(id === 5) {
        setVideo1(false)
        setVideo2(false)
        setVideo3(false)
        setVideo4(false)
        setVideo5(true)
      }
  }

  const vid1 = video1 ? onplay : onpause;
  const vid2 = video2 ? onplay : onpause;
  const vid3 = video3 ? onplay : onpause;
  const vid4 = video4 ? onplay : onpause;
  const vid5 = video5 ? onplay : onpause;

  const vidd1 = video1 ? "display: block" : "display: none";
  const vidd2 = video2 ? "display: block" : "display: none";
  const videoPlayer = document.querySelectorAll(".video")


  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={50}
        className="mySwiper"
      >
        {videos.map((item, i) => {
            return (
                <SwiperSlide>
                    <div className="videeo">
                        <video 
                        className="video"
                            onClick={() => handlerVideo(item.id)}
                            id={item.id}
                            style={{width: "100%", height: "100%"}} 
                            controls 
                            src={item.media}
                            vid1
                            vid2
                            vid3
                            vid4
                            vid5
                        ></video>
                        <div className="vedios__icons" id={item.id} style = {{vidd1, vidd2}}>
                            <div className="vedios__animat"></div>
                            <i className='bx bx-play-circle'></i>
                        </div>
                    </div>
                </SwiperSlide>
            )
        })}
      </Swiper>
    </>
  );
}



