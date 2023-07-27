import React, { useEffect, useState } from "react";
import Myheader from "./header";
import { Link } from "react-router-dom";

const MyResume = () => {
  let [pdata, updatPdata] = useState([]);
  let [ctcdata, updatCtcdata] = useState([]);
  let [edudata, updatEdudata] = useState([]);
  let [skldata, updatSkldata] = useState([]);

  const getPersonalData = () => {
    var url1 = "http://localhost:1240/personal";

    fetch(url1)
      .then((response) => response.json())
      .then((arrayPdada) => {
        updatPdata(arrayPdada);
      });
  };
  const getContactData = () => {
    var url2 = "http://localhost:1240/contact";

    fetch(url2)
      .then((response) => response.json())
      .then((arrayPdada) => {
        updatCtcdata(arrayPdada);
      });
  };
  const getEducationData = () => {
    var url3 = "http://localhost:1240/education";

    fetch(url3)
      .then((response) => response.json())
      .then((arrayPdada) => {
        updatEdudata(arrayPdada);
      });
  };
  const getSkillData = () => {
    var url4 = "http://localhost:1240/skills";

    fetch(url4)
      .then((response) => response.json())
      .then((arrayPdada) => {
        updatSkldata(arrayPdada);
      });
  };
  useEffect(() => {
    getPersonalData();
    getContactData();
    getEducationData();
    getSkillData();
    console.log(pdata[1]);
  }, [1]);
  return (
    <div className="container mt-2 p-4 rounded">
      <div className="row mt-2 mb-2 ">
        <div className="col-lg-12">
          <h1 className="text-center text-info">My Resume</h1>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-6">
          {pdata.map((pinfo, index) => {
            return (
              <div key={index} className=" text-primary shadow-lg text-right">
                <ul className="list-group">
                  <li className="list-group-item active ">
                    Personal Details
                    <Link
                      to={`/editpersonal/${pinfo.id}`}
                      className="btn btn-warning float-end"
                    >
                      Edit
                    </Link>
                  </li>
                  <li className="list-group-item ">
                    <b>Full Name : </b> {pinfo.fullname}
                  </li>
                  <li className="list-group-item">
                    <b>Gender : </b> {pinfo.gender}
                  </li>
                  <li className="list-group-item ">
                    <b>Age :</b> {pinfo.age}
                  </li>
                  <li className="list-group-item ">
                    <b>Mobile :</b> {pinfo.mobile}
                  </li>
                  <li className="list-group-item ">
                    <b>Email : </b>
                    {pinfo.email}
                  </li>
                </ul>
              </div>
            );
          })}
        </div>
        <div className="col-lg-6">
          {ctcdata.map((cdata, index) => {
            return (
              <div className=" text-primary shadow-lg text-right">
                <ul className="list-group">
                  <li className="list-group-item active ">
                    Contact Details
                    <Link
                      to={`/editcontact/${cdata.id}`}
                      className="btn btn-warning float-end"
                    >
                      Edit
                    </Link>
                  </li>
                  <li className="list-group-item">
                    <b>City :</b> {cdata.cityname}
                  </li>
                  <li className="list-group-item">
                    <b>Address : </b> {cdata.address}
                  </li>
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-lg-6">
          {edudata.map((edata, index) => {
            return (
              <div className=" text-primary shadow-lg text-right">
                <ul className="list-group">
                  <li className="list-group-item active ">
                    Education Details
                    <Link
                      to={`/editeducation/${edata.id}`}
                      className="btn btn-warning float-end"
                    >
                      Edit
                    </Link>
                  </li>
                  <li className="list-group-item">
                    <b>10th Marks : </b> {edata.tenMark}
                  </li>
                  <li className="list-group-item">
                    <b>12th Marks : </b> {edata.tweMarks}
                  </li>
                  <li className="list-group-item ">
                    <b>Highest Edu : </b> {edata.HE}
                  </li>
                  <li className="list-group-item ">
                    <b>Passing Year : </b> {edata.PY}
                  </li>
                  <li className="list-group-item ">
                    <b>Percentage : </b> {edata.HEM}
                  </li>
                </ul>
              </div>
            );
          })}
        </div>
        <div className="col-lg-6">
          {skldata.map((sdata, index) => {
            return (
              <div className=" text-primary shadow-lg text-right">
                <ul className="list-group">
                  <li className="list-group-item active ">
                    My Skills & Experience
                    <Link
                      to={`/editskills/${sdata.id}`}
                      className="btn btn-warning float-end"
                    >
                      Edit
                    </Link>
                  </li>
                  <li className="list-group-item">
                    <b>Work Experience :</b> {sdata.experience}
                  </li>
                  <li className="list-group-item">
                    <b>Skills : </b> {sdata.skills}
                  </li>
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MyResume;
