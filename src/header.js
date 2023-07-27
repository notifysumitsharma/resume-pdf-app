import React from "react";
import { Link } from "react-router-dom";

const Myheader = () => {
  return (
    <div className="container mt-4 p-4 rounded">
      <div className="row mt-5">
        <div className="col-lg-12">
          <div className=" text-primary">
            <ul className="list-group">
              <li className="list-group-item active ">Profile Header</li>
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
                <i className="fa fa-desktop"></i>
                My Skills & Expeerience
              </Link>
              <Link to="/resume" className="list-group-item text-primary">
                <i className="fa fa-file"></i>My Resume
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myheader;
