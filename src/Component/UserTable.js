import React from "react";

export const UserTable = ({ userlist }) => {
  return (
    <div className="mt-5 shadow-lg p-2 rounded">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Avatar</th>
            <th scope="col">Username</th>
            <th scope="col">Gender</th>
          </tr>
        </thead>
        <tbody>
          {" "}
          {userlist.map((user, i) => {
            return (
              <tr key={i}>
                <th scope="row">{i + 1}</th>
                <td></td>
                <td>{user.name}</td>
                <td>{user.gender}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
