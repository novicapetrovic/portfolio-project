import React from "react";
import "./testimonials.css";
import AVTR1 from ".//../../assets/avatar1.jpg";
import AVTR2 from ".//../../assets/avatar2.jpg";
import AVTR3 from ".//../../assets/avatar3.jpg";
import AVTR4 from ".//../../assets/avatar4.jpg";

import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination, Navigation} from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const data = [
  {
    id: 1,
    name: "Ernest Achiever",
    avatar: AVTR1,
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    id: 2,
    name: "Ernest Achiever",
    avatar: AVTR2,
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    id: 3,
    name: "Ernest Achiever",
    avatar: AVTR3,
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
  {
    id: 4,
    name: "Ernest Achiever",
    avatar: AVTR4,
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination, Navigation]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{clickable: true}}
      >
        {data.map(({name, avatar, review}, index) => {
          return (
            <SwiperSlide>
              <article key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="Avatar one" />
                </div>
                <h5 className="client__name">{name}</h5>
                <small className="client__review">{review}</small>
              </article>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
