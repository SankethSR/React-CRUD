import React, { useState } from "react";

const AddUserForm = (props) => {
  const initialFormState = { id: null, name: "", username: "" };
  const [user, setUser] = useState(initialFormState);

  //   In order to handle the input changes we write the below code
  const handleInputChange = (event) => {
    //   We can console log the event to check the details of it.
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!user.name || !user.username) return;

        props.addUser(user);
        setUser(initialFormState);
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
      <button type="submit" className="btn btn-primary">
        Add new user
      </button>
    </form>
  );
};

export default AddUserForm;
