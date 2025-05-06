import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function Update() {
  const id = useParams();
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    mobile: "",
  });
  console.log("6==", userData);

  useEffect(() => {
    axios
      .get(`https://node-server-y4bl.onrender.com/read/${id?.id}`)
      .then((data) =>
        setUserData((prev) => ({
          ...prev,
          name: data?.data[0].Name,
          email: data?.data[0]?.Email,
          mobile: data?.data[0]?.Mobile,
        }))
      )
      .catch((err) => console.log("10==", err));
  }, [id]);

  const handleUpdates = (e) => {
    e.preventDefault();
    axios
      .put(`https://node-server-y4bl.onrender.com/update/${id?.id}`, userData)
      .then((data) => {
        console.log("30==", data);
        navigate("/");
      })
      .catch((err) => console.log("30==", err));
  };

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div className="d-flex justify-content-center vh-100 align-items-center bg-info">
      <div className="bg-white rounded-4 d-flex flex-column justify-content-center align-items-center mh-100 my-5 p-5">
        <h2 className="table-title w-100">Update Student</h2>
        <form onSubmit={handleUpdates}>
          <div className="mb-3">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter name"
              className="name form-control"
              value={userData.name}
              onChange={(e) => handleOnchange(e)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Enter email"
              className="email form-control"
              value={userData.email}
              onChange={(e) => handleOnchange(e)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="mobile">Mobile</label>
            <input
              type="text"
              id="mobile"
              name="mobile"
              placeholder="Enter mobile"
              className="mobile form-control"
              value={userData.mobile}
              onChange={(e) => handleOnchange(e)}
            />
          </div>
          <div className="d-flex justify-content-between">
            <button type="submit" className="btn btn-secondary">
              Update
            </button>
            <Link to="/" className="btn btn-dark text-white ">
              Back
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Update;
