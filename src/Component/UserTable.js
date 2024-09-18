import React from "react";
import { MaleAvatar, FemaleAvatar } from "./Avatars";
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
                <td>
                  {user.gender === "Male" ? <MaleAvatar /> : <FemaleAvatar />}
                </td>
                <td
                  style={
                    user.gender === "Male"
                      ? { color: "blue" }
                      : { color: "#DE3163" }
                  }
                >
                  {user.name}
                </td>
                <td>{user.gender}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
