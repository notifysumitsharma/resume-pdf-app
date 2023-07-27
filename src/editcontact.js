import React, { useState, useEffect } from "react";
import Myheader from "./header";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const ContactEdit = () => {
  const { id } = useParams();

  const getcontactInfo = () => {
    var url = "http://localhost:1240/contact/" + id;
    fetch(url)
      .then((response) => response.json())
      .then((cinfo) => {
        updateName(cinfo.cityname);
        updateAddress(cinfo.address);
      });
  };

  useEffect(() => {
    getcontactInfo();
  }, [1]);

  let formstatus = true;

  let [statusmsg, updateStatus] = useState("");

  let [nameerror, updateNameError] = useState("");
  let [name, updateName] = useState("");

  let [addresserror, updateAddressError] = useState("");
  let [address, updateAddress] = useState("");

  const saveContactData = () => {
    if (name == "") {
      formstatus = false;
      updateNameError("Invalid Name");
    } else {
      updateNameError("");
    }

    if (address == "") {
      formstatus = false;
      updateAddressError("Invalid Age");
    } else {
      updateAddressError("");
    }

    if (formstatus == true) {
      alert("Data is Sending......");
      var url = "http://localhost:1240/contact/" + id;
      var contactInfo = {
        cityname: name,
        address: address,
      };
      var postoption = {
        headers: { "Content-Type": "application/json" },
        method: "PUT",
        body: JSON.stringify(contactInfo),
      };
      fetch(url, postoption)
        .then((response) => response.json())
        .then((servRes) => {
          updateName("");
          updateAddress("");

          window.location.href = "#/resume";
        });
    } else {
      updateStatus("Invalid Inputs");
    }
  };
  return (
    <div className="container mt-4 p-4 rounded">
      <div className="row mt-5">
        <div className="col-lg-12">
          <h2 className="text-center text-info">Contact Details</h2>
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
              <label>Current City Name</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => updateName(e.target.value)}
                value={name}
              ></input>
              <i className="text-danger fst-italic">{nameerror}</i>
            </div>
            <div className="mb-3">
              <label>Your Current Address</label>
              <textarea
                className="form-control"
                rows="6"
                onChange={(e) => updateAddress(e.target.value)}
                value={address}
              ></textarea>
              <i className="text-danger fst-italic">{addresserror}</i>
            </div>
            <div className="mt-4 text-center">
              <button className="btn btn-primary " onClick={saveContactData}>
                Update Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactEdit;
