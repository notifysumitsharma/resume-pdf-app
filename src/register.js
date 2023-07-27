import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import swal from "sweetalert";
import { Link } from "react-router-dom";

const Register = () => {
  let [fnameerror, updatefnameError] = useState("");
  let [fname, pickFname] = useState("");

  let [lnameerror, updatelnameError] = useState("");
  let [lname, pickLname] = useState("");

  let [mobileerror, updatemobileError] = useState("");
  let [mobile, pickMobile] = useState("");

  let [emailerror, updateemailError] = useState("");
  let [email, pickEmail] = useState("");

  let [passerror, updatepassError] = useState("");
  let [pass, pickPass] = useState("");

  let [cpasserror, updatecpassError] = useState("");
  let [cpass, pickCpass] = useState("");

  let [doberror, updatedobError] = useState("");
  let [dob, pickDob] = useState("");

  let [addresserror, updateaddressError] = useState("");
  let [address, pickAddress] = useState("");

  let [pinerror, updatepinError] = useState("");
  let [pin, pickPin] = useState("");

  let [stateerror, updatestateError] = useState("");
  let [state, pickState] = useState("");

  let [districterror, updatedistrictError] = useState("");
  let [district, pickDistrict] = useState("");

  const [check, pickCheck] = useState("");

  let formstatus = true;

  const registration = () => {
    // firstname validation
    if (fname == "") {
      formstatus = false;
      updatefnameError("Invalid first Name");
    } else {
      updatefnameError("");
    }
    // lastname validation
    if (lname == "") {
      formstatus = false;
      updatelnameError("Invalid last Name");
    } else {
      updatelnameError("");
    }
    // //mobile validation
    // if (mobile == "") {
    //   formstatus = false;
    //   updatemobileError("Invalid mobile Number");
    // } else {
    //   updatemobileError("");
    // }
    // //email validation
    // if (email == "") {
    //   formstatus = false;
    //   updateemailError("Invalid email");
    // } else {
    //   updateemailError("");
    // }

    // email validation start
    var epatern =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!epatern.test(email)) {
      formstatus = false;
      updateemailError("Invalid E-mail Id");
    } else {
      updateemailError("");
    }

    // mobile number validation
    var mpattern = /^[0]?[6789]\d{9}$/;
    if (!mpattern.test(mobile)) {
      updatemobileError("Invalid Mobile Number");
    } else {
      updatemobileError("");
    }
    //password validation
    if (pass.length < 8) {
      formstatus = false;
      updatepassError("Enter password min 8 character");
    } else {
      updatepassError("");
    }
    //confirm password validation
    if (cpass !== pass) {
      formstatus = false;
      updatecpassError("Password are not matching");
    } else {
      updatecpassError("");
    }
    //dOB validation
    if (dob == "") {
      formstatus = false;
      updatedobError("Invalid Date of Birth");
    } else {
      updatedobError("");
    }
    //address validation
    if (address == "") {
      formstatus = false;
      updateaddressError("Invalid email");
    } else {
      updateaddressError("");
    }
    //pincode validation
    if (pin == "") {
      formstatus = false;
      updatepinError("Invalid email");
    } else {
      updatepinError("");
    }
    //state validation
    if (state == "") {
      formstatus = false;
      updatestateError("Invalid email");
    } else {
      updatestateError("");
    }
    //district validation
    if (email == "") {
      formstatus = false;
      updatedistrictError("Invalid email");
    } else {
      updatedistrictError("");
    }

    if (formstatus == true) {
      var url = "http://localhost:1250/details";
      var data = {
        firstname: fname,
        lastname: lname,
        mobileNo: mobile,
        emailId: email,
        password: pass,
        confirmpassword: cpass,
        fulladdress: address,
        pincode: pin,
        state: state,
        district: district,
      };
      var postOption = {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify(data),
      };
      fetch(url, postOption)
        .then((response) => response.json())
        .then((serRes) => {
          pickFname("");
          pickLname("");
          pickMobile("");
          pickEmail("");
          pickAddress("");
          pickPass("");
          pickCpass("");
          pickDob("");
          pickPin("");
          pickState("");
          pickDistrict("");
          swal("Thanks For Registration!");
        });
    } else {
      toast("Invalid inputs!");
    }
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-lg-6">
          <h5 className="text-center text-primary">REGISTER AS CANDIDATE</h5>
          <hr></hr>

          <div className="form-group row">
            <label className="col-sm-4 col-form-label">First Name :</label>
            <div className="col-sm-6">
              <input
                type="text"
                className="form-control"
                onChange={(e) => pickFname(e.target.value)}
                value={fname}
              />
              <i className="text-danger fst-italic">{fnameerror}</i>
            </div>
          </div>
          <div className="form-group row mt-2">
            <label className="col-sm-4 col-form-label">Last Name :</label>
            <div className="col-sm-6">
              <input
                type="text"
                className="form-control"
                onChange={(e) => pickLname(e.target.value)}
                value={lname}
              />
              <i className="text-danger fst-italic">{lnameerror}</i>
            </div>
          </div>
          <div className="form-group row mt-2">
            <label className="col-sm-4 col-form-label">Mobile No :</label>
            <div className="col-sm-6">
              <input
                type="text"
                className="form-control"
                onChange={(e) => pickMobile(e.target.value)}
                value={mobile}
              />
              <i className="text-danger fst-italic">{mobileerror}</i>
            </div>
          </div>
          <div className="form-group row mt-2">
            <label className="col-sm-4 col-form-label">Email Id :</label>
            <div className="col-sm-6">
              <input
                type="text"
                className="form-control"
                onChange={(e) => pickEmail(e.target.value)}
                value={email}
              />
              <i className="text-danger fst-italic">{emailerror}</i>
            </div>
          </div>
          <div className="form-group row mt-2">
            <label className="col-sm-4 col-form-label">Password :</label>
            <div className="col-sm-6">
              <input
                type="text"
                className="form-control"
                placeholder="Password min 8 character"
                onChange={(e) => pickPass(e.target.value)}
                value={pass}
              />
              <i className="text-danger fst-italic">{passerror}</i>
            </div>
          </div>
          <div className="form-group row mt-2">
            <label className="col-sm-4 col-form-label">
              Confirm Password :
            </label>
            <div className="col-sm-6">
              <input
                type="text"
                className="form-control"
                placeholder=" Confirm password "
                onChange={(e) => pickCpass(e.target.value)}
                value={cpass}
              />
              <i className="text-danger fst-italic">{cpasserror}</i>
            </div>
          </div>

          <div className="form-group row mt-2">
            <label className="col-sm-4 col-form-label">Date Of Birth :</label>
            <div className="col-sm-6">
              <input
                type="date"
                className="form-control"
                onChange={(e) => pickDob(e.target.value)}
                value={dob}
              />
              <i className="text-danger fst-italic">{doberror}</i>
            </div>
          </div>

          <div className="form-group row mt-2">
            <label className="col-sm-4 col-form-label">Full Address :</label>
            <div className="col-sm-6">
              <textarea
                className="form-control"
                onChange={(e) => pickAddress(e.target.value)}
                value={address}
              />
              <i className="text-danger fst-italic">{addresserror}</i>
            </div>
          </div>
          <div className="form-group row mt-2">
            <label className="col-sm-4 col-form-label">Pincode : </label>
            <div className="col-sm-6">
              <input
                type="text"
                className="form-control"
                onChange={(e) => pickPin(e.target.value)}
                value={pin}
              />
              <i className="text-danger fst-italic">{pinerror}</i>
            </div>
          </div>
          <div className="form-group row mt-2">
            <label className="col-sm-4 col-form-label">State : </label>
            <div className="col-sm-6">
              <select
                type="text"
                className="form-select"
                onChange={(e) => pickState(e.target.value)}
                value={state}
              >
                <option></option>
                <option>Karnataka </option>
                <option>Delhi</option>
                <option>Bihar</option>
                <option>Himachal</option>
                <option>Punjab</option>
                <option>Rajasthan</option>
                <option>Maharashtra</option>
              </select>
              <i className="text-danger fst-italic">{stateerror}</i>
            </div>
          </div>
          <div className="form-group row mt-2">
            <label className="col-sm-4 col-form-label">District : </label>
            <div className="col-sm-6">
              <select
                type="text"
                className="form-select"
                onChange={(e) => pickDistrict(e.target.value)}
                value={district}
              >
                <option></option>
                <option>Bangalore</option>
                <option>New Delhi</option>
                <option>Patna</option>
                <option>Kangra</option>
                <option>Chandigarh</option>
                <option>Jaipur</option>
                <option>Pune</option>
              </select>
              <i className="text-danger fst-italic">{districterror}</i>
            </div>
          </div>
          <div className="form-group row mt-2 text-center">
            <div className="form-check mt-2 text-primary  ">
              <input
                // className="form-check-input"
                value="Agree"
                type="checkbox"
                id="flexCheckDefault"
                onChange={(e) => pickCheck(e.target.value)}
              />

              <label className="form-check-label" htmlFor="flexCheckDefault">
                Agree on Terms Conditions
              </label>
            </div>
          </div>
          <div className="text-center mt-3">
            <button
              className="btn btn-primary btn-md me-3"
              onClick={registration}
            >
              Register
            </button>
            <Link to="/userlist" className="btn btn-primary btn-md me-3">
              Userlist
            </Link>
            {/* <button className="btn btn-primary btn-md me-3">Clear</button> */}

            <ToastContainer />
          </div>
        </div>

        <div className="col-lg-6">
          <h2 className="text-primary text-center">Your Details</h2>
          <div>
            <h6 className="mb-3 mt-4">
              <b>First Name :</b> {fname}
            </h6>
            <h6 className="mb-3 mt-4 ">
              <b>Last Name :</b> {lname}
            </h6>
            <h6 className="mb-3 mt-4">
              <b>Mobile No :</b> {mobile}
            </h6>
            <h6 className="mb-3 mt-4">
              <b>e-Mail :</b> {email}
            </h6>
            <h6 className="mb-3 mt-4">
              <b>Password :</b> {pass}
            </h6>
            <h6 className="mb-3 mt-4">
              <b>Confirm Password :</b> {cpass}
            </h6>
            <h6 className="mb-3 mt-4">
              <b>Date Of Birth :</b> {dob}
            </h6>
            <h6 className="mb-3 mt-4">
              <b>Address : </b>
              {address}
            </h6>
            <h6 className="mb-3 mt-4">
              <b>Pincode :</b> {pin}
            </h6>
            <h6 className="mb-3 mt-4">
              <b>State : </b>
              {state}
            </h6>
            <h6 className="mb-3 mt-4">
              <b>District : </b>
              {district}
            </h6>
            <h6 className="mb-3 mt-4">
              <b>T&C : </b>
              {check}
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
