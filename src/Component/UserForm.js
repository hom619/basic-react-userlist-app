import React from "react";

export default function UserForm() {
  return (
    <div className="w-50 shadow-lg p-3 m-auto mt-5 rounded">
      <form action="">
        <div className="row">
          <div className="col-md-3">
            <select name="gender" id="inputState" className="form-control">
              <option selected>Choose...</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="col-md-6">
            <input
              name="name"
              type="text"
              class="form-control"
              placeholder="User name"
            />
          </div>
          <div className="col-md-3 d-grid">
            <button className="btn btn-primary">Add User</button>
          </div>
        </div>
      </form>
    </div>
  );
}
