import React, { useState, useEffect } from "react";

//  Your code goes here
const EditUserForm = (props) => {
  const [user, setUser] = useState(props.currentUser);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

//   Using useEffect to let the edit user form know that the props has changed its value.
//   and update the form with new props values (It is componentDidUpdate without using hooks)

// We compare the current and previous prop changes in componentDidMount like this:
// if (prevProps.currentUser !== this.state.currentUser)

  useEffect(() => {
    setUser(props.currentUser)
  }, [props])

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        props.updateUser(user.id, user);
      }}
    >
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          className="form-control"
          name="name"
          value={user.name}
          onChange={handleInputChange}
          placeholder="Enter the name"
        />
      </div>
      <div className="form-group">
        <label>Username</label>
        <input
          type="text"
          name="username"
          className="form-control"
          value={user.username}
          onChange={handleInputChange}
          placeholder="Enter the username"
        />
      </div>
      <div>
        <button type="submit" className="btn btn-primary mr-4">
          Update user
        </button>
        <button
          className="btn btn-danger"
          onClick={() => props.setEditing(false)}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditUserForm;
