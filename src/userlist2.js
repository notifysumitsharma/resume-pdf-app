import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Pdf from "react-to-pdf";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import swal from "sweetalert";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ref = React.createRef();

const UserList2 = () => {
  let [alldata, updateAlldata] = useState([]);
  const [user, setUser] = useState({});
  const [main, updateMain] = useState([]);

  const getuserinfo = () => {
    fetch("http://localhost:1250/details")
      .then((response) => response.json())
      .then((info) => {
        updateAlldata(info);
      });
  };
  const getuser = () => {
    fetch("http://localhost:1250/details")
      .then((response) => response.json())
      .then((info) => {
        console.log(info);
        updateMain(info);
        swal("Ready to download Pdf !!!");
      });
  };
  useEffect(() => {
    getuserinfo();
  }, [1]);

  const specificUser = (id) => {
    const url = `http://localhost:1250/details/${id}`;

    fetch(url)
      .then((response) => response.json())
      .then((serRes) => {
        console.log(serRes);
        setUser(serRes);
        swal("Ready to download Pdf !!!");
      });
  };
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-lg-3 fw-semibold">
          <h4 className="text-primary text-center">Available Profile</h4>
          <div className="form bg-white shadow-lg rounded">
            <ul className="list-group ">
              {alldata.map((data, index) => {
                return (
                  <Link
                    className="text-primary list-group-item"
                    key={index}
                    onClick={specificUser.bind(this, data.id)}
                  >
                    {data.firstname}
                  </Link>
                );
              })}
            </ul>
            <div className="text-center">
              <button className="btn btn-info" onClick={getuser}>
                All User
              </button>
            </div>
          </div>
        </div>

        <div className="col-lg-9 form bg-white shadow-lg rounded ">
          <div className="text-end mb-2">
            <Pdf targetRef={ref} filename="userprofile.pdf">
              {({ toPdf }) => (
                <button className="btn btn-warning me-2" onClick={toPdf}>
                  Download Pdf
                </button>
              )}
            </Pdf>

            <ReactHTMLTableToExcel
              id="test-table-xls"
              className="btn btn-success"
              table="table-to-xls"
              filename="tablexls"
              sheet="tablexls"
              buttonText="Download as XLS"
            ></ReactHTMLTableToExcel>
          </div>
          <div ref={ref} className="mt-5">
            <h4 className="text-center text-primary mt-3">Profile Detail</h4>

            <div className="row mt-3">
              <table className="ms-5" id="table-to-xls">
                <tbody className="mb-4">
                  <tr className="text-primary mb-5">
                    <th>Profile ID : </th>
                    <td>
                      <b>{user.id}</b>
                    </td>
                  </tr>
                  <tr>
                    <th>First Name : </th>
                    <td>{user.firstname}</td>
                    <th>Last Name : </th>
                    <td>{user.lastname}</td>
                  </tr>
                  <tr>
                    <th>Email : </th>
                    <td>{user.emailId}</td>
                    <th>Mobile : </th>
                    <td>{user.mobileNo}</td>
                  </tr>
                  <tr>
                    <th>Address : </th>
                    <td>{user.fulladdress}</td>
                    <th>Pincode :</th>
                    <td>{user.pincode}</td>
                  </tr>
                  <tr>
                    <th>District : </th>
                    <td>{user.district}</td>
                    <th>State : </th>
                    <td>{user.state}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <Link to="/register">Go back</Link>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-lg-12 form bg-white shadow-lg rounded ">
          <div className="text-start mb-2">
            <Pdf targetRef={ref} filename="userprofile.pdf">
              {({ toPdf }) => (
                <button className="btn btn-warning me-2" onClick={toPdf}>
                  Download Pdf
                </button>
              )}
            </Pdf>

            <ReactHTMLTableToExcel
              id="test-table-xls"
              className="btn btn-success"
              table="table-to-xls"
              filename="tablexls"
              sheet="tablexls"
              buttonText="Download as XLS"
            ></ReactHTMLTableToExcel>
          </div>
          <div ref={ref} className="mt-5">
            <h4 className="text-center text-primary mt-3">Profile Detail</h4>

            <div className="row mt-3">
              <table className="ms-5 mb-5 " id="table-to-xls">
                {main.map((user, index) => {
                  return (
                    <tbody className="mb-5 " key={index}>
                      <tr className="text-primary mb-5">
                        <th>Profile ID : </th>
                        <td>
                          <b>{user.id}</b>
                        </td>
                      </tr>
                      <tr>
                        <th>First Name : </th>
                        <td>{user.firstname}</td>
                        <th>Last Name : </th>
                        <td>{user.lastname}</td>
                      </tr>
                      <tr>
                        <th>Email : </th>
                        <td>{user.emailId}</td>
                        <th>Mobile : </th>
                        <td>{user.mobileNo}</td>
                      </tr>
                      <tr>
                        <th>Address : </th>
                        <td>{user.fulladdress}</td>
                        <th>Pincode :</th>
                        <td>{user.pincode}</td>
                      </tr>
                      <tr>
                        <th>District : </th>
                        <td>{user.district}</td>
                        <th>State : </th>
                        <td>{user.state}</td>
                      </tr>
                    </tbody>
                  );
                })}
              </table>
            </div>
          </div>
        </div>
        <Link to="/register">Go back</Link>
      </div>
    </div>
    //   <ToastContainer />

    // </div>
  );
};

export default UserList2;
