import React, { useState } from "react";
import Myheader from "./header";
import { Link } from "react-router-dom";

const MyEducation = () => {
  let formstatus = true;

  let [numteneerror, updateNumtenError] = useState("");
  let [numten, updateNumten] = useState("");

  let [twenumerror, updateTwenumError] = useState("");
  let [twenum, updateTwenum] = useState("");

  let [heducationerror, updateHeducationError] = useState("");
  let [heducation, updateHeducation] = useState("");

  let [pyearerror, updatePyearError] = useState("");
  let [pyear, updatePyear] = useState("");

  let [hedumarkerror, updateHedumarkError] = useState("");
  let [hedumark, updateHedumark] = useState("");

  let [statusmsg, updateStatus] = useState("");

  const saveEducationData = () => {
    if (numten == "") {
      formstatus = false;
      updateNumtenError("Invalid Number");
    } else {
      updateNumtenError("");
    }

    if (hedumark == "") {
      formstatus = false;
      updateHedumarkError("Invalid Marks");
    } else {
      updateHedumarkError("");
    }

    if (twenum == "") {
      formstatus = false;
      updateTwenumError("Invalid Number");
    } else {
      updateTwenumError("");
    }
    if (heducation == "") {
      formstatus = false;
      updateHeducationError("Invalid Education");
    } else {
      updateHeducationError("");
    }
    if (pyear == "") {
      formstatus = false;
      updatePyearError("Invalid Passing Year");
    } else {
      updatePyearError("");
    }

    if (formstatus == true) {
      alert("Data is Sending......");
      var url = "http://localhost:1240/education";
      var educationInfo = {
        tenMark: numten,
        tweMark: twenum,
        HEM: hedumark,
        HE: heducation,
        PY: pyear,
      };
      var postoption = {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify(educationInfo),
      };
      fetch(url, postoption)
        .then((response) => response.json())
        .then((servRes) => {
          updateNumten("");
          updateHedumark("");
          updateTwenum("");
          updateHeducation("");
          updatePyear("");
        });
    } else {
      updateStatus("Invalid Inputs");
    }
  };
  return (
    <div className="container mt-4 p-4 rounded">
      <div className="row mt-5">
        <div className="col-lg-12">
          <h2 className="text-center text-info">My Education Details</h2>
        </div>
        <div className="col-lg-3">
          <div className=" text-primary shadow-lg">
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
            <div className="row">
              <div className="col-lg-6">
                <label>10th Marks %</label>
                <input
                  type="number"
                  className="form-control"
                  onChange={(e) => updateNumten(e.target.value)}
                  value={numten}
                ></input>
                <i className="text-danger fst-italic">{numteneerror}</i>
              </div>
              <div className="col-lg-6">
                <label>12th Marks %</label>
                <input
                  type="number"
                  className="form-control"
                  onChange={(e) => updateTwenum(e.target.value)}
                  value={twenum}
                ></input>
                <i className="text-danger fst-italic">{twenumerror}</i>
              </div>
              <div className="mb-3">
                <label>Highest Education</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => updateHeducation(e.target.value)}
                  value={heducation}
                ></input>
                <i className="text-danger fst-italic">{heducationerror}</i>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <label>Highest education Passing year</label>
                <input
                  type="number"
                  className="form-control"
                  onChange={(e) => updatePyear(e.target.value)}
                  value={pyear}
                ></input>
                <i className="text-danger fst-italic">{pyearerror}</i>
              </div>
              <div className="col-lg-6">
                <label>Highest Education Marks %</label>
                <input
                  type="number"
                  className="form-control"
                  onChange={(e) => updateHedumark(e.target.value)}
                  value={hedumark}
                ></input>
                <i className="text-danger fst-italic">{hedumarkerror}</i>
              </div>
            </div>
            <div className="mt-4 text-center">
              <button className="btn btn-primary " onClick={saveEducationData}>
                Save Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyEducation;
