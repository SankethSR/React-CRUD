import React, { Component, useState } from "react";
import UserTable from "./tables/UserTable";
import AddUserForm from "./tables/AddUserForm";
import EditUserForm from "./tables/EditUserForm";

// Your code goes here
// simple component
const App = () => {
  // const initialBookState = {
  //   title: "",
  //   available: false,
  // };

  // const [book, setBook] = useState(initialBookState);

  // update the state using function
  // const updateBook = (book) => {
  //   setBook({ title: book.title, available: book.available });
  // };

  const usersData = [
    { id: 1, name: "Tania", username: "floppydiskette" },
    { id: 2, name: "Craig", username: "siliconeidolon" },
    { id: 3, name: "Ben", username: "benisphere" },
  ];

  const [users, setUsers] = useState(usersData);

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  // Editing, whether or not edit mode is turned on. It will begin as false.
  const [editing, setEditing] = useState(false);
  // Since we don't know who is being edited until it's selected, we'll create initial empty state
  const initialFormState = { id: null, name: "", username: "" };
  // We'll want a way to see and update who the current user being edited is, so we'll apply that empty user to a currentUser state.
  const [currentUser, setCurrentUser] = useState(initialFormState);
  // When Edit is selected on a user, it should turn on edit mode, and set the current user.
  const editRow = (user) => {
    setEditing(true);
    console.table(user);
    setCurrentUser({ id: user.id, name: user.name, username: user.username });
  };

  // Unlike delete (which filters a user out by ID) or add (which appends a user to the array),
  // the update function needs to map through the array, and update the user that matches the ID passed through.
  const updateUser = (id, updatedUser) => {
    setEditing(false);

    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light display-1">
        CRUD App with Hooks
      </nav>
      <div className="container mt-3">
        <div className="row justify-content-between">
          {editing ? (
            <div className="col-6">
              <h6 className="display-4">Update user</h6>
              <EditUserForm
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>
          ) : (
            <div className="col-6">
              <h6 className="display-4">Add user</h6>
              <AddUserForm addUser={addUser} />
            </div>
          )}

          <div className="col-6 shadow-sm rounded">
            <h6 className="display-4">View users</h6>
            <UserTable
              users={users}
              deleteUser={deleteUser}
              editRow={editRow}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// class component
// class App extends Component {
//   initialState = {
//     title: "",
//     available: false,
//   };

//   state = initialState;

//   update the state using method
//   updateBook = (book) => {
//     this.setState({ title: book.title, available: book.available });
//   };
//   render() {
//     return <h1>Hello</h1>;
//   }
// }

export default App;
