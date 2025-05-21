import React from "react";
import "./category.css";
import { category } from "../../assets/data/data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn next-btn" onClick={onClick}>
      <MdNavigateNext className="icon" />
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn prev-btn" onClick={onClick}>
      <GrFormPrevious className="icon" />
    </div>
  );
};

export const Category = () => {
  const navigate = useNavigate();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="category">
      <div className="container">
      {/* <button type="button" class="btn btn-primary">Primary</button> */}

        <Slider {...settings}>
          {category.map((item) => (
            <div className="card" key={item.id} onClick={() => navigate(item.category.toLowerCase())}>
              <div className="card-content">
                <img src={item.cover} alt="cover" className="card-image" />
                <div className="card-overlay">
                  <h4>{item.category.replace("-", " ")}</h4>
                  <p>{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};
