import React, { useState } from "react";
import { Link } from "react-router-dom";

const MyPersonal = () => {
  let formstatus = true;
  let [mobileerror, updateMobileError] = useState("");
  let [mobile, updateMobile] = useState("");

  let [emailerror, updateEmailError] = useState("");
  let [email, updateEmail] = useState("");

  let [passworderror, updatePasswordError] = useState("");
  let [password, updatePassword] = useState("");

  let [statusmsg, updateStatus] = useState("");

  let [nameerror, updateNameError] = useState("");
  let [name, updateName] = useState("");

  let [gendererror, updateGenderError] = useState("");
  let [gender, updateGender] = useState("");

  let [ageerror, updateAgeError] = useState("");
  let [age, updateAge] = useState("");

  const savePersonalData = () => {
    if (name == "") {
      formstatus = false;
      updateNameError("Invalid Name");
    } else {
      updateNameError("");
    }

    if (age == "") {
      formstatus = false;
      updateAgeError("Invalid Age");
    } else {
      updateAgeError("");
    }

    if (gender == "") {
      formstatus = false;
      updateGenderError("Invalid Gender");
    } else {
      updateGenderError("");
    }
    if (mobile == "") {
      formstatus = false;
      updateMobileError("Invalid mobile number");
    } else {
      updateMobileError("");
    }
    if (password == "") {
      formstatus = false;
      updatePasswordError("Invalid Password");
    } else {
      updatePasswordError("");
    }
    if (email == "") {
      formstatus = false;
      updateEmailError("Invalid Email");
    } else {
      updateEmailError("");
    }

    if (formstatus == true) {
      alert("Data is Sending......");
      var url = "http://localhost:1240/personal/";
      var personalInfo = {
        fullname: name,
        gender: gender,
        age: age,
        mobile: mobile,
        email: email,
        password: password,
      };
      var postoption = {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify(personalInfo),
      };
      fetch(url, postoption)
        .then((response) => response.json())
        .then((servRes) => {
          updateName("");
          updateAge("");
          updateGender("");
          updateMobile("");
          updateEmail("");
          updatePassword("");
        });
    } else {
      updateStatus("Invalid Inputs");
    }
  };

  return (
    <div className="container mt-4 p-4 rounded">
      <div className="row mt-5">
        <div className="col-lg-12">
          <h2 className="text-center text-info">Personal Details</h2>
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
        <div className="col-lg-6 ">
          <div className="p-4 bg-white shadow-lg rounded">
            <div className="mb-3">
              <label>Full Name</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => updateName(e.target.value)}
                value={name}
              ></input>
              <i className="text-danger fst-italic">{nameerror}</i>
            </div>
            <div className="row">
              <div className="col-lg-6 mb-3">
                <label>Gender</label>
                <select
                  className="form-control"
                  onChange={(e) => updateGender(e.target.value)}
                  value={gender}
                >
                  <option>Choose</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
                <i className="text-danger fst-italic">{gendererror}</i>
              </div>
              <div className="col-lg-6 mb-3">
                <label>Age</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => updateAge(e.target.value)}
                  value={age}
                ></input>
                <i className="text-danger fst-italic">{ageerror}</i>
              </div>
              <div className="mb-3">
                <label>Mobile No</label>
                <input
                  type="number"
                  className="form-control"
                  onChange={(e) => updateMobile(e.target.value)}
                  value={mobile}
                ></input>
                <i className="text-danger fst-italic">{mobileerror}</i>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <label>e-Mail Id</label>
                <input
                  type="email"
                  className="form-control"
                  onChange={(e) => updateEmail(e.target.value)}
                  value={email}
                ></input>
                <i className="text-danger fst-italic">{emailerror}</i>
              </div>
              <div className="col-lg-6">
                <label>Password</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => updatePassword(e.target.value)}
                  value={password}
                ></input>
                <i className="text-danger fst-italic">{passworderror}</i>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-12 text-center">
          <div className="mt-4 text-center">
            <button className="btn btn-primary " onClick={savePersonalData}>
              Save Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPersonal;
