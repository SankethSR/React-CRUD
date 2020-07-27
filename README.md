# React CRUD application

Introduction

- This is a simple React CRUD application built using React hooks.

# Prerequisites

- You'll need a basic knowledge of HTML, CSS, and JavaScript/ES6.
- You should also know the fundamentals of React, which you can learn by reading [Getting Started with React](https://www.taniarascia.com/getting-started-with-react/).

In this tutorial, we'll make a simple CRUD app. It will have users, and you'll be able to add, update, or delete users. We won't use any React classes, and instead we'll utilize State Hooks and Effect Hooks on functional components.

### Installation

React requires the latest [Node.js](https://nodejs.org/) to run.

Download the latestr Node [here](https://nodejs.org/en/download/).

> Install npm after downloading and installing the node with below command

```sh
$ npm install
or
$ npm install -g npm@latest
```

### Create React App

We'll start by installing the project with create-react-app (CRA).

```sh
$ npx create-react-app react-crud-app
```

### Initial Setup

- Delete everything from the /src folder except App.js, index.js, and index.css.
- In index.js, we'll simplify it by removing the references to Service Workers.

### Simple App Functional component

```
import React from 'react'

const App = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light display-1">
        CRUD App with Hooks
      </nav>
      <div className="container mt-3">
        <div className="row justify-content-between">
            <div className="col-6">
              <h6 className="display-4">Add user</h6>
            </div>
            <div className="col-6 shadow-sm rounded">
                <h6 className="display-4">View users</h6>
            </div>
        </div>
      </div>
    </div>
  )
}

export default App
```

### Table Functional Component

```
import React from 'react'

const UserTable = () => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Username</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr>
            <td>Name data</td>
            <td>Username data</td>
            <td>
              <div className="justify-content-between">
                <button className="btn btn-primary mr-3">Edit</button>
                <button className="btn btn-danger">Delete</button>
              </div>
            </td>
          </tr>
    </tbody>
  </table>
)

export default UserTable
```

> Let's bring in some random dummy data and the useState import from React.

```
import React from 'react'

const App = () => {
    const usersData = [
        { id: 1, name: 'Tania', username: 'floppydiskette' },
        { id: 2, name: 'Craig', username: 'siliconeidolon' },
        { id: 3, name: 'Ben', username: 'benisphere' },
      ]

    const [users, setUsers] = useState(usersData)
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light display-1">
        CRUD App with Hooks
      </nav>
      <div className="container mt-3">
        <div className="row justify-content-between">
            <div className="col-6">
              <h6 className="display-4">Add user</h6>
            </div>
            <div className="col-6 shadow-sm rounded">
                <h6 className="display-4">View users</h6>
            </div>
        </div>
      </div>
    </div>
  )
}

export default App
```

> Props works just as it did before. We'll map through the user data we sent through and display the properties for each user, or display a message if there are no users. The edit and delete buttons aren't hooked up to anything yet, so they won't do anything.

```
import React from 'react'

const UserTable = (props) => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Username</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>
              <div className="justify-content-between">
                <button className="btn btn-primary mr-3">Edit</button>
                <button className="btn btn-danger">Delete</button>
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
)

export default UserTable
```

### Adding a new user

> First thing we can do is create the actual function that will add the new user to state. We have the setUsers function automatically from useState, so that's what we'll use to update the user state.

```
import React from 'react'

const App = () => {
    const usersData = [
        { id: 1, name: 'Tania', username: 'floppydiskette' },
        { id: 2, name: 'Craig', username: 'siliconeidolon' },
        { id: 3, name: 'Ben', username: 'benisphere' },
      ]

    const [users, setUsers] = useState(usersData)

    const addUser = (user) => {
        user.id = users.length + 1
        setUsers([...users, user])
    }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light display-1">
        CRUD App with Hooks
      </nav>
      <div className="container mt-3">
        <div className="row justify-content-between">
            <div className="col-6">
              <h6 className="display-4">Add user</h6>
            </div>
            <div className="col-6 shadow-sm rounded">
                <h6 className="display-4">View users</h6>
            </div>
        </div>
      </div>
    </div>
  )
}

export default App
```

## License

MIT
