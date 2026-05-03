import { useEffect, useState } from "react";
import "./App.css";

function App() {

  // 🔹 Store cat image URL
  const [cat, setCat] = useState(null);

  // 🔹 Loading state
  const [loading, setLoading] = useState(true);

  // 🔹 Function to fetch cat
  const fetchCat = () => {
    setLoading(true);

    fetch("https://api.freeapi.app/api/v1/public/cats/cat/random")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        // 🔥 Extract image URL
        setCat(data.data.image);

        setLoading(false);
      });
  };

  // 🔹 Run once when app loads
  useEffect(() => {
    fetchCat();
  }, []);

  return (
    <div className="app">

      <h1 className="heading">Random Cat 🐱</h1>

      {/* 🔹 Show loading or image */}
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <img src={cat} alt="cat" className="cat-img" />
      )}

      {/* 🔹 Button to fetch new cat */}
      <button onClick={fetchCat} className="btn">
        New Cat
      </button>

    </div>
  );
}

export default App;