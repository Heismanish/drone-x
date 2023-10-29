import { slides } from "../Data/CarouselData.json";
import "../Styles/Carousel.css"; // Import your CSS file
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { AiFillLinkedin } from 'react-icons/ai';
import {FiMail} from "react-icons/fi"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function HomeCarousel() {
  const [currSlide, setCurrSlide] = useState(0);

const nextSlide = ()=>{
  setCurrSlide(currSlide === slides.length-1? 0: currSlide+1)
}
const prevSlide = ()=>{
  setCurrSlide(currSlide === 0 ?slides.length-1: currSlide-1)
}

useEffect(() => {
  const interval = setInterval(nextSlide, 5000); // Change slide every 4 seconds (4000 milliseconds)

  // Clear the interval when the component is unmounted or the slide changes
  return () => clearInterval(interval);
}, [currSlide]);

return (
    <div className="carousel">
      <div className="home-head">
        <h1 >Welcome to the new Era</h1>
        <p>We create drone for this new era</p>
        <Link to="/about"> <button className="learnBtn">Learn More</button></Link>
      </div>
      <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevSlide}/>
      {slides.map((slide, index) => (
        <img
          key={index}
          src={slide.src}
          alt={slide.alt}
          width="100vw"
          height="100vh"
          className={currSlide === index ? "slide" : "slide-hidden"}
        />
      ))}
      <BsArrowRightCircleFill className="arrow arrow-right" onClick={nextSlide}/>
      <span className="indicators">
        {slides.map((slide, index) => {
          return (
            <p
              key={index}
              onClick={()=>{setCurrSlide(index)}}
              className={
                currSlide === index
                  ? "indicator"
                  : "indicator indicator-inactive"
              }
            ></p>
          );
        })}
      </span>

      {/* Socials */}
      <div className="socials">
        <AiFillLinkedin className="logo"/>
        <FiMail className="logo"/>

      </div>

    </div>
  );
}

export default HomeCarousel;
