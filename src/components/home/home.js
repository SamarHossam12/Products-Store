
import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import "./home.css"
export default function Home(props) {

  let history = useHistory()

  let goToProducts = () => {
    history.push('/products')
  }

  return (
    <>
      <h1>Welcome to our store</h1>
      <Carousel className="c" >
        <Carousel.Item className="slider" >
          <center>
            <img
              className="d-block w-80 h-100"
              src="https://images-us.nivea.com/-/media/local/in/boday_page/3_banner_3080x806.png?rx=626&ry=0&rw=2063&rh=806"
              alt="First slide"
            />
          </center>


        </Carousel.Item>
        <Carousel.Item>
          <center>
            <img
              className="d-block w-80 h-100"
              src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/beauty-products-1603140461.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*"
              alt="Second slide"
            />
          </center>
        </Carousel.Item>
        <Carousel.Item>
          <center>
            <img
              className="d-block w-80 h-100"
              src="https://media.glamour.com/photos/60a571813b15a07fbfd8629c/master/w_3200,h_1800,c_limit/best%20the%20ordinary%20products.jpg"
              alt="Third slide"
            />
          </center>
        </Carousel.Item>
      </Carousel>
      <center  >
        <div className="btn">
          <button  onClick={goToProducts} >Products</button>
        </div>
        </center>

    </>
  );
}
