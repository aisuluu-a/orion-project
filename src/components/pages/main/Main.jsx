//import React, { Component } from "react";
import CarouselBox from "./CarouselBox";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import "./main.scss";

function Main() {
  const animatedTextRef = useRef();

  useEffect(() => {
    init(animatedTextRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      backDelay: 900,
      strings: ["Автоматизированным", "Самостоятельным", "Прибыльным"],
    });
  }, []);

  return (
    <div className="main" id="main">
      <h3 className="typed">
        Мы сделаем ваш бизнес
        <br />
        <span ref={animatedTextRef}></span>
      </h3>

      <CarouselBox />
    </div>
  );
}
export default Main;
