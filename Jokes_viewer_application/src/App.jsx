import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [jokes, setJokes] = useState([])
  const [currentJoke, setCurrentJoke] = useState(null);
  const [loading, setLoading] = useState(true)

  const fetchjokes = () => {
    setLoading(true)

    fetch("https://api.freeapi.app/api/v1/public/randomjokes")
      .then((res) => (res.json()))
      .then((data) => {
        console.log(data);

        const jokesArray = data.data.data;
        setJokes(jokesArray)

        const randomindex = Math.floor(Math.random() * jokesArray.length)
        
        setCurrentJoke(jokesArray[randomindex])

        setLoading(false)
      })
  }

  useEffect(() => {
    fetchjokes()
  }, [])

  const nextRandomJokes = () => {
    const randomindex = Math.floor(Math.random() * jokes.length)
    setCurrentJoke(jokes[randomindex])
  }

    return (
    <div className='app'>

      <h1 className='heading'>Jokes</h1>
      
      <button onClick={nextRandomJokes} className='btn'>New Joke</button>

      {/* 🔹 Loop through jokes */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="card">
          <p>{currentJoke?.content}</p>
        </div>
      )}


    </div>
  );
}

export default App
