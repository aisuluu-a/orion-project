import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import "./CarouselBox.scss";

const slides = [
  {
    id: 1,
    title: "Slide #1",
    src: "https://i.pinimg.com/originals/df/62/e0/df62e0c2de432a875232774d8109a129.jpg",
    desc: "BUILDING #1",
  },
  {
    id: 2,
    title: "Slide #2",
    src: "https://isconspb.ru/wp-content/uploads/facade-building-glass-bottom-view-sky-4k_1538066457-768x432.jpg",
    desc: "BUILDING #2",
  },
];

export default class CarouselBox extends Component {
  render() {
    return (
      <Carousel>
        {slides.map((slide, idx) => {
          return (
            <Carousel.Item key={idx}>
              <img className="d-block w-100 " src={slide.src} alt="sli" />
              <Carousel.Caption>
                <div className="descr">
                  <h3>{slide.title}</h3>
                  <p>{slide.desc}. </p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
        ;
      </Carousel>
    );
  }
}
