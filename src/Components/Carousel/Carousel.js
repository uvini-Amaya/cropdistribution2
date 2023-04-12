import Carousel from 'react-bootstrap/Carousel';

import img1 from "../../Images/img1.jpg";
import img2 from "../../Images/img2.jpg";
import img3 from "../../Images/img3.png";
import img221 from "../../Images/img221.jpg" ;
import img222 from "../../Images/img222.jpg";
import img224 from "../../Images/img224.jfif";
import img223 from "../../Images/img223.jpg";

import "./Carousel.css";

function Carousel2() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="slide1"
          src={img221}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='slidetext'><b>Great Oppotunities For You</b></h3>
          <p className='slidetext'>Shouts pleasure that you would experience with this and more.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="slide2"
          src={img223}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className='slidetitle'><b></b></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="slide3"
          src={img222}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className='slidetitle'><b></b></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousel2;