
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import VideoPlayer from 'react-video-js-player'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper";

export default function App({ videos }) {
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
                    <div className="videeo" id={item.id}>
                        <video 
                            style={{width: "100%", height: "100%"}} 
                            controls 
                            src={item.media}
                            onPause
                        ></video>
                        <div className="vedios__icons">
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



