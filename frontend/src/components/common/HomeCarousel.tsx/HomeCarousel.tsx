import { Image } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

function HomeCarousel() {
  return (
    <Carousel data-bs-theme="dark" interval={2000} style={{ marginTop: 10 }}>
      <Carousel.Item>
        <Image
          src="https://img-lcwaikiki.mncdn.com/Resource/Images/Banner/eegen-3101-slider4.jpg"
          style={{ width: "100%" }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          src="https://img-lcwaikiki.mncdn.com/Resource/Images/Banner/25-egen-3101-slider10.jpg"
          style={{ width: "100%" }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          src="https://img-lcwaikiki.mncdn.com/Resource/Images/Banner/25-egen-3101-slider3.jpg"
          style={{ width: "100%" }}
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;
