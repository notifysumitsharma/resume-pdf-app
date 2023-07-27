import React, { useState } from "react";
import Myheader from "./header";
import { Link } from "react-router-dom";

const MySkill = () => {
  let formstatus = true;

  let [statusmsg, updateStatus] = useState("");

  let [experror, updateExpError] = useState("");
  let [experience, updateExperience] = useState("");

  let [skillerror, updateSkillError] = useState("");
  let [skill, updateSkill] = useState("");

  const saveSkillData = () => {
    if (experience == "") {
      formstatus = false;
      updateExpError("Invalid Name");
    } else {
      updateExpError("");
    }

    if (skill == "") {
      formstatus = false;
      updateSkillError("Invalid Age");
    } else {
      updateSkillError("");
    }

    if (formstatus == true) {
      alert("Data is Sending......");
      var url = "http://localhost:1240/skills";
      var contactInfo = {
        experience: experience,
        skills: skill,
      };
      var postoption = {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify(contactInfo),
      };
      fetch(url, postoption)
        .then((response) => response.json())
        .then((servRes) => {
          updateExperience("");
          updateSkill("");
        });
    } else {
      updateStatus("Invalid Inputs");
    }
  };

  return (
    <div className="container mt-4 p-4 rounded">
      <div className="row mt-5">
        <div className="col-lg-12">
          <h2 className="text-center text-info">My SkillS & Experience</h2>
        </div>
        <div className="col-lg-3">
          <div className=" text-primary shadow-lg ">
            <ul className="list-group">
              <li className="list-group-item active ">Profile Setting</li>
              <Link to="/personal" className="list-group-item text-primary">
                <i className="fa fa-user"></i> Personal Details
              </Link>
              <Link to="/contact" className="list-group-item text-primary">
                <i className="fa fa-headset"></i> Contact Details
              </Link>
              <Link to="/education" className="list-group-item text-primary">
                <i className="fa fa-book"></i> Education Details
              </Link>
              <Link to="/skill" className="list-group-item text-primary">
                <i className="fa fa-desktop"></i> My Skills & Expeerience
              </Link>
              <Link to="/resume" className="list-group-item text-primary">
                <i className="fa fa-file"></i> My Resume
              </Link>
            </ul>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="p-4 bg-white shadow-lg rounded">
            <div className="mb-3">
              <label>Total Work Experience</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => updateExperience(e.target.value)}
                value={experience}
              ></input>
              <i className="text-danger fst-italic">{experror}</i>
            </div>
            <div className="mb-3">
              <label>Enter Your Skills</label>
              <textarea
                className="form-control"
                rows="6"
                onChange={(e) => updateSkill(e.target.value)}
                value={skill}
              ></textarea>
              <i className="text-danger fst-italic">{skillerror}</i>
            </div>
            <div className="mt-4 text-center">
              <button className="btn btn-primary " onClick={saveSkillData}>
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySkill;
