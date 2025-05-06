import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Create() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: null,
  });
  const handleOnchange = (e) => {
    const { value, name } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("5==", formData);
    axios
      .post("https://node-server-y4bl.onrender.com/newData", formData)
      .then((data) => {
        console.log("18== data", data);
        navigate("/");
      })
      .catch((err) => console.log("18== err", err));
  };
  return (
    <div className="d-flex justify-content-center vh-100 align-items-center bg-info">
      <div className="bg-white rounded-4 d-flex flex-column justify-content-center align-items-center mh-100 my-5 p-5">
        <h2 className="table-title w-100">Add Student</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter name"
              className="name form-control"
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
              onChange={(e) => handleOnchange(e)}
            />
          </div>
          <button type="submit" className="btn btn-secondary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Create;
