import React from "react";
import Slider from "react-slick";
import "./Star.css"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function PortfolioSlider() {
  // Array of skills with image paths
  const skills = [
    { name: "HTML/CSS/JS", imageUrl: "path/to/html.png" },
    // { name: "CSS", imageUrl: "path/to/css.png" },
    // { name: "JavaScript", imageUrl: "path/to/javascript.png" },
    { name: "React", imageUrl: "path/to/react.png" },
    { name: "Next JS", imageUrl: "path/to/wordpress.png" },
    { name: "React Native", imageUrl: "path/to/wordpress.png" },
    { name: "fastify", imageUrl: "path/to/wordpress.png" },
    { name: "Node.js", imageUrl: "path/to/nodejs.png" },
    { name: "express", imageUrl: "path/to/wordpress.png" },
    { name: "mongo", imageUrl: "path/to/wordpress.png" },
    // { name: "React", imageUrl: "path/to/wordpress.png" },
    { name: "WordPress", imageUrl: "path/to/wordpress.png" },


    // Add more skills as needed
  ];

  // Slick slider settings
  const settings = {
    dots: false, // Shows the dots below the slider for navigation
    infinite: true, // Enables infinite looping of slides
    speed: 500, // Transition speed
    slidesToShow: 3, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at once
    autoplay: true, // Enables autoplay of slides
    autoplaySpeed: 2000, // Time between each slide in autoplay mode
    rtl: true, // Right-to-left sliding direction
    responsive: [
      {
        breakpoint: 1024, // Adjust settings for devices with a max-width of 1024px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, // Adjust settings for devices with a max-width of 600px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="portfolio-slider-container">
      <h2 className="text-align-center">My Skills</h2>
      <Slider {...settings}>
        {skills.map((skill, index) => (
          <div key={index} className="portfolio-card">
            <div className="card-image">
              <img src={skill.imageUrl} alt={skill.name} />
            </div>
            <div className="card-content">
              <h3>{skill.name}</h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default PortfolioSlider;
