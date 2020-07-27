import React from "react";

const UserTable = (props) => (
  <table className="table table-hover table-striped table-bordered">
    <thead>
      <tr>
        <th>Name</th>
        <th>Username</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {/* <tr>
        <td>Name data</td>
        <td>Username data</td>
        <td className="justify-content-between">
          <button className="btn btn-primary">Edit</button>
          <button className="btn btn-danger">Delete</button>
        </td>
      </tr> */}
      {props.users.length > 0 ? (
        props.users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>
              <div className="justify-content-between">
                <button className="btn btn-primary mr-3" onClick={() => {props.editRow(user)}}>Edit</button>
                <button className="btn btn-danger" onClick={() => props.deleteUser(user.id)}>Delete</button>
              </div>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3} className="text-center">
            No User Data
          </td>
        </tr>
      )}
    </tbody>
  </table>
);

export default UserTable;
