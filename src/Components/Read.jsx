import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Read() {
  const id = useParams();
  const [studentData, setStudentData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://node-server-y4bl.onrender.com/read/${id?.id}`)
      .then((data) => {
        setStudentData(data?.data);
      })
      .catch((err) => {
        console.log("11==", err);
      });
  }, [id]);
  return (
    <div className="d-flex justify-content-center vh-100 align-items-center bg-info">
      {studentData.map((val, index) => {
        return (
          <div
            key={index}
            className="bg-white rounded-4 d-flex flex-column justify-content-center align-items-center mh-100 my-5 p-5"
          >
            <h2>Student Details</h2>
            <p>
              <span className="fw-bold">Name:</span> {val?.Name}
            </p>
            <p>
              <span className="fw-bold">Email:</span> {val?.Email}
            </p>
            <p>
              <span className="fw-bold">Mobile:</span> {val?.Mobile}
            </p>
            <div className="d-flex">
              <Link to="/" className="btn btn-primary me-4">
                Back
              </Link>
              <Link to={`/update/${val?.ID}`} className="btn btn-primary">
                Update
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Read;
