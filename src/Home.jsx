import React from "react";
import "react-responsive-carousel/lib/styles/carousel.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Required CSS

const Home = () => {
  return (
    <div
      className="carousel-container"
      style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}
    >
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        showStatus={false}
        interval={3000}
      >
         <div>
          <img src="/image/slide1.jpg" alt="Slide 1" />
          <p className="legend">Web Developper</p>
        </div>
        <div>
          <img src="/image/slide1.jpg" alt="Slide 1" />
          <p className="legend">Web Developper</p>
        </div>
        <div>
          <img src="/image/slide2.png" alt="Slide 2" />
          <p className="legend">Slide 2 Caption</p>
        </div>
        <div>
          <img src="/image/slide4.png" alt="Slide 3" />
          <p className="legend">Slide 3 Caption</p>
        </div>
        <div>
          <img src="/image/slide5.png" alt="Slide 3" />
          <p className="legend">Slide 3 Caption</p>
        </div>
        <div>
          <img src="/image/slide6.png" alt="Slide 3" />
          <p className="legend">Slide 3 Caption</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Home;
