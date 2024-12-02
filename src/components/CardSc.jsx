import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, Navigation, Mousewheel,Autoplay  } from 'swiper/modules';
import 'swiper/css/scrollbar';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Img1 from "../assets/img8.jpg";
import Img2 from "../assets/img9.jpg";
import Img3 from "../assets/img10.jpg";
import Img4 from "../assets/img11.jpg";
import Card from './Card.jsx';


const CardSc = () => {
  const cards = [
    { img: Img1, title: "Case Study", description: "Explore insights and innovations in IoT, connecting the world of physical and digital.", footer: "Internet of Things" },
    { img: Img2, title: "Case Study", description: "Explore insights and innovations in IoT, connecting the world of physical and digital.", footer: "Internet of Things" },
    { img: Img3, title: "Case Study", description: "Explore insights and innovations in IoT, connecting the world of physical and digital.", footer: "Internet of Things" },
    { img: Img4, title: "Case Study", description: "Explore insights and innovations in IoT, connecting the world of physical and digital.", footer: "Internet of Things" },
    { img: Img2, title: "Case Study", description: "Explore insights and innovations in IoT, connecting the world of physical and digital.", footer: "Internet of Things" },
    { img: Img2, title: "Case Study", description: "Explore insights and innovations in IoT, connecting the world of physical and digital.", footer: "Internet of Things" },
  ];

 
 
  return (
    
    <div className="bg-teal-100 mx-5">
      <Swiper
         modules={[Scrollbar, Navigation, Mousewheel ,Autoplay]} 
        spaceBetween={20}
        slidesPerView={1} // Default for mobile
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 10 }, // Mobile
          768: { slidesPerView: 2, spaceBetween: 15 }, // Tablet
          1024: { slidesPerView: 3, spaceBetween: 20 }, // Desktop
        }}
        
        navigation={{clickable: true }}
        pagination={{clickable: true }}
        scrollbar={{draggable: true }} 
        mousewheel={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
                
         
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <Card
              imgSrc={card.img}
              title={card.title}
              description={card.description}
              footer={card.footer}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardSc;
