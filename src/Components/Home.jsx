import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    axios.get("https://node-server-y4bl.onrender.com/list").then((data) => {
      console.log("6==", data);
      setUserData(data?.data);
    });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`https://node-server-y4bl.onrender.com/delete/${id}`)
      .then((data) => {
        console.log("15==", data);
        window.location.reload();
      })
      .catch((err) => console.log("15==", err));
  };

  return (
    <div className="d-flex justify-content-center vh-100 align-items-center bg-info">
      <div className="bg-white rounded-4 d-flex flex-column justify-content-center align-items-center mh-100 container my-5 py-3">
        <h2 className="table-title w-100">Student List</h2>
        <p className="d-flex justify-content-end pe-5 w-100">
          <Link to="/create" className="btn btn-success fw-bold ">
            Create +
          </Link>
        </p>
        <table className="students-table">
          <thead className="fw-bold">
            <tr>
              <td>ID</td>
              <td>Name</td>
              <td>Email</td>
              <td>Mobile</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody>
            {userData.length > 0 &&
              userData?.map((val, index) => {
                return (
                  <tr key={index}>
                    <td>{val?.ID}</td>
                    <td>{val?.Name}</td>
                    <td>{val?.Email}</td>
                    <td>{val?.Mobile}</td>
                    <td>
                      <Link
                        to={`/read/${val?.ID}`}
                        className="btn btn-secondary me-2 text-white fw-bold"
                      >
                        Read
                      </Link>
                      <Link
                        to={`/update/${val?.ID}`}
                        className="btn btn-info me-2 text-white fw-bold"
                      >
                        Update
                      </Link>
                      <button
                        onClick={() => handleDelete(val?.ID)}
                        className="btn btn-danger fw-bold"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
