import React from "react";
import "./Body2.css";
import Collaborations from "../Assets/collaborations.jpg";

function Body2() {
  const imageSources = [
    Collaborations,
    Collaborations,
    Collaborations,
    Collaborations,
    Collaborations,
    Collaborations,
    Collaborations,
    Collaborations,
    Collaborations,
    Collaborations,
    Collaborations,
    Collaborations,
  ];

  return (
    <>
      <section>
        <div className="text1">
          <span className="textData"> Clients we work with</span>
        </div>

        <div className="image-section">
          <div className="image-gallery-container">
            <div className="image-gallery-row first-row">
              {imageSources.slice(0, 6).map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Image1 ${index + 1}`}
                  className="gallery-image"
                />
              ))}
            </div>
            <div className="image-gallery-row second-row">
              {imageSources.slice(6, 12).map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Image1 ${index + 7}`}
                  className="gallery-image"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Body2;
