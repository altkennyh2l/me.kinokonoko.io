import React from "react";
import langSkills from "../data/langSkills.json";
import qualification from "../data/qualification.json";
import techSkills from "../data/techSkills.json";

const LangTable = ({ data }) => (
  <div className="container">
    <table className="table">
      <thead>
        <tr>
          <th>Language</th>
          <th>Level</th>
          <th>Qualification (if any)</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.language}</td>
            <td>{item.level}</td>
            <td>{item.qualification}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const QualificationTable = ({ data }) => (
  <div className="container">
    <table className="table">
      <thead>
        <tr>
          <th>Acquired at</th>
          <th>Qualification</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.date}</td>
            <td>{item.qualification}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const TechSkills = ({ data }) => (
  <div className="container">
    <table className="table">
      <thead>
        <tr>
          <th>Item</th>
          <th>Experience</th>
          <th>Note</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.item}</td>
            <td>{item.experience}</td>
            <td dangerouslySetInnerHTML={{ __html: item.note }} />
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const Skills = () => (
  <section id="skills">
    <div className="container">
      <h3 className="text-center" style={{ paddingBottom: "10px" }}>
        Skills
      </h3>
      <h5>Language Skills</h5>
      <LangTable data={langSkills.items} />
      <h5>Qualifications</h5>
      <QualificationTable data={qualification.items} />
      <h5>Software Related Skills</h5>
      <TechSkills data={techSkills.items} />
    </div>
  </section>
);

export default Skills;
