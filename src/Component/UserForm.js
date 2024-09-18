import React, { useState } from "react";

export const UserForm = ({ addUser }) => {
  const [user, setUser] = useState({});
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value, //the [] will destructure the name property and find the value from the target
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    addUser(user);
  };
  return (
    <div className="w-50 shadow-lg p-3 m-auto mt-5 rounded">
      <form action="" onSubmit={handleOnSubmit}>
        <div className="row">
          <div className="col-md-3">
            <select
              name="gender"
              id="inputState"
              className="form-control"
              onChange={handleOnChange}
            >
              <option selected>Choose...</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div className="col-md-6">
            <input
              name="name"
              type="text"
              class="form-control"
              placeholder="User name"
              onChange={handleOnChange}
            />
          </div>
          <div className="col-md-3 d-grid">
            <button className="btn btn-primary">Add User</button>
          </div>
        </div>
      </form>
    </div>
  );
};
