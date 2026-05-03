import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("https://api.freeapi.app/api/v1/public/randomusers")
      .then((res) => res.json())
      .then((data) => {
        setUser(data.data.data);
      });
  }, []);

  return (
  <div className="app">
    
    <h1 className="heading">Users</h1>

    <div className="users-container">
      {user.map((user, index) => (
        <div key={index} className="card">
          <img
            src={user.picture.large}
            alt=""
            className="avatar"
          />
          <h3 className="name">
            {user.name.first} {user.name.last}
          </h3>
          <p className="email">{user.email}</p>
        </div>
      ))}
    </div>

  </div>
);
}

export default App