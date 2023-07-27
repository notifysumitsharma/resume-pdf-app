import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Pdf from "react-to-pdf";
import { DownloadTableExcel } from "react-export-table-to-excel";

const ref = React.createRef();

const UserList = () => {
  const tableRef = useRef(null);

  let [alldata, updateAlldata] = useState([]);
  const [user, setUser] = useState({});

  const getuserinfo = () => {
    fetch("http://localhost:1250/details")
      .then((response) => response.json())
      .then((info) => {
        console.log(info);
        updateAlldata(info);
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
      });
  };
  return (
    <div className="container mt-5">
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
          </div>
        </div>

        <div
          className="col-lg-9 form bg-white shadow-lg rounded "
          ref={tableRef}
        >
          <div className="text-end mb-2">
            <Pdf targetRef={ref} filename="userprofile.pdf">
              {({ toPdf }) => (
                <button className="btn btn-info me-2" onClick={toPdf}>
                  Generate Pdf
                </button>
              )}
            </Pdf>
            <DownloadTableExcel
              filename="users table"
              sheet="users"
              currentTableRef={tableRef.current}
            >
              <button className="btn btn-success"> Export excel </button>
            </DownloadTableExcel>
          </div>
          <div ref={ref} className="mt-5">
            <h4 className="text-center text-primary mt-3">Profile Detail</h4>

            <div className="row mt-3">
              <div className="col-lg-3 me-4 ms-5">
                <p>id :{user.id}</p>
                <p>First Name : {user.firstname}</p>
                <p>Last Name : {user.lastname}</p>
              </div>
              <div className="col-lg-3 me-5">
                <p>Email : {user.emailId}</p>
                <p>Mobile : {user.mobileNo}</p>
                <p>Address : {user.fulladdress}</p>
              </div>
              <div className="col-lg-3 me-5">
                <p>Pincode :{user.pincode}</p>
                <p>District : {user.district}</p>
                <p>State : {user.state}</p>
              </div>
              {/* <div className="text-center mb-2">
                <button className="btn btn-warning">Next</button>
              </div> */}
            </div>
          </div>
        </div>
        <Link to="/register">Go back</Link>
      </div>
    </div>
  );
};

export default UserList;

// npm install react-html-to-excel
