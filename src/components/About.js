import React, { useState } from "react";
import occupations from "../data/occupations.json";

const images = [
  "/PFP.jpeg",
  "/PFP2.jpg",
  "/PFP3.jpg",
  "/PFP4.jpg",
  "/PFP5.JPG",
  "/PFP6.JPG",
  "/PFP7.JPG",
  "/PFP8.JPG",
];

const getRandomImage = (currentImage) => {
  let newImage;

  // Make sure newImage is different from the current image
  do {
    newImage = images[Math.floor(Math.random() * images.length)];
  } while (newImage === currentImage && images.length > 1);

  return newImage;
};

const OccupationDisplay = ({ data }) => {
  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th>Period</th>
            <th>Education / Occupation</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.periodOfTime}</td>
              <td>{item.occupation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const About = () => {
  const [currentImage, setCurrentImage] = useState(getRandomImage());

  const handleImageClick = () => {
    setCurrentImage((prevImage) => getRandomImage(prevImage));
  };

  return (
    <section id="about">
      <div className="container pt-3">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <img
              src={currentImage}
              className="rounded-circle mx-auto d-block img-fluid"
              alt="..."
              style={{ width: "50%" }}
              onClick={handleImageClick}
            ></img>
          </div>
          <div className="col-sm-12 col-md-6">
            <h1>Kenny Ha Ho Lam</h1>
            <hr></hr>
            <p>Software Engineer in Japan, from Hong Kong.</p>
          </div>
        </div>
        <div className="pt-3">
          <OccupationDisplay data={occupations.items} />
        </div>
      </div>
    </section>
  );
};

export default About;
