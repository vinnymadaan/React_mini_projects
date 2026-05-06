import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [quotes, setQuotes] = useState([])
  const [currentQuote, setCurrentQuote] = useState(null)
  const [loading, setLoading] = useState(true)

  const fetchQuotes = () => {
    setLoading(true)

    fetch("https://api.freeapi.app/api/v1/public/quotes")
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      const quotesArray = data.data.data
      setQuotes(quotesArray)
      const randomindex = Math.floor(Math.random() * quotesArray.length)

      setCurrentQuote(quotesArray[randomindex])

      setLoading(false)
    })
  }

  useEffect(() => {
    fetchQuotes()
  }, [])

  const nextRandomQuotes = () => {
    const randomindex = Math.floor(Math.random() * currentQuote.length)
    setCurrentQuote(quotes[randomindex])
  }

  return (
    <div className="app">

      <h1 className="heading">✨ Quotes</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="container">

          
            <div className="card">

              <p className="content"> "{currentQuote?.content}" </p>

              <p className="author"> — {currentQuote?.author} </p>

            </div>
          

        </div>
      )}

      <button onClick={fetchQuotes} className="btn">
        Refresh Quotes
      </button>

    </div>
  )
}

export default App
