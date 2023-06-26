import React from "react";
import occupations from "../data/occupations.json";

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

const About = () => (
  <section id="about">
    <div class="container pt-3">
      <div class="row">
        <div class="col-sm-12 col-md-6">
          <img
            src="https://avatars.githubusercontent.com/u/77214322?v=4"
            class="rounded-circle mx-auto d-block img-fluid"
            alt="..."
            style={{ width: "50%" }}
          ></img>
        </div>
        <div class="col-sm-12 col-md-6">
          <h1>Kenny Ha Ho Lam</h1>
          <hr></hr>
          <p>Software Engineer in Japan, from Hong Kong.</p>
        </div>
      </div>
      <div class="pt-3">
        <OccupationDisplay data={occupations.items} />
      </div>
    </div>
  </section>
);

export default About;
