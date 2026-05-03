import { useState, useEffect } from "react";

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
    <div>
      <h1>Users</h1>

      {user.map((user, index) => (
        <div key={index}>
          <img src={user.picture.large} />
          <h3>{user.name.first} {user.name.last}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default App