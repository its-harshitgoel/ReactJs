import React from "react";
import { useState } from "react";

function ImageSlider() {
  const images = [
    "https://img.freepik.com/premium-photo/beautiful-fruits-still-life-with-fruit-photorealistic-illustrations-contemporary-aesthetic_443830-15742.jpg",
    "https://static.vecteezy.com/system/resources/previews/032/730/573/large_2x/trendy-fruit-pattern-made-of-fresh-red-pomegranates-on-light-pastel-green-background-minimal-healthy-food-layout-nature-fruit-concept-pomegranate-aesthetic-background-pattern-photo.JPG",
    "https://img.freepik.com/premium-photo/red-cherry-fresh-fruit-aesthetic-tart-berry-health-benefits-white-background-image-ai-generated-art_853163-1054.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  //setState is asynchronous
  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((images.length + (currentIndex - 1)) % images.length);
  };

  return (
    <div>
      <button onClick={handlePrev}>Prev</button>
      <img
        style={{
          height: 150,
          width: 150,
        }}
        src={images[currentIndex]}
      ></img>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default ImageSlider;
