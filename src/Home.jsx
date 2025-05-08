import React from "react";
import "react-responsive-carousel/lib/styles/carousel.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import slide1 from "../src/image/slide1.jpg";
import slide2 from "../src/image/slide2.png";
import slide4 from "../src/image/slide4.png";
import slideS from "../src/image/slideS.jpg";
import slide6 from "../src/image/slide6.png";

const Home = () => {
  return (
    <div
      className="carousel-container"
      style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}
    >
      <div>
        <h3>Knowledges</h3>
      </div>
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        showStatus={false}
        interval={3000}
      >
        <div>
          <img src={slide1} alt="web" />
          {/* <img src="/public/image/slide1.jpg" alt="web" /> */}
          <p className="legend">Web Developper</p>
        </div>
        <div>
          <img src={slide2} alt="web" />
          {/* <img src="/image/slide2.jpg" alt="Slide 2" /> */}
          <p className="legend">.NET</p>
        </div>
        <div>
          <img src={slide4} alt="web" />
          {/* <img src="/image/slide4.png" alt="Slide 4" /> */}
          <p className="legend">REACT</p>
        </div>
        <div>
          <img src={slideS} alt="web" />
          {/* <img src="/image/slide5.png" alt="Slide 5" /> */}
          <p className="legend">SASS</p>
        </div>
        <div>
          <img src={slide6} alt="web" />
          {/* <img src="/image/slide6.png" alt="Slide 6" /> */}
          <p className="legend">HTML</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Home;
