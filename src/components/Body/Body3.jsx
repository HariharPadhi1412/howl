import React from "react";
import "./Body3.css";
import rightarrow from "../Assets/right-arrow.png";
import Collaborations from "../Assets/collaborations.jpg";

function Body3() {
  const imageSources = [Collaborations, Collaborations, Collaborations];

  return (
    <>
      <section className="sect">
        <div>
          <span className="text12">Keep Track</span>
          <span className="text21">of the wolves</span>
          <img src={rightarrow} alt="arrow" className="arrow" />
        </div>
        <div className="image-gallerys">
          <div className="images-row">
            {imageSources.slice(0, 3).map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Image1 ${index + 1}`}
                className="gallery-image"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Body3;
